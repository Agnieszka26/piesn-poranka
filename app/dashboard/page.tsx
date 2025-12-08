'use client'
// NextJS Admin Panel (single-file starter)
// Default export: AdminPanel component
// Purpose: simple CMS admin for Gallery, Reviews, Dates, Offer using Supabase (Auth + Postgres + Storage)
// Instructions:
// 1. Install dependencies: `npm install @supabase/supabase-js react-hook-form dayjs` plus Tailwind in your Next.js app.
// 2. Set env vars in your Next.js environment (.env.local):
//    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
//    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
// 3. Create Supabase tables (SQL below) and a Storage bucket named 'uploads'.
// 4. Paste this file into a page (e.g. pages/admin.jsx or app/admin/page.jsx) and secure the route server-side if needed.

/*
SQL to create tables (run in Supabase SQL editor):

create table gallery (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  path text, -- storage path
  inserted_at timestamptz default now()
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  author text,
  text text,
  rating int,
  inserted_at timestamptz default now()
);

create table dates (
  id uuid primary key default gen_random_uuid(),
  day date unique,
  status text default 'booked',
  inserted_at timestamptz default now()
);

create table site_content (
  id serial primary key,
  key text unique,
  value text,
  inserted_at timestamptz default now(),
  updated_at timestamptz
);

-- seed a key for 'offer' (example)
insert into site_content (key, value) values ('offer', 'Tutaj wpisz ofertę') on conflict (key) do nothing;
*/

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { env } from 'process';



export const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || "https://vumsqpbytakgvqprzfmn.supabase.co"
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AdminPanel() {
  const [user, setUser] = useState(null);

  const [reviews, setReviews] = useState([]);
  const [dates, setDates] = useState([]);
  const [offer, setOffer] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // auth listener
    const session = supabase.auth.session ? supabase.auth.session() : null;
    setUser(session?.user ?? null);

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    fetchAll();
    return () => listener?.unsubscribe();
  }, []);

  async function signIn(email) {
    setLoading(true);
    const { error } = await supabase.auth.signIn({ email });
    setLoading(false);
    if (error) alert(error.message);
    else alert('Sprawdź skrzynkę - wysłano magic link');
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  async function fetchAll() {
    setLoading(true);
    const [g, r, d, s] = await Promise.all([
      supabase.from('gallery').select('*').order('inserted_at', { ascending: false }),
      supabase.from('reviews').select('*').order('inserted_at', { ascending: false }),
      supabase.from('dates').select('*').order('day', { ascending: true }),
      supabase.from('site_content').select('value').eq('key', 'offer')
    ]);
    // if (!g.error) setGallery(g.data || []);
    // if (!r.error) setReviews(r.data || []);
    // if (!d.error) setDates(d.data || []);
    if (!s.error && s.data && s.data[0]) setOffer(s.data[0].value || '');
    setLoading(false);
  }











  // Simple UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">CMS Admin</h1>
          <div>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{user.email}</span>
                <button onClick={signOut} className="px-3 py-1 bg-red-500 text-white rounded">Wyloguj</button>
              </div>
            ) : (
              <LoginForm onSignIn={signIn} loading={loading} />
            )}
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">



        </main>
      </div>
    </div>
  );
}

function LoginForm({ onSignIn, loading }) {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(data => onSignIn(data.email))} className="flex gap-2">
      <input {...register('email')} type="email" placeholder="Email" required className="border p-2 rounded" />
      <button type="submit" disabled={loading} className="px-3 py-1 bg-green-600 text-white rounded">Zaloguj</button>
    </form>
  );
}



