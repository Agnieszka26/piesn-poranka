import { SupabaseClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { GalleryItem } from '../../types';
// import { supabaseUrl } from '../../page';

  function getPublicUrl(path: string) {
    const supabaseUrl = ""
    if (!path) return null;
    return `${supabaseUrl.replace(/\/$/, '')}/storage/v1/object/public/uploads/${encodeURIComponent(path)}`;
  }

  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminGalleryTab = ({supabase}: {supabase : SupabaseClient<any, "public", "public", any, any>}) => {
  const { register, handleSubmit,  reset  } = useForm();
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(false);
    // Gallery: upload file to storage -> insert row with path
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onUploadGallery(form: any) {
    if (!form.file[0]) return alert('Choose file');
    const file = form.file[0];
    const filename =`Date.now()_${file.name}`;
    setLoading(true);
    const { error: upErr } = await supabase.storage.from('uploads').upload(filename, file, { upsert: false });
    if (upErr) { setLoading(false); return alert(upErr.message); }
    // store metadata
    const { data, error } = await supabase.from('gallery').insert([{ title: form.title || file.name, description: form.description || '', path: filename }]).single();
    setLoading(false);
    if (error) return alert(error.message);
    setGallery(prev => [data, ...prev]);
    reset();
  }
    async function deleteGallery(id: number, path: string) {
    if (!confirm('Usuń zdjęcie?')) return;
    setLoading(true);
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    const { error: rmErr } = await supabase.storage.from('uploads').remove([path]);
    setLoading(false);
    if (error) return alert(error.message);
    setGallery(prev => prev.filter(x => x.id !== id));
  }
  async function getAllGallery() {
    const { data, error } = await supabase.from('gallery').select('*').order('id', { ascending: false });
    if (error) return alert(error.message);
    setGallery(data);
  }
  useEffect(() => {
    async function fetchData() {
      await getAllGallery();
    }
   fetchData()
  }, []);

   return (
     <div>
       <form onSubmit={handleSubmit(onUploadGallery)} className="flex flex-col gap-2 mb-4">
         <input {...register('title')} placeholder="Tytuł" className="border p-2 rounded" />
         <input {...register('description')} placeholder="Opis" className="border p-2 rounded" />
         <input {...register('file')} type="file" accept="image/*" className="border p-2 rounded" />
         <button className="px-3 py-2 bg-indigo-600 text-white rounded" disabled={loading}>Dodaj zdjęcie</button>
       </form>
 
       <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
         {gallery.map(item => (
           <div key={item.id} className="border rounded overflow-hidden">
             {item.path ? <Image src={getPublicUrl(item.path) || ""} alt={item.title} className="w-full h-40 object-cover" /> : <div className="h-40 bg-gray-100" />}
             <div className="p-2">
               <div className="font-medium">{item.title}</div>
               <div className="text-sm text-gray-600">{item.description}</div>
               <div className="mt-2 flex gap-2">
                 <button onClick={() => deleteGallery(item.id, item.path)} className="px-2 py-1 bg-red-500 text-white rounded text-sm">Usuń</button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 }

export default AdminGalleryTab
