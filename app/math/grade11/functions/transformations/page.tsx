import PageShell from "@/app/components/PageShell";

export default function TransformationsNote() {
  return (
    <PageShell
      title="Transformations of Functions"
      subtitle="How to read and graph changes like stretches, reflections, and shifts."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">The idea</h2>
          <p className="text-zinc-700">
            A transformation changes a “parent” function (like f(x)) by shifting
            it, stretching it, or reflecting it to create a new function g(x).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Main form to know</h2>
          <p className="text-zinc-700 mb-3">
            Most Grade 11 problems can be written like:
          </p>

          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 text-zinc-900">
            <p className="font-mono text-sm">
              g(x) = a · f( b(x − h) ) + k
            </p>
          </div>

          <ul className="mt-4 space-y-2 text-zinc-700">
            <li><span className="font-semibold">a</span> = vertical stretch/compression + reflection in x-axis</li>
            <li><span className="font-semibold">b</span> = horizontal stretch/compression + reflection in y-axis</li>
            <li><span className="font-semibold">h</span> = horizontal shift</li>
            <li><span className="font-semibold">k</span> = vertical shift (moves the midline)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Rules (quick & clear)</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Vertical (outside f)</h3>
              <p className="text-zinc-700">
                <span className="font-mono">a · f(x) + k</span>
              </p>
              <ul className="mt-2 space-y-1 text-zinc-700">
                <li>• If |a| &gt; 1 → stretch</li>
                <li>• If 0 &lt; |a| &lt; 1 → compression</li>
                <li>• If a &lt; 0 → reflect in x-axis</li>
                <li>• +k → shift up, −k → shift down</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-1">Horizontal (inside f)</h3>
              <p className="text-zinc-700">
                <span className="font-mono">f( b(x − h) )</span>
              </p>
              <ul className="mt-2 space-y-1 text-zinc-700">
                <li>• If |b| &gt; 1 → compression</li>
                <li>• If 0 &lt; |b| &lt; 1 → stretch</li>
                <li>• If b &lt; 0 → reflect in y-axis</li>
                <li>• (x − h) → right h, (x + h) → left h</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <p className="text-zinc-700 mb-3">
            Given <span className="font-mono">f(x)</span>, describe the transformations for:
          </p>

          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">g(x) = -2 · f(3(x − 4)) + 1</p>
          </div>

          <ul className="mt-4 space-y-2 text-zinc-700">
            <li>• <span className="font-semibold">a = -2</span>: vertical stretch by 2 and reflect in x-axis</li>
            <li>• <span className="font-semibold">b = 3</span>: horizontal compression by factor 3</li>
            <li>• <span className="font-semibold">h = 4</span>: shift right 4</li>
            <li>• <span className="font-semibold">k = 1</span>: shift up 1</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Mixing up horizontal rules (inside is “opposite”).</li>
            <li>• Forgetting that <span className="font-mono">b</span> affects stretch/compression as a reciprocal idea.</li>
            <li>• Shifts: <span className="font-mono">(x − h)</span> goes right, not left.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
