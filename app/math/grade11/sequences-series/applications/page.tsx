import PageShell from "@/app/components/PageShell";

export default function SequenceApplicationsNote() {
  return (
    <PageShell
      title="Applications of Sequences"
      subtitle="Real-world problems using arithmetic and geometric sequences."
    >
      <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Arithmetic example</h2>
          <p className="text-zinc-700">
            A student saves $20 in the first week and increases savings by $5
            each week.
          </p>
          <p className="text-zinc-700 mt-2">
            a₁ = 20, d = 5 → arithmetic sequence
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Geometric example</h2>
          <p className="text-zinc-700">
            A population doubles every year.
          </p>
          <p className="text-zinc-700 mt-2">
            r = 2 → geometric sequence
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Problem-solving tips</h2>
          <ul className="list-disc ml-6 text-zinc-700 space-y-1">
            <li>Identify if it’s arithmetic or geometric first</li>
            <li>Write down a₁, d, r clearly</li>
            <li>Check units and reasonableness</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
