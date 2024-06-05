import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="py-16 flex flex-col gap-10">
      <h2 className="text-3xl text-foreground font-bold">Explore Anime</h2>

      <section className="grid 2k:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}
