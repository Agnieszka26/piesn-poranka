// components/AvailabilityCalendar.tsx
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { pl } from "date-fns/locale";
import { addMonths } from "date-fns";

export default function AvailabilityCalendar() {
  // przykładowe daty zajęte (można podmienić na dane z API)
  const bookedDays = [
    new Date(2026, 0, 10),
    new Date(2026, 0, 11),
    new Date(2026, 0, 18),
    new Date(2026, 0, 22),
    new Date(2026, 0, 23),
    new Date(2026, 1, 9),
    new Date(2026, 1, 15),
    new Date(2026, 1, 16),
  ];

  return (

      <div className="max-w-5xl mx-auto px-6 text-center bg-white py-10 rounded-2xl shadow-md text-gray-800 ">
        <h2 className="text-3xl mb-10">Dostępność obiektu</h2>
        <p className="text-gray-600 mb-8">
          Sprawdź dostępne terminy i zaplanuj swoje wakacje w naszym ośrodku.
        </p>

        <div className="flex justify-center">
          <DayPicker
            mode="multiple"
            selected={bookedDays}
            numberOfMonths={2}
            startMonth={new Date(2026, 0)}
            endMonth={addMonths(new Date(2026, 0), 11)}
            locale={pl}
            modifiersClassNames={{
              selected:
                "bg-primary-green text-white rounded-full hover:bg-red-500 transition",
              today: "border border-gray-400 rounded-full",
            }}
            styles={{
              nav_button: { backgroundColor: 'red', color: 'white'},
              caption: { textAlign: "center", fontWeight: "600" },
              head_cell: { color: "#666", fontSize: "0.9rem" },
              table: { margin: "0 auto" },
            }}
          />
        </div>

        <div className="mt-6 text-sm text-gray-600 flex justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-primary-green rounded-full" /> Zajęte
          </div>
        </div>
      </div>
  );
}
