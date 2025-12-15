import PageShell from "@/app/components/PageShell";

export default function Grade10QuadraticsSolveByFactoring() {
  return (
    <PageShell
      title="Solving quadratics by factoring"
      subtitle="Use factoring and the zero-product property to solve quadratic equations."
    >
      <div className="prose max-w-none">
        <h3>Method</h3>
        <ol>
          <li>Write the quadratic in standard form ax^2 + bx + c = 0.</li>
          <li>Factor the left side into two binomials.</li>
          <li>Set each factor equal to zero and solve for x.</li>
        </ol>

        <h4>Example</h4>
        <p>Solve x^2 − 5x + 6 = 0. Factor to (x − 2)(x − 3) = 0 → x = 2, 3.</p>

        <h4>Practice</h4>
        <ul>
          <li>Solve x^2 + 7x + 12 = 0</li>
        </ul>
      </div>
    </PageShell>
  );
}
