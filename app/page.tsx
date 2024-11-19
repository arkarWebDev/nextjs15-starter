import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center mt-52">
      <h2 className="text-6xl font-bold mb-10 uppercase">
        Changes in Next.js 15!!
      </h2>
      <Link
        href={"/todos"}
        className="text-sm font-semibold p-4 border-2 bg-black text-white border-black me-3"
      >
        View all todos ( Dynamic )
      </Link>
      <Link
        href={"/docs"}
        className="  text-sm font-semibold border-2 p-4 border-black"
      >
        View docs ( Static )
      </Link>
    </main>
  );
}
