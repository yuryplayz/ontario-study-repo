import PageShell from "@/app/components/PageShell";

export default function VectorBasicsNote() {
  return (
    <PageShell
      title="Vector Basics"
      subtitle="Components, magnitude, and basic operations."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <ul className="space-y-2 text-zinc-700">
          <li>• A vector has magnitude (length) and direction.</li>
          <li>• In 2D: <span className="font-mono">&lt;a, b&gt;</span></li>
          <li>• Magnitude: <span className="font-mono">|v| = √(a² + b²)</span></li>
          <li>• Add/subtract by components.</li>
        </ul>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="text-zinc-700">Example:</p>
          <p className="font-mono text-sm">u = &lt;2, 1&gt;, v = &lt;−3, 4&gt;</p>
          <p className="font-mono text-sm">u + v = &lt;−1, 5&gt;</p>
        </div>
      </div>
    </PageShell>
  );
}
