import PageShell from "@/app/components/PageShell";

export default function OperationsOnFunctionsNote() {
  return (
    <PageShell
      title="Operations on functions"
      subtitle="Add, subtract, multiply, divide, and compose functions."
    >
      <div className="prose max-w-none">
        <h3>Basics</h3>
        <p>Given f and g, define (f + g)(x) = f(x) + g(x), (f * g)(x) = f(x) * g(x), and (f o g)(x) = f(g(x)).</p>

        <h4>Example</h4>
        <p>If f(x) = x + 1 and g(x) = 2x, then (f + g)(x) = 3x + 1 and (f o g)(x) = 2x + 1.</p>

        <h4>Practice</h4>
        <ul>
          <li>Compute (f/g)(x) and state domain restrictions.</li>
        </ul>
      </div>
    </PageShell>
  );
}
