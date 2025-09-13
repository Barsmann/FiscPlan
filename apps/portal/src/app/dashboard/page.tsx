"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main className="min-h-screen bg-black text-white p-10">Loading…</main>;
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <p className="text-neutral-300">You are not signed in.</p>
        <Link href="/signin" className="mt-4 inline-block rounded-lg bg-[#D4AF37] px-5 py-3 font-medium text-black">
          Go to sign in
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-neutral-300">Signed in as <span className="text-[#D4AF37]">{session.user?.email}</span></p>
      <button
        onClick={() => signOut({ callbackUrl: "/signin" })}
        className="mt-6 rounded-lg bg-transparent px-5 py-3 font-medium text-white ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black"
      >
        Sign out
      </button>
    </main>
  );
}
