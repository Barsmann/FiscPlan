import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* Brand logo */}
        <div className="flex items-center">
          <Image
            src="/logo-fiscplan.jpg"
            alt="FiscPlan"
            width={420}
            height={126}
            sizes="(max-width: 640px) 280px, 420px"
            priority
          />
        </div>

        {/* Headline + subcopy */}
        <h1 className="mt-8 text-5xl font-semibold tracking-tight">
          Financial structuring that starts with clarity.
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl">
          Answer a guided, branching questionnaire. Receive secure reports.
          FiscSight analyzes; you decide.
        </p>

        {/* CTA — make tokens obvious */}
        <div className="mt-8">
          <a
            href="https://app.fiscplan.com"
            className="inline-block rounded-lg bg-brand-gold px-5 py-3 font-medium text-black hover:brightness-110 ring-4 ring-brand-gold ring-offset-2 ring-offset-black shadow-brand-glow"
          >
            Start FiscPlan
          </a>
        </div>
      </section>
    </main>
  );
}
