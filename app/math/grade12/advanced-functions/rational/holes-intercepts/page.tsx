import PageShell from "@/app/components/PageShell";

export default function HolesInterceptsNote() {
  return (
    <PageShell
      title="Holes & Intercepts"
      subtitle="How to spot holes and find x- and y-intercepts correctly."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Holes (removable discontinuities)</h2>
          <p className="text-zinc-700">
            A hole happens when a factor cancels out of the numerator and denominator.
          </p>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="font-mono text-sm">f(x) = (x − 2)(x + 1) / (x − 2)(x − 5)</p>
            <p className="text-zinc-700">Cancel (x − 2) → hole at x = 2</p>
            <p className="text-zinc-700">But x = 2 is still excluded from the domain.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">x-intercepts</h2>
          <p className="text-zinc-700">
            Set the numerator = 0 (after simplifying), and make sure the x-value
            is not excluded by the domain.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">y-intercept</h2>
          <p className="text-zinc-700">
            Plug in x = 0 (if allowed).
          </p>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">g(x) = (x + 1)/(x − 3)</p>
            <p className="font-mono text-sm mt-2">g(0) = 1/(-3) = -1/3</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
