import { useEffect, useState } from "react";
import { OfferItem } from "../../types";
import Image from "next/image";
import example from "../../../(pub)/assets/images/gallery_1.png"
type Props = {
  initialData: OfferItem[];
  deleteOffer: (id: number, path: string) => Promise<void>;
};

const OffersTable: React.FC<Props> = ({ initialData, deleteOffer }) => {
// const [data, setData] = useState<OfferItem[]>([])
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<OfferItem>>({});

  const handleEditClick = (item: OfferItem) => {
    console.log('item', item)
    setEditingId(item.id);
    setEditForm(item);
  };

  const handleSave = (id: number) => {
    // setData((prev) =>
    //   prev.map((item) => (item.id === id ? { ...item, ...editForm } : item))
    // );
    // setEditingId(null);
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Created At</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Subtitle</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.created_at}</td>
              <td className="px-4 py-2 border">
                {editingId === item.id ? (
                  <input
                    type="text"
                    name="title"
                    value={editForm.title}
                    onChange={handleChange}
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                  item.title
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingId === item.id ? (
                  <input
                    type="text"
                    name="subtitle"
                    value={editForm.subtitle}
                    onChange={handleChange}
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                  item.subtitle
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingId === item.id ? (
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleChange}
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                  item.description
                )}
              </td>
              <td className="px-4 py-2 border">
                {editingId === item.id ? (
                  <input
                    type="text"
                    name="image"
                    value={editForm.image}
                    onChange={handleChange}
                    className="border px-2 py-1 w-full"
                  />
                ) : (
                 
                    
                  <Image
                    src={item.image}
                    alt={item.title && " example image"}
                    className="h-48 w-48 object-cover"
                    width={1200}
                    height={1200}
                    />
                   
                )}
              </td>
              <td className="px-4 py-2 border space-x-2">
                {editingId === item.id ? (
                  <>
                    <button
                      onClick={() => handleSave(item.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Zapisz
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-300 text-black px-2 py-1 rounded"
                    >
                      Anuluj
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditClick(item)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Edytuj
                    </button>
                    <button
                      onClick={() => deleteOffer(item.id, item.image)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Usuń
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OffersTable;
