import PageShell from "@/app/components/PageShell";

export default function SolvingTrigEquationsNote() {
  return (
    <PageShell
      title="Solving Trig Equations"
      subtitle="Find all solutions in a given interval (often 0° to 360°)."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">General strategy</h2>
          <ol className="list-decimal ml-6 space-y-2 text-zinc-700">
            <li>Solve for the trig ratio (sin, cos, or tan).</li>
            <li>Find the reference angle from exact values or a calculator.</li>
            <li>Use the quadrant signs to find all angles in the interval.</li>
            <li>Check your answers if needed.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example 1 (exact value)</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">sinθ = 1/2, 0° ≤ θ &lt; 360°</p>
            <p className="text-zinc-700">
              Reference angle is 30° (since sin30 = 1/2).
            </p>
            <p className="text-zinc-700">
              sin is positive in Quadrants I and II:
            </p>
            <p className="font-mono text-sm">θ = 30°, 150°</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example 2 (negative value)</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">cosθ = −√2/2, 0° ≤ θ &lt; 360°</p>
            <p className="text-zinc-700">
              Reference angle is 45° (since cos45 = √2/2).
            </p>
            <p className="text-zinc-700">
              cos is negative in Quadrants II and III:
            </p>
            <p className="font-mono text-sm">θ = 135°, 225°</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example 3 (tan)</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">tanθ = √3, 0° ≤ θ &lt; 360°</p>
            <p className="text-zinc-700">
              Reference angle is 60° (since tan60 = √3).
            </p>
            <p className="text-zinc-700">
              tan is positive in Quadrants I and III:
            </p>
            <p className="font-mono text-sm">θ = 60°, 240°</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Forgetting there are usually 2 answers for sin/cos in 0°–360°.</li>
            <li>• Using the wrong quadrants for the sign.</li>
            <li>• Mixing up reference angle vs actual angle.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
