import PageShell from "@/app/components/PageShell";

export default function SeriesSumsNote() {
  return (
    <PageShell
      title="Series and Sums"
      subtitle="Finding the sum of terms in a sequence."
    >
      <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is a series?</h2>
          <p className="text-zinc-700">
            A series is the sum of the terms of a sequence.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Arithmetic series formula</h2>
          <div className="rounded-xl bg-zinc-50 border p-4 space-y-2">
            <p className="font-mono text-sm">Sₙ = n/2 (2a₁ + (n − 1)d)</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Geometric series formula</h2>
          <div className="rounded-xl bg-zinc-50 border p-4 space-y-2">
            <p className="font-mono text-sm">Sₙ = a₁(1 − rⁿ) / (1 − r), r ≠ 1</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="list-disc ml-6 text-zinc-700 space-y-1">
            <li>Using sequence formulas instead of sum formulas</li>
            <li>Forgetting brackets in formulas</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
