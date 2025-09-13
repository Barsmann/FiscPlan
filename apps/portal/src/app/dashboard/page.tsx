import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession();
  // next-auth v4 App Router: getServerSession works without args when using default handler
  if (!session) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <p>Not signed in.</p>
        <Link className="text-[#D4AF37] underline" href="/signin">Go to sign in</Link>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-neutral-400">Signed in as {session.user?.email}</p>
      <form action="/api/auth/signout" method="post" className="mt-6">
        <button className="rounded-lg bg-[#D4AF37] px-5 py-3 font-medium text-black hover:brightness-110">
          Sign out
        </button>
      </form>
    </main>
  );
}
