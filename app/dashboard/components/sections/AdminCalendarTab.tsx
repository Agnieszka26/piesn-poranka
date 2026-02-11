"use client";
import { useEffect, useMemo, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { pl } from "react-day-picker/locale";
import { supabase } from "../../helpers/supabase-browser";
import toast from "react-hot-toast";

type CalendarRow = {
  id: number;
  date_from: string;
  date_to: string;
  status: string;
};
type BookedRange = DateRange & { id: number };
const AdminCalendarTab = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [bookedRanges, setBookedRanges] = useState<BookedRange[]>([]);
  const today = new Date();

  const getRanges = async () => {
    const { data, error } = await supabase
      .from("calendar")
      .select("date_from, date_to, id")
      .eq("status", "booked")
      .order("date_from", { ascending: true });

    if (error) {
      toast.error("Błąd przy pobiorze danych z bazy. ⛔");
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

  const disabledDays = useMemo(() => bookedRanges, [bookedRanges]);


  const saveRange = async () => {
    const toastId = toast.loading("Zapisywanie...");
    if (!range?.from || !range?.to) return;

    const { error } = await supabase.from("calendar").insert({
      date_from: range.from.toISOString(),
      date_to: range.to.toISOString(),
      status: "booked",
    });

    if (error) {
      toast.error(error.message ?? "Coś poszło nie tak", { id: toastId });
    } else {
      toast.success("Zakres zapisany ✅", { id: toastId });
      setRange(undefined);
      await getRanges();
    }
  };

  const deleteRange = async (id: number) => {
    const toastId = toast.loading("Zapisywanie...");
    const { error } = await supabase.from("calendar").delete().eq("id", id);

    if (error) {
      toast.error(error.message ?? "Coś poszło nie tak ⛔", { id: toastId });
    } else {
      toast.success("Zakres usunięty 🗑️", { id: toastId });
      await getRanges();
    }
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
    {range?.from   && <button
        onClick={saveRange}
        disabled={!range?.from || !range?.to}
        className="m-4 px-4 py-2 rounded-xl bg-blue-500 text-white disabled:bg-gray-300 disabled:opacity-60"
      >Zapisz zakres</button>}

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
