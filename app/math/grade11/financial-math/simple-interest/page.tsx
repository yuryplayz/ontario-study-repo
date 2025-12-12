import PageShell from "@/app/components/PageShell";

export default function SimpleInterestNote() {
  return (
    <PageShell
      title="Simple Interest"
      subtitle="Interest that is calculated only on the principal."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Formula</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">I = P r t</p>
            <p className="text-zinc-700">I = interest, P = principal, r = rate (decimal), t = time (years)</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Total amount</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">A = P + I</p>
            <p className="text-zinc-700">A is the total amount after interest.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="text-zinc-700">You invest $500 at 6% simple interest for 3 years.</p>
            <p className="font-mono text-sm">I = 500(0.06)(3) = 90</p>
            <p className="font-mono text-sm">A = 500 + 90 = 590</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Not changing percent to a decimal (6% → 0.06).</li>
            <li>• Using months for t without converting to years.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
