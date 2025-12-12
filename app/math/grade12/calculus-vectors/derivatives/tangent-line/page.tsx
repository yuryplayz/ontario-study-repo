import PageShell from "@/app/components/PageShell";

export default function TangentLineNote() {
  return (
    <PageShell
      title="Tangent Line"
      subtitle="Use the derivative to find the slope at a point."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <p className="text-zinc-700">
          The slope of the tangent line to y = f(x) at x = a is f'(a).
        </p>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="text-zinc-700">Steps:</p>
          <ol className="list-decimal ml-6 text-zinc-700 space-y-1">
            <li>Find f'(x)</li>
            <li>Compute slope m = f'(a)</li>
            <li>Find point (a, f(a))</li>
            <li>Use y − y₁ = m(x − x₁)</li>
          </ol>
        </div>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="text-zinc-700">Example:</p>
          <p className="font-mono text-sm">f(x) = x^2, a = 3</p>
          <p className="font-mono text-sm">f'(x) = 2x → f'(3) = 6</p>
          <p className="font-mono text-sm">Point: (3, 9)</p>
          <p className="font-mono text-sm">Tangent: y − 9 = 6(x − 3)</p>
        </div>
      </div>
    </PageShell>
  );
}
