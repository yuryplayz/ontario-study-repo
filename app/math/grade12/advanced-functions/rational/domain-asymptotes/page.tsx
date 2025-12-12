import PageShell from "@/app/components/PageShell";

export default function DomainAsymptotesNote() {
  return (
    <PageShell
      title="Domain & Asymptotes"
      subtitle="The fast way to analyze a rational function."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1) Domain restrictions</h2>
          <p className="text-zinc-700">
            For a rational function, the denominator cannot be 0. Solve
            denominator = 0 and exclude those x-values.
          </p>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">f(x) = (x + 1)/(x − 3)</p>
            <p className="text-zinc-700 mt-2">Restriction: x ≠ 3</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2) Vertical asymptotes</h2>
          <p className="text-zinc-700">
            Vertical asymptotes usually happen where the denominator is 0
            and the factor does <span className="font-semibold">not</span> cancel.
          </p>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">x = 3 is a vertical asymptote (for the example above)</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3) Horizontal asymptotes (degree rule)</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• If degree(top) &lt; degree(bottom) → y = 0</li>
            <li>• If degree(top) = degree(bottom) → y = (leading coeff ratio)</li>
            <li>• If degree(top) &gt; degree(bottom) → no horizontal asymptote (might have slant)</li>
          </ul>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">g(x) = (2x + 1)/(x − 3)</p>
            <p className="text-zinc-700 mt-2">Same degree → y = 2/1 = 2</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
