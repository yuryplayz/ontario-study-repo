import PageShell from "@/app/components/PageShell";

export default function AFDomainRangeNote() {
  return (
    <PageShell
      title="Domain & Range (MHF4U)"
      subtitle="How to write restrictions and ranges clearly."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <ul className="space-y-2 text-zinc-700">
          <li>• Domain: all allowed x-values.</li>
          <li>• Range: all possible y-values.</li>
          <li>• Fractions: denominator ≠ 0</li>
          <li>• Even roots: inside ≥ 0</li>
          <li>• Logs: inside &gt; 0</li>
        </ul>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
          <p className="font-mono text-sm">f(x) = 1/(x − 5) → x ≠ 5</p>
          <p className="font-mono text-sm mt-2">Domain: (-∞, 5) ∪ (5, ∞)</p>
        </div>
      </div>
    </PageShell>
  );
}
