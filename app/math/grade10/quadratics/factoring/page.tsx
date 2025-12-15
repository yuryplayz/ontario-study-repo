import PageShell from "@/app/components/PageShell";

export default function Grade10QuadraticsFactoring() {
  return (
    <PageShell
      title="Factoring quadratics"
      subtitle="Turn ax² + bx + c into factors — a core Grade 10 skill."
    >
      <div className="prose max-w-none">
        <h3>Overview</h3>
        <p>
          Factoring rewrites a quadratic as a product of two binomials: x² + bx + c = (x + p)(x + q).
          When a ≠ 1 you may factor out a common factor first or use grouping.
        </p>

        <h4>Steps (when a = 1)</h4>
        <ol>
          <li>Find two numbers p and q so that p + q = b and p·q = c.</li>
          <li>Write x² + bx + c = (x + p)(x + q).</li>
        </ol>

        <h4>Example</h4>
        <p>Factor x² + 5x + 6. Find numbers that add to 5 and multiply to 6 → 2 and 3.</p>
        <pre> x² + 5x + 6 = (x + 2)(x + 3)</pre>

        <h4>When a ≠ 1</h4>
        <p>
          Use factoring by grouping or the ac-method: find two numbers that multiply to a·c and add to b,
          then split the middle term and factor by grouping.
        </p>

        <h4>Practice</h4>
        <ul>
          <li>Factor x² − x − 6</li>
          <li>Factor 2x² + 5x + 3 (use grouping)</li>
        </ul>
      </div>
    </PageShell>
  );
}
