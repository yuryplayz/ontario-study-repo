import PageShell from "@/app/components/PageShell";

export default function DotProductIntroNote() {
  return (
    <PageShell
      title="Dot Product (Intro)"
      subtitle="A quick starter for angles and projections."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="font-mono text-sm">u · v = a₁a₂ + b₁b₂ (+ c₁c₂ in 3D)</p>
          <p className="text-zinc-700">
            If the dot product is 0, the vectors are perpendicular (at 90°).
          </p>
        </div>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="text-zinc-700">Example:</p>
          <p className="font-mono text-sm">u = &lt;2, 1&gt;, v = &lt;−1, 2&gt;</p>
          <p className="font-mono text-sm">u · v = 2(−1) + 1(2) = 0 → perpendicular</p>
        </div>
      </div>
    </PageShell>
  );
}
