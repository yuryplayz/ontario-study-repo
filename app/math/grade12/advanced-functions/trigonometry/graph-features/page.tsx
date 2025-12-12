import PageShell from "@/app/components/PageShell";

export default function TrigGraphFeaturesNote() {
  return (
    <PageShell
      title="Trig Graph Features"
      subtitle="Amplitude, period, phase shift, and midline."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
          <p className="font-mono text-sm">y = a sin( b(x − h) ) + k</p>
        </div>

        <ul className="space-y-2 text-zinc-700">
          <li>• Amplitude = |a|</li>
          <li>• Period = 2π/|b| (radians) or 360°/|b| (degrees)</li>
          <li>• Phase shift = h (right if x − h)</li>
          <li>• Midline = y = k</li>
          <li>• If a &lt; 0 → reflection in x-axis</li>
        </ul>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="font-mono text-sm">Example: y = -2 sin(3(x − 60°)) + 1</p>
          <p className="text-zinc-700">Amplitude 2, period 360°/3 = 120°, shift right 60°, midline y=1, reflected.</p>
        </div>
      </div>
    </PageShell>
  );
}
