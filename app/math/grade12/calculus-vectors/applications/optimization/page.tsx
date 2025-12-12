import PageShell from "@/app/components/PageShell";

export default function OptimizationNote() {
  return (
    <PageShell
      title="Optimization"
      subtitle="Find maximum/minimum values using derivatives."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <ol className="list-decimal ml-6 text-zinc-700 space-y-2">
          <li>Write an expression for what you want to maximize/minimize.</li>
          <li>Use constraints to write it in one variable.</li>
          <li>Differentiate and set derivative = 0 to find critical points.</li>
          <li>Test values (or use context) and choose the best answer.</li>
        </ol>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="text-zinc-700">Quick example idea:</p>
          <p className="text-zinc-700">
            Maximize area with fixed perimeter → rewrite A(x), then solve A'(x)=0.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
