import PageShell from "@/app/components/PageShell";

export default function OperationsOnFunctionsNote() {
  return (
    <PageShell
      title="Operations on Functions"
      subtitle="Add, subtract, multiply, divide, and compose functions."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Given two functions</h2>
          <p className="text-zinc-700 mb-3">
            Suppose:
          </p>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">f(x) = 2x + 1</p>
            <p className="font-mono text-sm">g(x) = x − 4</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">1) Add / subtract</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">(f + g)(x) = f(x) + g(x)</p>
            <p className="font-mono text-sm">(f − g)(x) = f(x) − g(x)</p>
            <p className="text-zinc-700 mt-2">Example:</p>
            <p className="font-mono text-sm">(f + g)(x) = (2x + 1) + (x − 4) = 3x − 3</p>
            <p className="font-mono text-sm">(f − g)(x) = (2x + 1) − (x − 4) = x + 5</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2) Multiply / divide</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">(fg)(x) = f(x)g(x)</p>
            <p className="font-mono text-sm">(f/g)(x) = f(x)/g(x), where g(x) ≠ 0</p>
            <p className="text-zinc-700 mt-2">Example:</p>
            <p className="font-mono text-sm">(fg)(x) = (2x + 1)(x − 4)</p>
            <p className="font-mono text-sm">(f/g)(x) = (2x + 1)/(x − 4), x ≠ 4</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3) Composition</h2>
          <p className="text-zinc-700 mb-3">
            Composition means “plug one function into the other.”
          </p>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">(f ∘ g)(x) = f(g(x))</p>
            <p className="font-mono text-sm">(g ∘ f)(x) = g(f(x))</p>
            <p className="text-zinc-700 mt-2">Example:</p>
            <p className="font-mono text-sm">f(g(x)) = f(x − 4) = 2(x − 4) + 1 = 2x − 7</p>
            <p className="font-mono text-sm">g(f(x)) = g(2x + 1) = (2x + 1) − 4 = 2x − 3</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Forgetting brackets in composition: f(g(x)) needs parentheses.</li>
            <li>• Doing (f ∘ g)(x) and (g ∘ f)(x) as if they are the same (they usually aren’t).</li>
            <li>• For division, forgetting the restriction g(x) ≠ 0.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
