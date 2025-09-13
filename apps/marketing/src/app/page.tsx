/* apps/marketing/src/app/page.tsx */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="flex flex-col items-start gap-8">
          <div className="w-[280px] sm:w-[360px] md:w-[420px]">
            <Image
              src="/logo-fiscplan.jpg"
              alt="FiscPlan™"
              width={1200}
              height={630}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Financial structuring that starts with clarity.
          </h1>

          <p className="max-w-2xl text-lg text-neutral-300">
            Answer a guided, branching questionnaire. Receive secure reports.
            <span className="whitespace-nowrap"> FiscSight™</span> analyzes; you decide.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://app.fiscplan.com/signin"
              className="inline-block rounded-lg bg-[#F4B000] px-5 py-3 font-medium text-black ring-1 ring-[#F4B000]/30 transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_#F4B00033]"
            >
              Start FiscPlan™
            </Link>
            <Link
              href="#how-it-works"
              className="inline-block rounded-lg border border-white/20 px-5 py-3 text-white hover:bg-white/5"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-3 text-sm text-neutral-400">
            No spam. No surprises. You’re always in control.
          </p>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-xl font-semibold text-[#F4B000]">Smart branching</h3>
            <p className="mt-2 text-neutral-300">
              Your answers tailor the path. Skip what doesn’t apply; focus on what matters.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-xl font-semibold text-[#F4B000]">Instant insights</h3>
            <p className="mt-2 text-neutral-300">
              See concise guidance as you go—no waiting for a final submission to get value.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-xl font-semibold text-[#F4B000]">Secure reports</h3>
            <p className="mt-2 text-neutral-300">
              Export clean, structured outputs. Share with your stakeholders securely.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="text-3xl font-semibold">How FiscPlan™ works</h2>
          <ol className="mt-6 space-y-4 text-neutral-300">
            <li>
              <span className="font-medium text-white">1. Answer the guided questionnaire.</span>{" "}
              The flow adapts to your entity, jurisdiction, and goals.
            </li>
            <li>
              <span className="font-medium text-white">2. Review live insight cards.</span>{" "}
              Key considerations appear as you proceed—clear, contextual, and actionable.
            </li>
            <li>
              <span className="font-medium text-white">3. Generate reports.</span>{" "}
              Produce secure summaries you can revisit or share.
            </li>
          </ol>
          <div className="mt-8">
            <Link
              href="https://app.fiscplan.com/signin"
              className="inline-block rounded-lg bg-[#F4B000] px-5 py-3 font-medium text-black ring-1 ring-[#F4B000]/30 transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_#F4B00033]"
            >
              Try the guided flow
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-3xl font-semibold">Built for clarity—across scenarios</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Founders",
              body:
                "Choose structures with confidence—avoid common pitfalls and document the rationale."
            },
            {
              title: "Advisors",
              body:
                "Standardize intake, reduce back-and-forth, and produce neat client-ready outputs."
            },
            {
              title: "CFO / Ops",
              body:
                "Capture assumptions, compare options, and keep an audit trail of decisions."
            }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold text-[#F4B000]">{c.title}</h3>
              <p className="mt-2 text-neutral-300">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-semibold">FAQs</h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <h4 className="font-medium text-[#F4B000]">
              Is FiscPlan™ a substitute for legal or tax advice?
            </h4>
            <p className="mt-2 text-neutral-300">
              No. FiscPlan™ provides structured analysis and documentation. Always consult
              licensed professionals before acting.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
            <h4 className="font-medium text-[#F4B000]">Will my data be private?</h4>
            <p className="mt-2 text-neutral-300">
              Yes. Your answers and reports live in your secure portal. See our{" "}
              <Link href="/privacy" className="underline decoration-[#F4B000] underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} FiscSphere Group. FiscPlan™ and FiscSight™ are trademarks.
          </p>
          <nav className="flex items-center gap-5 text-sm text-neutral-300">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="https://app.fiscplan.com/signin" className="hover:text-white">
              Sign in
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
