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
          <button
            className="rounded-lg bg-transparent px-5 py-3 font-medium text-white ring-2 ring-brand-gold ring-offset-2 ring-offset-black shadow-brand-glow"
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
