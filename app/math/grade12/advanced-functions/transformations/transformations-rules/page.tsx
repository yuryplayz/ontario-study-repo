import PageShell from "@/app/components/PageShell";

export default function AFTransformRulesNote() {
  return (
    <PageShell
      title="Transformation Rules (MHF4U)"
      subtitle="How to quickly describe stretches, reflections, and shifts."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
          <p className="font-mono text-sm">g(x) = a · f( b(x − h) ) + k</p>
        </div>

        <ul className="space-y-2 text-zinc-700">
          <li>• <span className="font-semibold">a</span>: vertical stretch/compression; if a &lt; 0 reflect in x-axis</li>
          <li>• <span className="font-semibold">b</span>: horizontal stretch/compression; if b &lt; 0 reflect in y-axis</li>
          <li>• <span className="font-semibold">h</span>: shift right h (left if (x + h))</li>
          <li>• <span className="font-semibold">k</span>: shift up k (down if negative)</li>
        </ul>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="font-mono text-sm">Example: g(x) = -3 f(2(x − 1)) + 4</p>
          <p className="text-zinc-700">
            Vertical stretch by 3 + reflect in x-axis, horizontal compression by 2,
            shift right 1, shift up 4.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
