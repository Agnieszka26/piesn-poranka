import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ReviewItem } from '../../types';
import { SupabaseClient } from '@supabase/supabase-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminReviewTab = ({supabase}: {supabase : SupabaseClient<any, "public", "public", any, any>}) => {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);
    const [loading, setLoading] = useState(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function addReview(data: any) {
    setLoading(true);
    const { error, data: row } = await supabase.from('reviews').insert([{ author: data.author, text: data.text, rating: parseInt(data.rating || 0) }]).single();
    setLoading(false);
    if (error) return alert(error.message);
    setReviews(prev => [row, ...prev]);
    reset();
  }

  async function deleteReview(id: number) {
    if (!confirm('Usuń opinię?')) return;
    setLoading(true);
    const { error } = await supabase.from('reviews').delete().eq('id', id);
    setLoading(false);
    if (error) return alert(error.message);
    setReviews(prev => prev.filter(x => x.id !== id));
  }
 const { register, handleSubmit, reset } = useForm();
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function submit(data: any) { await addReview(data); reset(); }

    async function getAllReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("id", { ascending: false });
      if (error) return alert(error.message);
      setReviews(data);
    }
    useEffect(() => {
      async function fetchData() {
        await getAllReviews();
      }
      fetchData();
    }, []);
  
  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2 mb-4">
        <input {...register('author')} placeholder="Autor" className="border p-2 rounded" />
        <input {...register('rating')} placeholder="Ocena (0-5)" type="number" className="border p-2 rounded" />
        <textarea {...register('text')} placeholder="Treść opinii" className="border p-2 rounded" />
        <button className="px-3 py-2 bg-emerald-600 text-white rounded" disabled={loading}>Dodaj opinię</button>
      </form>

      <div className="space-y-2">
        {reviews.map(r => (
          <div key={r.id} className="border p-2 rounded flex justify-between items-start">
            <div>
              <div className="font-medium">{r.author} <span className="text-sm text-gray-500">({r.rating}/5)</span></div>
              <div className="text-sm text-gray-700">{r.text}</div>
              <div className="text-xs text-gray-400">{dayjs(r.inserted_at).format('YYYY-MM-DD HH:mm')}</div>
            </div>
            <div>
              <button onClick={() => deleteReview(r.id)} className="px-2 py-1 bg-red-500 text-white rounded text-sm">Usuń</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AdminReviewTab