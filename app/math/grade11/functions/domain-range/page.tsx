import PageShell from "@/app/components/PageShell";

export default function DomainRangeNote() {
  return (
    <PageShell
      title="Domain and Range"
      subtitle="How to find restrictions and write answers in proper interval notation."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Definitions</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <span className="font-semibold">Domain</span>: all allowed x-values (inputs).
            </li>
            <li>
              <span className="font-semibold">Range</span>: all possible y-values (outputs).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common domain restrictions</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Fractions</h3>
              <p className="text-zinc-700">
                Denominator cannot be 0.
              </p>
              <div className="mt-3 rounded-lg bg-zinc-50 border border-zinc-200 p-3">
                <p className="font-mono text-sm">f(x) = 1 / (x − 3)</p>
                <p className="text-zinc-700 mt-2">Restriction: x ≠ 3</p>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Square roots (even roots)</h3>
              <p className="text-zinc-700">
                Inside must be ≥ 0.
              </p>
              <div className="mt-3 rounded-lg bg-zinc-50 border border-zinc-200 p-3">
                <p className="font-mono text-sm">g(x) = √(x + 5)</p>
                <p className="text-zinc-700 mt-2">Restriction: x ≥ −5</p>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Logarithms</h3>
              <p className="text-zinc-700">
                Inside must be &gt; 0.
              </p>
              <div className="mt-3 rounded-lg bg-zinc-50 border border-zinc-200 p-3">
                <p className="font-mono text-sm">h(x) = log(x − 2)</p>
                <p className="text-zinc-700 mt-2">Restriction: x &gt; 2</p>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Given context</h3>
              <p className="text-zinc-700">
                Real-life situations can restrict x-values.
              </p>
              <p className="text-zinc-700 mt-2">
                Example: time can’t be negative → x ≥ 0.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Range tips</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Use the graph when you can.</li>
            <li>• For transformations: +k shifts the whole range up/down.</li>
            <li>• If the function has a minimum/maximum, range starts/ends there.</li>
          </ul>

          <div className="mt-4 rounded-lg bg-zinc-50 border border-zinc-200 p-3">
            <p className="text-zinc-700">
              Example: If <span className="font-mono">f(x)</span> has range y ≥ 0, then
              <span className="font-mono"> g(x) = f(x) − 3</span> has range y ≥ −3.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Interval notation (quick)</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• x ≥ 2 → <span className="font-mono">[2, ∞)</span></li>
            <li>• x &gt; 2 → <span className="font-mono">(2, ∞)</span></li>
            <li>• x ≠ 3 → <span className="font-mono">(-∞, 3) ∪ (3, ∞)</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Forgetting to state restrictions for denominators and roots.</li>
            <li>• Mixing up &gt; and ≥ for logs vs roots.</li>
            <li>• Writing domain in words when your teacher wants interval notation.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
