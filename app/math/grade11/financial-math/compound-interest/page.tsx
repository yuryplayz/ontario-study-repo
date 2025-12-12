import PageShell from "@/app/components/PageShell";

export default function CompoundInterestNote() {
  return (
    <PageShell
      title="Compound Interest"
      subtitle="Interest calculated on the principal AND previously earned interest."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Formula</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">A = P(1 + r/n)^(nt)</p>
            <ul className="ml-4 list-disc text-zinc-700">
              <li>P = principal</li>
              <li>r = annual interest rate (decimal)</li>
              <li>n = number of compounds per year</li>
              <li>t = time in years</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="text-zinc-700">
              $1000 at 5% compounded monthly for 2 years.
            </p>
            <p className="font-mono text-sm">A = 1000(1 + 0.05/12)^(12·2)</p>
            <p className="text-zinc-700">
              This gives a total a bit above $1100 (depends on rounding).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Compounding frequency</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Monthly: n = 12</li>
            <li>• Quarterly: n = 4</li>
            <li>• Semi-annually: n = 2</li>
            <li>• Annually: n = 1</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Using percent instead of decimal for r.</li>
            <li>• Forgetting nt in the exponent.</li>
            <li>• Using months for t without converting to years.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
