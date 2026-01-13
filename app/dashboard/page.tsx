// "use client";

// import { useEffect, useState } from "react";
// import { createClient, User } from "@supabase/supabase-js";
// import { useForm } from "react-hook-form";
// import { redirect } from "next/navigation";

// export const homeUrl = process.env.NEXT_PUBLIC_HOME_URL || "http://localhost:3000/"
// export const supabaseUrl =
//   process.env.NEXT_PUBLIC_SUPABASE_URL ||
//   "https://vumsqpbytakgvqprzfmn.supabase.co";
// const supabaseAnonKey =
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
//   "https://vumsqpbytakgvqprzfmn.supabase.co";
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export default function AdminPanel() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       console.log(session);
//       setUser(session?.user || null);
//       if (session) {
//         redirect("/dashboard/preview");
//       }
//     });
//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null);
//       }
//     );
//   }, []);

//   async function signIn(email: string) {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithOtp({
//       email,
//       options: {
//         emailRedirectTo: `${homeUrl}dashboard/preview`
//       }
//     });
//     setLoading(false);
//     if (error) alert(error.message);
//     else alert("Sprawdź skrzynkę - wysłano magic link");
//   }

//   async function signOut() {
//     await supabase.auth.signOut();
//     setUser(null);
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-5xl mx-auto">
//         <p className="text-2xl font-semibold">CMS Admin</p>
//         <div>
//           {user ? (
//             <div className="flex items-center gap-3">
//               <span className="text-sm text-gray-600">{user.email}</span>
//               <button
//                 onClick={signOut}
//                 className="px-3 py-1 bg-red-500 text-white rounded"
//               >
//                 Wyloguj
//               </button>
//             </div>
//           ) : (
//             <LoginForm onSignIn={signIn} loading={loading} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function LoginForm({ onSignIn, loading }: { onSignIn: any; loading: any }) {
//   const { register, handleSubmit } = useForm();
//   return (
//     <form
//       onSubmit={handleSubmit((data) => onSignIn(data.email))}
//       className="flex gap-2"
//     >
//       <input
//         {...register("email")}
//         type="email"
//         placeholder="Email"
//         required
//         className="border p-2 rounded"
//       />
//       <button
//         type="submit"
//         disabled={loading}
//         className="px-3 py-1 bg-green-600 text-white rounded"
//       >
//         Zaloguj
//       </button>
//     </form>
//   );
// }

// 'use client'

// import { useFormStatus } from 'react-dom'
// import { signInAction } from './actions'

// function SubmitButton() {
//   const { pending } = useFormStatus()

//   return (
//     <button
//       type="submit"
//       disabled={pending}
//       className="px-3 py-1 bg-green-600 text-white rounded"
//     >
//       {pending ? 'Wysyłanie...' : 'Zaloguj'}
//     </button>
//   )
// }

// export default function AdminPanel() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-5xl mx-auto">
//         <p className="text-2xl font-semibold">CMS Admin</p>

//         <form action={signInAction} className="flex gap-2 mt-4">
//           <input
//             name="email"
//             type="email"
//             required
//             placeholder="Email"
//             className="border p-2 rounded"
//           />
//           <SubmitButton />
//         </form>
//       </div>
//     </div>
//   )
// }


"use client"
import MainAdminPage from "../dashboard/components/sections/MainAdminPage";

export default function Page() {
  return (
       <MainAdminPage
        />

  );
}
