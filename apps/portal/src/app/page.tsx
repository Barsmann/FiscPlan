import Link from "next/link";

export const metadata = {
  title: "FiscPlan™ Portal",
  description: "Secure mailbox, questionnaires, and reports — powered by FiscSight™.",
};

export default function PortalHome() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-semibold">FiscPlan™ Portal</h1>
        <p className="mt-2 text-neutral-300">
          Sign in to access your mailbox, questionnaires, and reports.
        </p>
        <div className="mt-8">
          <Link
            href="/signin"
            className="rounded-lg bg-[#D4AF37] px-5 py-3 font-medium text-black hover:brightness-110 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black shadow-[0_0_20px_rgba(212,175,55,0.35)]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
