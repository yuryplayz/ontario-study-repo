import PageShell from "@/app/components/PageShell";

export default function SolvingLogEquationsNote() {
  return (
    <PageShell
      title="Solving Logarithmic Equations"
      subtitle="Solve, then check restrictions (very important)."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Steps</h2>
          <ol className="list-decimal ml-6 space-y-2 text-zinc-700">
            <li>State restrictions: inside each log must be &gt; 0.</li>
            <li>Use log laws to combine or simplify.</li>
            <li>Rewrite in exponential form.</li>
            <li>Solve and check (reject extraneous solutions).</li>
          </ol>
        </section>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="text-zinc-700">Example:</p>
          <p className="font-mono text-sm">log(x − 1) = 2</p>
          <p className="text-zinc-700">Restriction: x − 1 &gt; 0 → x &gt; 1</p>
          <p className="text-zinc-700">Rewrite: x − 1 = 10² = 100</p>
          <p className="font-mono text-sm">x = 101</p>
        </div>
      </div>
    </PageShell>
  );
}
