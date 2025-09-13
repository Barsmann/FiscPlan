/* apps/marketing/src/app/page.tsx */
import Image from "next/image";

function Feature({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 transition-colors hover:bg-neutral-900">
      <h3 className="text-lg font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-neutral-300">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 md:pt-28">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo-fiscplan.jpg"          // ensure this file exists in /public
            alt="FiscPlan"
            width={720}
            height={180}
            priority
            className="h-auto w-[260px] rounded-md shadow-brand md:w-[360px]"
          />

          <h1 className="mt-10 text-4xl font-semibold tracking-tight md:text-6xl">
            Financial structuring that starts with clarity.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-neutral-300">
            Answer a guided, branching questionnaire. Receive secure reports.
            <span className="whitespace-nowrap"> FiscSight™</span> analyzes; you decide.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://app.fiscplan.com/signin" className="btn-brand">
              Start FiscPlan
            </a>
            <a href="#how" className="btn-ghost">
              See how it works
            </a>
          </div>

          <p className="mt-3 text-sm text-neutral-500">
            No spam. No surprises. You’re always in control.
          </p>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="how" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Feature title="Smart branching™">
            Every answer adapts the next question—faster, relevant, and thorough.
          </Feature>
          <Feature title="FiscSight™ analysis">
            Your inputs are transformed into actionable structuring insights.
          </Feature>
          <Feature title="Secure reports">
            Download clean, private reports—built for decisions, not noise.
          </Feature>
        </div>
      </section>
    </main>
  );
}
