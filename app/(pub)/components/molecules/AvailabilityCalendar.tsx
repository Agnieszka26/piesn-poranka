// components/AvailabilityCalendar.tsx
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { pl } from "date-fns/locale";
import { addMonths } from "date-fns";

export default function AvailabilityCalendar() {
  // przykładowe daty zajęte (można podmienić na dane z API)
  const bookedDays = [
    new Date(2025, 11, 10),
    new Date(2026, 11, 11),
    new Date(2026, 11, 18),
    new Date(2026, 0, 22),
    new Date(2026, 0, 23),
    new Date(2026, 1, 9),
    new Date(2026, 1, 15),
    new Date(2026, 1, 16),
  ];
const today = new Date();
  return (
    <div className="backdrop-blur bg-white/10 border border-white/20 shadow-lg mx-auto text-center p-5 rounded-2xl  ">
      <h2 className="text-3xl mb-1">Dostępność obiektu</h2>
      <p className="text-gray-300 mb-4  mx-auto max-w-xs wrap-break-words">
        Sprawdź dostępne terminy i zaplanuj swoje wakacje w naszym ośrodku.
      </p>

      <div className="flex justify-center">
        <DayPicker
          mode="multiple"
          selected={bookedDays}
          numberOfMonths={1}
          startMonth={today}
          endMonth={addMonths(today, 11)}
          locale={pl}
          modifiersClassNames={{
            selected: "line-through text-gray-300",
            today: " border border-primary-green rounded-full",
          }}
          styles={{
            caption: { textAlign: "center", fontWeight: "600" },
            head_cell: { color: "#666", fontSize: "0.6rem" },
            table: { margin: "0 auto" },
            day_button: { cursor: "not-allowed", pointerEvents: "none"},
            today: {borderRadius: "100%"}
          }}
        />
      </div>
    </div>
  );
}
