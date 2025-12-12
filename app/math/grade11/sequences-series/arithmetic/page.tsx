import PageShell from "@/app/components/PageShell";

export default function ArithmeticSequencesNote() {
  return (
    <PageShell
      title="Arithmetic Sequences"
      subtitle="Sequences with a constant difference between terms."
    >
      <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is an arithmetic sequence?</h2>
          <p className="text-zinc-700">
            An arithmetic sequence is a sequence where the difference between
            consecutive terms is constant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Key formulas</h2>
          <div className="rounded-xl bg-zinc-50 border p-4 space-y-2">
            <p className="font-mono text-sm">aₙ = a₁ + (n − 1)d</p>
            <p className="text-zinc-700">where:</p>
            <ul className="ml-4 list-disc text-zinc-700">
              <li>a₁ = first term</li>
              <li>d = common difference</li>
              <li>n = term number</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <div className="rounded-xl bg-zinc-50 border p-4 space-y-2">
            <p className="font-mono text-sm">2, 5, 8, 11, …</p>
            <p className="text-zinc-700">Here, d = 3</p>
            <p className="font-mono text-sm">aₙ = 2 + (n − 1)·3</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="list-disc ml-6 text-zinc-700 space-y-1">
            <li>Forgetting (n − 1) in the formula</li>
            <li>Mixing up a₁ and d</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
