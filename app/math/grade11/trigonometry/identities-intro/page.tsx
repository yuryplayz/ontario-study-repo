import PageShell from "@/app/components/PageShell";

export default function IdentitiesIntroNote() {
  return (
    <PageShell
      title="Intro to Trig Identities"
      subtitle="Basic identities you use to simplify expressions."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">What is an identity?</h2>
          <p className="text-zinc-700">
            An identity is an equation that is true for all allowed values of θ.
            You can rewrite one side into the other to simplify.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Core identities</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">tanθ = sinθ / cosθ</p>
            <p className="font-mono text-sm">sin²θ + cos²θ = 1</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example simplification</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="text-zinc-700">Simplify:</p>
            <p className="font-mono text-sm">sinθ / cosθ</p>
            <p className="text-zinc-700">Use:</p>
            <p className="font-mono text-sm">tanθ = sinθ / cosθ</p>
            <p className="text-zinc-700">So the simplified answer is:</p>
            <p className="font-mono text-sm">tanθ</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Example using sin² + cos² = 1</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="text-zinc-700">Simplify:</p>
            <p className="font-mono text-sm">1 − sin²θ</p>
            <p className="text-zinc-700">From sin²θ + cos²θ = 1:</p>
            <p className="font-mono text-sm">cos²θ = 1 − sin²θ</p>
            <p className="text-zinc-700">So:</p>
            <p className="font-mono text-sm">1 − sin²θ = cos²θ</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• “Cancelling” sin and cos incorrectly.</li>
            <li>• Changing both sides at once (only work on one side if possible).</li>
            <li>• Forgetting restrictions (cosθ ≠ 0 when dividing by cosθ).</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
