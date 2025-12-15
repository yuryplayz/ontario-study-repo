import PageShell from "@/app/components/PageShell";

export default function DerivativeRulesNote() {
  return (
    <PageShell title="Derivative Rules" subtitle="The starter rules you use in almost every question.">
      <div className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="font-mono text-sm">d/dx (c) = 0</p>
          <p className="font-mono text-sm">d/dx (x^n) = n x^(n−1)</p>
          <p className="font-mono text-sm">d/dx (af(x)) = a f{"'"}(x)</p>
          <p className="font-mono text-sm">d/dx (f(x) ± g(x)) = f{"'"}(x) ± g{"'"}(x)</p>
        </div>

        <div className="space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-zinc-700">Example:</p>
          <p className="font-mono text-sm">f(x) = 3x^4 − 2x + 7</p>
          <p className="font-mono text-sm">f{"'"}(x) = 12x^3 − 2</p>
        </div>
      </div>
    </PageShell>
  );
}
