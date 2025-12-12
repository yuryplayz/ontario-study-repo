import PageShell from "@/app/components/PageShell";

export default function UnitCircleNote() {
  return (
    <PageShell
      title="Unit Circle Basics"
      subtitle="How coordinates connect to sin, cos, and tan."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">The key idea</h2>
          <p className="text-zinc-700">
            On the unit circle, the radius is 1. Any point on the circle is:
          </p>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">(x, y) = (cosθ, sinθ)</p>
          </div>
          <p className="text-zinc-700 mt-3">
            And:
          </p>
          <div className="mt-2 rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-1">
            <p className="font-mono text-sm">cosθ = x</p>
            <p className="font-mono text-sm">sinθ = y</p>
            <p className="font-mono text-sm">tanθ = y/x (if x ≠ 0)</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Quadrant signs (ASTC)</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Quadrant I: sin +, cos +, tan +</li>
            <li>• Quadrant II: sin +, cos −, tan −</li>
            <li>• Quadrant III: sin −, cos −, tan +</li>
            <li>• Quadrant IV: sin −, cos +, tan −</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <p className="text-zinc-700">
            If θ is in Quadrant II and the reference angle is 30°:
          </p>
          <ul className="mt-3 space-y-2 text-zinc-700">
            <li>• sin is positive → sinθ = 1/2</li>
            <li>• cos is negative → cosθ = −√3/2</li>
            <li>• tan is negative → tanθ = −√3/3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Forgetting to apply the quadrant sign.</li>
            <li>• Mixing up (cos, sin) order for the coordinate.</li>
            <li>• Writing tan when x = 0 (tan is undefined).</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
