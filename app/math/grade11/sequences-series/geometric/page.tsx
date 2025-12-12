import PageShell from "@/app/components/PageShell";

export default function GeometricSequencesNote() {
  return (
    <PageShell
      title="Geometric Sequences"
      subtitle="Sequences with a constant ratio between terms."
    >
      <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is a geometric sequence?</h2>
          <p className="text-zinc-700">
            A geometric sequence is a sequence where each term is multiplied by
            the same value (the common ratio).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Key formula</h2>
          <div className="rounded-xl bg-zinc-50 border p-4 space-y-2">
            <p className="font-mono text-sm">aₙ = a₁ · rⁿ⁻¹</p>
            <p className="text-zinc-700">where r is the common ratio.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <div className="rounded-xl bg-zinc-50 border p-4 space-y-2">
            <p className="font-mono text-sm">3, 6, 12, 24, …</p>
            <p className="text-zinc-700">Here, r = 2</p>
            <p className="font-mono text-sm">aₙ = 3 · 2ⁿ⁻¹</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Growth vs decay</h2>
          <ul className="list-disc ml-6 text-zinc-700 space-y-1">
            <li>r &gt; 1 → growth</li>
            <li>0 &lt; r &lt; 1 → decay</li>
            <li>r &lt; 0 → alternating signs</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
