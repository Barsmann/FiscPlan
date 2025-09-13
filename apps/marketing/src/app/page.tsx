export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div
          style={{
            border: "2px dashed #D4AF37",
            padding: "12px",
            background: "#111"
          }}
        >
          <p style={{ color: "#D4AF37", marginBottom: 8 }}>
            DEBUG: This box should appear. Logo below:
          </p>
          <img
            src="/logo-fiscplan.jpg"
            alt="FiscPlan"
            width={420}
            height={126}
            style={{ display: "block", background: "#000" }}
          />
        </div>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight">
          Financial structuring that starts with clarity.
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl">
          Answer a guided, branching questionnaire. Receive secure reports.
          FiscSight analyzes; you decide.
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
