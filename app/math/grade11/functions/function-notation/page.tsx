import PageShell from "@/app/components/PageShell";

export default function FunctionNotationNote() {
  return (
    <PageShell
      title="Function Notation"
      subtitle="How to evaluate f(x), interpret it, and solve simple notation questions."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">What does f(x) mean?</h2>
          <p className="text-zinc-700">
            <span className="font-mono">f(x)</span> means “the output of the function f when the input is x.”
            It is not f times x.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Evaluating a function</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">f(x) = 2x − 3</p>
            <p className="text-zinc-700 mt-2">Find f(5):</p>
            <p className="font-mono text-sm mt-2">f(5) = 2(5) − 3 = 10 − 3 = 7</p>
          </div>

          <div className="mt-4 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">g(x) = x² + 4x</p>
            <p className="text-zinc-700 mt-2">Find g(−2):</p>
            <p className="font-mono text-sm mt-2">g(−2) = (−2)² + 4(−2) = 4 − 8 = −4</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Solving for x when given an output</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">f(x) = 2x − 3</p>
            <p className="text-zinc-700 mt-2">Solve f(x) = 7:</p>
            <p className="font-mono text-sm mt-2">2x − 3 = 7 → 2x = 10 → x = 5</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Interpreting in context</h2>
          <p className="text-zinc-700 mb-3">
            If <span className="font-mono">C(t)</span> is the cost after t months:
          </p>
          <ul className="space-y-2 text-zinc-700">
            <li>• <span className="font-mono">C(6)</span> is the cost after 6 months.</li>
            <li>• If <span className="font-mono">C(6) = 120</span>, it costs $120 after 6 months.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Thinking f(x) means f × x.</li>
            <li>• Forgetting brackets when substituting negatives: use (−2).</li>
            <li>• Mixing up input vs output.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
