// import { createClientServ } from "./supabase-server";
// import Image from "next/image";
// import { revalidatePath } from "next/cache";
// import UploadHeroImageForm from "./UploadHeroImageForm";

export default async function AdminBackgroundTab() {
  // const supabase = await createClientServ();

  // const { data: gallery, error } = await supabase
  //   .from("hero_background")
  //   .select("*")
  //   .order("id", { ascending: false });

  // if (error) {
  //   return <p className="text-red-500">{error.message}</p>;
  // }

  // async function changeStatus(id: number, status: "selected" | "disabled") {
  //   const supabase =await createClientServ();

  //   await supabase
  //     .from("hero_background")
  //     .update({ status })
  //     .eq("id", id);

  //   // revalidatePath("/admin");
  // }

  return (
    <div className="py-4">
      {/* <UploadHeroImageForm />

      <p className="text-2xl text-center p-4">Dostępne zdjęcia:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery?.map(({ id, image_name, image_url, status }) => (
          <div key={id} className="flex flex-col items-center gap-2">
            <div className="relative rounded-2xl overflow-hidden shadow">
              <Image
                src={image_url}
                alt={image_name}
                width={1200}
                height={1200}
                className="object-cover h-64"
              />
            </div>

            {status === "disabled" && (
              <form action={changeStatus.bind(null, id, "selected")}>
                <button className="px-3 py-2 bg-indigo-600 text-white rounded">
                  Wybierz
                </button>
              </form>
            )}

            {status === "selected" && (
              <span className="text-green-600 font-semibold">Wybrane ✅</span>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
}
