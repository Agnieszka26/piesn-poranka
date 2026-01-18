// components/AvailabilityCalendar.tsx
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { pl } from "date-fns/locale";
import { addMonths } from "date-fns";
import { supabase } from "@/app/dashboard/helpers/supabase-browser";
import { useEffect, useState } from "react";
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
  const [bookedDays, setBookedDays] = useState<Date[]>([]);
  console.log("bookedDays", bookedDays);
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
    console.log("calendar data", data);
    if (!data) return;

    const days = data.flatMap((range) =>
      getDaysBetween(new Date(range.date_from), new Date(range.date_to))
    );

    setBookedDays(days);
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
          disabled={bookedDays}
          numberOfMonths={1}
          startMonth={today}
          endMonth={addMonths(today, 11)}
          locale={pl}
          modifiersClassNames={{
            disabled: "line-through text-gray-300",
            today: "border border-primary-green rounded-full",
          }}
          styles={{
            day_button: { cursor: "not-allowed" },
          }}
        />
      </div>
    </div>
  );
}
