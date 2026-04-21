// components/AvailabilityCalendar.tsx
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { pl } from "date-fns/locale";
import { addMonths } from "date-fns";
import { supabase } from "@/app/dashboard/helpers/supabase-browser";
import { useEffect, useState } from "react";
// import "index.css";

const normalizeDate = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const getDaysBetween = (start: Date, end: Date): Date[] => {
  const days: Date[] = [];

  const current = normalizeDate(start);
  const last = normalizeDate(end);

  while (current <= last) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return days;
};

export default function AvailabilityCalendar() {
  const [error, setError] = useState<string | null>(null);
  const [rangeStartDays, setRangeStartDays] = useState<Date[]>([]);
  const [rangeMiddleDays, setRangeMiddleDays] = useState<Date[]>([]);
  const [rangeEndDays, setRangeEndDays] = useState<Date[]>([]);
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
    if (!data) return;
    const starts: Date[] = [];
    const middles: Date[] = [];
    const ends: Date[] = [];

    data.forEach((range) => {
      const start = normalizeDate(new Date(range.date_from));
      const end = normalizeDate(new Date(range.date_to));

      const days = getDaysBetween(start, end);

      days.forEach((day, index) => {
        if (index === 0) starts.push(day);
        else if (index === days.length - 1) ends.push(day);
        else middles.push(day);
      });
    });

    setRangeStartDays(starts);
    setRangeMiddleDays(middles);
    setRangeEndDays(ends);
  };

  useEffect(() => {
    const fetchData = async () => await getRanges();
    fetchData();
  }, []);
  const today = new Date();
  return (
    <div className="backdrop-blur bg-white/10 border border-white/20 shadow-lg mx-auto text-center p-5 rounded-2xl  ">
      <h2 className="text-lg md:text-3xl mb-1">Dostępność obiektu</h2>
      <p className="text-gray-300 mb-4  mx-auto max-w-xs wrap-break-words hidden md:block">
        Sprawdź dostępne terminy i zaplanuj swoje wakacje w naszym ośrodku.
      </p>

      <div className="flex justify-center">
        <DayPicker
          mode="multiple"
          className="text-xs sm:text-base"
          // disabled={bookedDays}
          numberOfMonths={1}
          startMonth={today}
          endMonth={addMonths(today, 11)}
          locale={pl}
          modifiers={{
            range_start: rangeStartDays,
            range_middle: rangeMiddleDays,
            range_end: rangeEndDays,
          }}
          modifiersClassNames={{
            disabled: "line-through text-gray-300",
            today: "border border-primary-green rounded-full",
            range_start: "range-start",
            range_middle: "range-middle",
            range_end: "range-end",
          }}
          styles={{
            day_button: {
              cursor: "not-allowed",
              pointerEvents: "none",
            },
          }}
        />
      </div>
    </div>
  );
}
