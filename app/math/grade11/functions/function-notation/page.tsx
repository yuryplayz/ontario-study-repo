import PageShell from "@/app/components/PageShell";

export default function FunctionNotationNote() {
  return (
    <PageShell
      title="Function notation"
      subtitle="Evaluate and interpret f(x) in context."
    >
      <div className="prose max-w-none">
        <h3>Basics</h3>
        <p>f(x) denotes the output of a function when input is x. Replace x with numbers or expressions to evaluate.</p>

        <h4>Example</h4>
        <p>If f(x) = 2x + 3 then f(4) = 11 and f(a + 1) = 2(a + 1) + 3.</p>

        <h4>Applications</h4>
        <p>Use function notation to model relationships in word problems and interpret inputs/outputs.</p>
      </div>
    </PageShell>
  );
}
