import { SupabaseClient } from "@supabase/supabase-js";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { addMonths } from "date-fns";
import { pl } from "date-fns/locale";
const AdminCalendarTab = ({
  supabase,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: SupabaseClient<any, "public", "public", any, any>;
}) => {
  const [dates, setDates] = React.useState<
    { id: number; day: string; status: string }[]
  >([]);
  const [loading, setLoading] = React.useState(false);
  const start = dayjs();
  const days = Array.from({ length: 60 }).map((_, i) =>
    start.add(i, "day").format("YYYY-MM-DD")
  );
  const booked = new Set(dates.map((d) => d.day));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function toggleDate(day: any) {
    // day is 'YYYY-MM-DD'
    const existing = dates.find((d) => d.day === day);
    setLoading(true);
    if (existing) {
      // remove entry -> make it free
      const { error } = await supabase
        .from("dates")
        .delete()
        .eq("id", existing.id);
      setLoading(false);
      if (error) return alert(error.message);
      setDates((prev) => prev.filter((x) => x.id !== existing.id));
    } else {
      const { data, error } = await supabase
        .from("dates")
        .insert([{ day, status: "booked" }])
        .single();
      setLoading(false);
      if (error) return alert(error.message);
      setDates((prev) =>
        [...prev, data].sort((a, b) => a.day.localeCompare(b.day))
      );
    }
  }


  async function getAllDates() {
    const { data, error } = await supabase
      .from("dates")
      .select("*")
      .order("day", { ascending: true });
    if (error) return alert(error.message);
    setDates(data);
  }
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
  useEffect(() => {
    async function fetchData() {
      await getAllDates();
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-7 gap-1">
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
        {/* {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDate(day)}
            className={`p-2 text-xs rounded ${
              booked.has(day) ? "bg-red-200" : "bg-green-100"
            }`}
          >
            <div>{dayjs(day).format("DD")}</div>
            <div className="text-[10px]">{dayjs(day).format("ddd")}</div>
          </button>
        ))} */}
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Kliknij datę, aby przełączać zajęto/wolne.
      </div>
    </div>
  );
};

export default AdminCalendarTab;
