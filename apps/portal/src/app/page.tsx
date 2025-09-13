import Image from "next/image";

export default function PortalHome() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex items-center">
          <Image
            src="/logo-fiscplan.jpg"
            alt="FiscPlan"
            width={300}
            height={90}
            priority
          />
        </div>

        <h1 className="mt-8 text-3xl font-semibold">FiscPlan Portal</h1>
        <p className="mt-2 text-neutral-300">
          Secure mailbox, questionnaires, and reports.
        </p>

        <div className="mt-8">
          {/* Solid gold button (uses hex so it always renders) */}
          <button
            className="rounded-lg bg-[#D4AF37] px-5 py-3 font-medium text-black hover:brightness-110 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black shadow-[0_0_20px_rgba(212,175,55,0.35)]"
            disabled
            title="Coming soon"
          >
            Sign in (coming soon)
          </button>
        </div>
      </div>
    </main>
  );
}
