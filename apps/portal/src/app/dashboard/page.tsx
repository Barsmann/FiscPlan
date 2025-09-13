import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-2xl font-semibold">Not signed in</h1>
        <p className="mt-2 text-neutral-400">
          You need to sign in to access the dashboard.
        </p>
        <div className="mt-6">
          <Link className="text-[#D4AF37] underline" href="/signin">
            Go to sign in
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-neutral-400">
        Signed in as {session.user?.email}
      </p>
      <form action="/api/auth/signout" method="post" className="mt-8">
        <button className="rounded-lg bg-[#D4AF37] px-5 py-3 font-medium text-black hover:brightness-110">
          Sign out
        </button>
      </form>
    </main>
  );
}
