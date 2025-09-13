import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Brand logo */}
        <div className="flex items-center">
          <Image
            src="/logo-fiscplan.jpg"
            alt="FiscPlan™"
            width={420}
            height={126}
            priority
          />
        </div>

        {/* Headline + subcopy */}
        <h1 className="mt-8 text-5xl font-semibold tracking-tight">
          Clarity-first wealth & structuring guidance.
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl">
          A guided, branching questionnaire that maps your scenario and delivers a secure report.
          Powered by FiscSight™. You decide the next step.
        </p>

        {/* 3 value props — headings in gold */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 p-5">
            <h3 className="text-lg font-medium text-[#D4AF37]">Smart branching</h3>
            <p className="mt-2 text-neutral-400">
              Questions adapt to your profile in minutes.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-5">
            <h3 className="text-lg font-medium text-[#D4AF37]">Instant Lite report</h3>
            <p className="mt-2 text-neutral-400">
              Structure sketch, pros/cons, reporting flags.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 p-5">
            <h3 className="text-lg font-medium text-[#D4AF37]">Upgrade path</h3>
            <p className="mt-2 text-neutral-400">
              Advanced &amp; Pro reports with deeper analysis.
            </p>
          </div>
        </div>

        {/* CTA — solid gold so it always shows */}
        <div className="mt-10">
          <a
            href="https://app.fiscplan.com"
            className="inline-block rounded-lg bg-[#D4AF37] px-5 py-3 font-medium text-black hover:brightness-110 ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black shadow-[0_0_20px_rgba(212,175,55,0.35)]"
            aria-label="Start FiscPlan™"
          >
            Start FiscPlan™
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-900 py-8 text-center text-neutral-500">
        © {new Date().getFullYear()} FiscSphere Group™ — FiscPlan™ powered by FiscSight™
      </footer>
    </main>
  );
}
