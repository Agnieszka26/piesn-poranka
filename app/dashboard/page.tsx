// 'use client'
// // NextJS Admin Panel (single-file starter)
// // Default export: AdminPanel component
// // Purpose: simple CMS admin for Gallery, Reviews, Dates, Offer using Supabase (Auth + Postgres + Storage)
// // Instructions:
// // 1. Install dependencies: `npm install @supabase/supabase-js react-hook-form dayjs` plus Tailwind in your Next.js app.
// // 2. Set env vars in your Next.js environment (.env.local):
// //    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
// //    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
// // 3. Create Supabase tables (SQL below) and a Storage bucket named 'uploads'.
// // 4. Paste this file into a page (e.g. pages/admin.jsx or app/admin/page.jsx) and secure the route server-side if needed.

// /*
// SQL to create tables (run in Supabase SQL editor):

// create table gallery (
//   id uuid primary key default gen_random_uuid(),
//   title text,
//   description text,
//   path text, -- storage path
//   inserted_at timestamptz default now()
// );

// create table reviews (
//   id uuid primary key default gen_random_uuid(),
//   author text,
//   text text,
//   rating int,
//   inserted_at timestamptz default now()
// );

// create table dates (
//   id uuid primary key default gen_random_uuid(),
//   day date unique,
//   status text default 'booked',
//   inserted_at timestamptz default now()
// );

// create table site_content (
//   id serial primary key,
//   key text unique,
//   value text,
//   inserted_at timestamptz default now(),
//   updated_at timestamptz
// );

// -- seed a key for 'offer' (example)
// insert into site_content (key, value) values ('offer', 'Tutaj wpisz ofertę') on conflict (key) do nothing;
// */

// import { useEffect, useState } from 'react';
// import { createClient, User } from '@supabase/supabase-js';
// import { useForm } from 'react-hook-form';

// export const supabaseUrl =  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vumsqpbytakgvqprzfmn.supabase.co"
// const supabaseAnonKey =  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "https://vumsqpbytakgvqprzfmn.supabase.co"
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export default function AdminPanel() {
//   const [user, setUser] = useState<User| null>(null);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     // auth listener
//     // supabase.auth.getSession().then(({ data: { session } }) => {
//     //   setUser(session?.user ?? null);
//     // });

//    supabase.auth.getSession().then(({ data: { session } }) => {
//  setUser(session?.user || null);
//     });
//     console.log("supabase.auth.getSession()", user);

//     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//     });
  
   
//   }, []);
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   async function signIn(email: any) {
//     setLoading(true);

//     const { error } = await supabase.auth.signInWithOAuth(email);
//     setLoading(false);
//     if (error) alert(error.message);
//     else alert('Sprawdź skrzynkę - wysłano magic link');
//   }

//   async function signOut() {
//     await supabase.auth.signOut();
//     setUser(null);
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-5xl mx-auto">
//           <p className="text-2xl font-semibold">CMS Admin</p>
//           <div>
//             {user ? (
//               <div className="flex items-center gap-3">
//                 <span className="text-sm text-gray-600">{user.email}</span>
//                 <button onClick={signOut} className="px-3 py-1 bg-red-500 text-white rounded">Wyloguj</button>
//               </div>
//             ) : (
//               <LoginForm onSignIn={signIn} loading={loading} />
//             )}
//           </div>
//       </div>
//     </div>
//   );
// }
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function LoginForm({ onSignIn, loading }: {onSignIn: any, loading: any}) {
//   const { register, handleSubmit } = useForm();
//   return (
//     <form onSubmit={handleSubmit(data => onSignIn(data.email))} className="flex gap-2">
//       <input {...register('email')} type="email" placeholder="Email" required className="border p-2 rounded" />
//       <button type="submit" disabled={loading} className="px-3 py-1 bg-green-600 text-white rounded">Zaloguj</button>
//     </form>
//   );
// }


import React from 'react'

const page = () => {
  return (
    <div>dashboard</div>
  )
}

export default page


