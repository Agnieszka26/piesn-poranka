"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { GalleryItem } from "../../types";
import GalleryPreview from "@/app/(pub)/components/sections/GalleryPreview";
import { useRouter } from "next/navigation";
import { supabase } from "../../helpers/supabase-browser";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { updateGalleryPositions } from "../../actions";

type GalleryItemForm = GalleryItem & {
  file: FileList;
};

interface SortableGalleryItemProps {
  item: GalleryItem;
  deleteGallery: (id: number, path: string) => void;
}

function SortableGalleryItem({
  item,
  deleteGallery,
}: SortableGalleryItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border rounded overflow-hidden"
    >
      {item.image_url ? (
        <Image
          src={item.image_url}
          alt={item.description}
          className="w-full h-40 object-cover"
          width={1200}
          height={1200}
        />
      ) : (
        <div className="h-40 bg-gray-100" />
      )}
      <div className="p-2">
        <div className="font-medium">{item.name_image}</div>
        <div className="text-sm text-gray-600">{item.description}</div>
        <div className="mt-2 flex gap-2">
          <button
            onClick={() => deleteGallery(item.id, item.image_url)}
            className="px-2 py-1 bg-red-500 text-white rounded text-sm"
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
}

const AdminGalleryTab = () => {
  const { register, handleSubmit, reset } = useForm<GalleryItemForm>();
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const sensors = useSensors(useSensor(PointerSensor));

  async function onUploadGallery(form: GalleryItemForm) {
    if (!form.file) return alert("Choose file");
    const file = form.file[0];
    if (!file?.name) return alert("Choose a file name");
    const filename = `${file.name}`;
    setLoading(true);

    const { data: fileStorage, error: upErr } = await supabase.storage
      .from("gallery-images")
      .upload(`${filename}`, file);
    if (upErr) {
      setLoading(false);
      console.log("error do storage", upErr);
      return alert(upErr.message);
    }

    const { path } = fileStorage;
    const { data: url } = await supabase.storage
      .from("gallery-images")
      .createSignedUrl(path, 360000);
    const publicPhotoUrl = url?.signedUrl;

    const { data: last } = await supabase
      .from("gallery")
      .select("position")
      .order("position", { ascending: false })
      .limit(1)
      .single();
    const nextPosition = (last?.position ?? 0) + 1;

    const { error } = await supabase
      .from("gallery")
      .insert([
        {
          name_image: form.name_image,
          description: form.description || "",
          image_url: publicPhotoUrl,
          position: nextPosition,
        },
      ])
      .single();
    if (error) return alert(error.message);

    reset();
    setLoading(false);
    router.refresh();
  }

  async function deleteGallery(id: number, path: string) {
    if (!confirm("Usuń zdjęcie?")) return;
    setLoading(true);
    const { error } = await supabase.from("gallery").delete().eq("id", id);
    const { error: rmErr } = await supabase.storage
      .from("gallery-images")
      .remove([path]);
    setLoading(false);
    if (error) return alert(error.message);
    if (rmErr) return alert(rmErr.message);

    setGallery((prev) => prev.filter((x) => x.id !== id));
  }

  async function getAllGallery() {
    const data = await supabase
      .from("gallery")
      .select("*")
      .order("position", { ascending: true });
    if (data.error) return alert(data.error.message);
    setGallery(data.data);
  }

  useEffect(() => {
    async function fetchData() {
      await getAllGallery();
    }
    fetchData();
  }, []);
async function handleDragEnd(event: DragEndEvent) {
  const { active, over } = event;
  if (!over) return;
  if (active.id === over.id) return;

  const oldIndex = gallery.findIndex((g) => g.id === active.id);
  const newIndex = gallery.findIndex((g) => g.id === over.id);
  const newGallery = arrayMove(gallery, oldIndex, newIndex);

  // Natychmiast aktualizujemy UI
  setGallery(newGallery);

  // Aktualizacja pozycji na serwerze w tle
  startTransition(() => {
    updateGalleryPositions(
      newGallery.map((item, index) => ({ id: item.id, position: index + 1 }))
    ).catch((err) => console.error("Błąd aktualizacji galerii:", err));
  });
}` `

  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit(onUploadGallery)}
        className="flex flex-col gap-2 mb-4"
      >
        <input
          {...register("name_image")}
          placeholder="Tytuł"
          className="border p-2 rounded"
        />
        <input
          {...register("description")}
          placeholder="Opis"
          className="border p-2 rounded"
        />
        <input
          {...register("file")}
          type="file"
          accept="image/*"
          className="border p-2 rounded"
        />
        <button
          className="px-3 py-2 bg-indigo-600 text-white rounded"
          disabled={loading}
        >
          Dodaj zdjęcie
        </button>
      </form>

      {loading ? (
        <p>Chwilkę...</p>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={gallery.map((g) => g.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pb-4">
              {gallery.map((item) => (
                <SortableGalleryItem
                  key={item.id}
                  item={item}
                  deleteGallery={deleteGallery}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      <p className="mx-auto text-2xl text-center p-8">
        Podgląd zdjęć w galerii na stronie
      </p>
      <GalleryPreview galleryImages={gallery} />
    </div>
  );
};

export default AdminGalleryTab;
