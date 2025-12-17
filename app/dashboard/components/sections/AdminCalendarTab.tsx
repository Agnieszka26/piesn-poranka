"use client";
import { SupabaseClient } from "@supabase/supabase-js";
import { addMonths } from "date-fns";
import dayjs from "dayjs";
import React, { useEffect, useMemo, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { pl } from "react-day-picker/locale";
/**
 * ZAŁOŻENIA ZACHOWANIA:
 * 1. Zakresy z bazy są WIDOCZNE w kalendarzu (np. jako zajęte dni)
 * 2. Nie można kliknąć dni, które już są zajęte
 * 3. Admin może zaznaczyć nowy zakres (from → to)
 * 4. Po kliknięciu „Zapisz zakres” wysyłamy zakres do Supabase
 */

type CalendarRow = {
  id: number;
  date_from: string;
  date_to: string;
  status: string;
};
type BookedRange = DateRange & { id: number };
const AdminCalendarTab = ({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>;
}) => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [bookedRanges, setBookedRanges] = useState<BookedRange[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const today = new Date();

  /* ------------------ FETCH ZAKRESÓW Z BAZY ------------------ */
  const getRanges = async () => {
    const { data, error } = await supabase
      .from("calendar")
      .select("date_from, date_to, id")
      .eq("status", "booked")
      .order("date_from", { ascending: true });

    if (error) {
      setError(error.message);
      return;
    }

    const mapped: BookedRange[] = (data as CalendarRow[]).map((r) => ({
      id: r.id,
      from: new Date(r.date_from),
      to: new Date(r.date_to),
    }));

    setBookedRanges(mapped);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getRanges();
    };
    fetchData();
  }, []);

  /* ------------------ DNI ZABLOKOWANE ------------------ */
  const disabledDays = useMemo(() => bookedRanges, [bookedRanges]);

  /* ------------------ ZAPIS NOWEGO ZAKRESU ------------------ */
  const saveRange = async () => {
    if (!range?.from || !range?.to) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await supabase.from("calendar").insert({
      date_from: range.from.toISOString(),
      date_to: range.to.toISOString(),
      status: "booked",
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setRange(undefined);
      await getRanges();
    }

    setLoading(false);
  };

  const deleteRange = async (id: number) => {
    setLoading(true);
    console.log("id", id);
    const { error } = await supabase.from("calendar").delete().eq("id", id);

    if (error) {
      setError(error.message);
    } else {
      await getRanges();
    }

    setLoading(false);
  };
  return (
    <div className="pt-12">
      <div className="flex justify-center">
        <div className="backdrop-blur bg-white/10 border border-white/20 shadow-lg mx-auto text-center p-5 rounded-2xl  ">
          <DayPicker
            defaultMonth={today}
            numberOfMonths={3}
            animate
            mode="range"
            selected={range}
            onSelect={setRange}
            disabled={disabledDays}
            modifiers={{ booked: bookedRanges }}
            locale={pl}
            className="text-white"
            modifiersClassNames={{
              disabled: "line-through text-gray-400",
            }}
          />
        </div>
      </div>
      {range && (
        <p className="text-white mt-4 ml-4">
          Zakres do zapisania: od: {range?.from?.toLocaleDateString("pl")} do{" "}
          {range.to?.toLocaleDateString("pl")}
        </p>
      )}
      <button
        onClick={saveRange}
        disabled={!range?.from || !range?.to || loading}
        className="m-4 px-4 py-2 rounded-xl bg-blue-500 text-white disabled:bg-gray-300 disabled:opacity-60"
      >
        {loading ? "Zapisywanie..." : "Zapisz zakres"}
      </button>

      {error && <p className="text-red-500 mx-4">{error}</p>}
      {success && <p className="text-white mx-4">Zakres zapisany ✅</p>}

      <p className="mt-6 mb-2 text-white mx-4 text-xl ">Zabookowane daty: </p>
      <ul className="text-white  mx-4">
        {bookedRanges.map((r) => (
          <li key={r.id} className="flex justify-between w-1/3">
            {r.from?.toLocaleDateString("pl")} –{" "}
            {r.to?.toLocaleDateString("pl")}
            <button
              onClick={() => deleteRange(r.id)}
              className="text-red-400 hover:text-red-600"
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCalendarTab;
