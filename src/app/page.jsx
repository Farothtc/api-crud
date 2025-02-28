"use client";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center h-[93dvh]">
        <section className="flex flex-row text-black gap-10">
          <Link href="/people">
            <button className="btn btn-ghost">People</button>
          </Link>
          <Link href="/items">
            <button className="btn btn-ghost">Items</button>
          </Link>
          <Link href="/tasks">
            <button className="btn btn-ghost">Tasks</button>
          </Link>
        </section>
      </main>
    </>
  );
}
