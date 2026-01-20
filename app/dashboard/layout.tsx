import { Montserrat } from "next/font/google";
import "../globals.css";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "./helpers/supabase-server";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createSupabaseServerClient();
  const { data: { session } } = await (await supabase).auth.getSession();

  if (!session) redirect("/login");
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        
        {children}
      
      </body>
    </html>
  );
}
