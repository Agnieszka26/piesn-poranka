"use client";

import { useEffect, useState, useTransition } from "react";
import { PriceCardProps } from "@/app/(pub)/typesProps";
import { fetchPrices } from "../../helpers/fetchPrices";
import { updatePriceAction } from "../../actions";
import toast from "react-hot-toast";

export default function AdminPriceTab() {
  const [rows, setRows] = useState<PriceCardProps[]>([]);
  const [_, startTransition] = useTransition();
  const setPrices = () => {
    const fd = async () => await fetchPrices();
    fd().then((data) => {
      setRows(data as unknown as PriceCardProps[]);
    });
  };
  function handleChange(
    key: string,
    field: "date" | "price" | "oldPrice",
    value: string | number | null,
  ) {
    setRows((prev) =>
      prev.map((row) => (row.key === key ? { ...row, [field]: value } : row)),
    );
  }

  async function handleSave(row: PriceCardProps) {
    const toastId = toast.loading("Zapisywanie...");
    startTransition(async () => {
      try {
        await updatePriceAction(row.key, row.date, row.price, row.oldPrice);
        toast.success(
          "Cena lub data zapisana ✅",

          { id: toastId },
        );
        setPrices();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        toast.error(e.message ?? "Coś poszło nie tak", { id: toastId });
      }
    });

  }

  useEffect(() => {
    setPrices();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Edycja cen i dat</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Sezon</th>
              <th className="p-2">Daty</th>
              <th className="p-2">Cena</th>
              <th className="p-2">Stara cena</th>
              <th className="p-2"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b">
                <td className="p-2 font-medium">{row.title}</td>

                <td>
                  <input
                    type="text"
                    value={row.date || ""}
                    onChange={(e) =>
                      handleChange(row.key, "date", e.target.value)
                    }
                    className="border px-2 py-1 rounded w-120"
                  />
                </td>

                <td className="p-2">
                  <input
                    type="number"
                    value={row.price || ""}
                    onChange={(e) =>
                      handleChange(row.key, "price", Number(e.target.value))
                    }
                    className="border px-2 py-1 rounded w-24"
                  />
                </td>

                <td className="p-2">
                  <input
                    type="number"
                    value={row.oldPrice || ""}
                    onChange={(e) =>
                      handleChange(
                        row.key,
                        "oldPrice",
                        e.target.value ? Number(e.target.value) : null,
                      )
                    }
                    className="border px-2 py-1 rounded w-24"
                  />
                </td>

                <td className="p-2">
                  <button
                    onClick={() => handleSave(row)}
                   
                    className="px-3 py-1 bg-black text-white rounded"
                  >
                    Zapisz
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
