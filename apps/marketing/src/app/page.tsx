export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-5xl font-semibold tracking-tight">FiscPlan</h1>
        <p className="mt-4 text-lg text-neutral-300">
          Financial structuring that starts with clarity.
        </p>
        <p className="mt-2 text-neutral-400">
          Answer a guided, branching questionnaire. Receive secure reports. FiscSight analyzes; you decide.
        </p>
        <div className="mt-8">
          <a
            href="https://app.fiscplan.com"
            className="inline-block rounded-lg bg-white px-5 py-3 font-medium text-black hover:bg-neutral-200"
          >
            Start FiscPlan
          </a>
        </div>
      </section>
    </main>
  );
}
