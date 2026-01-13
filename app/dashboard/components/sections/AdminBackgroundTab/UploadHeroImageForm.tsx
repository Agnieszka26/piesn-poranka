"use client";

import { useState } from "react";
import { uploadHeroImage } from "./actions";

export default function UploadHeroImageForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    await uploadHeroImage(formData);
    setLoading(false);
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-2 mb-6">
      <input
        name="image_name"
        placeholder="Nazwa"
        className="border p-2 rounded"
      />

      <input
        name="file"
        type="file"
        accept="image/*"
        className="border p-2 rounded"
      />

      <button
        disabled={loading}
        className="px-3 py-2 bg-indigo-600 text-white rounded"
      >
        {loading ? "Zapisywanie..." : "Dodaj zdjęcie"}
      </button>
    </form>
  );
}
