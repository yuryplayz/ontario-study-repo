import PageShell from "@/app/components/PageShell";

export default function TrigGraphTransformationsNote() {
  return (
    <PageShell
      title="Trig Graph Transformations"
      subtitle="How to sketch transformed trig graphs quickly."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Step-by-step sketching</h2>
          <ol className="list-decimal ml-6 space-y-2 text-zinc-700">
            <li>Find the midline y = k.</li>
            <li>Find amplitude |a| and draw max/min: k ± |a|.</li>
            <li>Find the period and split into 4 key sections.</li>
            <li>Apply phase shift (start x-value).</li>
            <li>Plot 5 key points and connect smoothly.</li>
          </ol>
        </section>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="font-mono text-sm">Example: y = 2 cos(2x) − 1</p>
          <p className="text-zinc-700">Midline y = -1, amplitude 2, period = 360°/2 = 180°.</p>
        </div>
      </div>
    </PageShell>
  );
}
