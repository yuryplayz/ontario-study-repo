import PageShell from "@/app/components/PageShell";

export default function BudgetingNote() {
  return (
    <PageShell
      title="Budgeting"
      subtitle="A simple system to track money, plan spending, and hit savings goals."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Basic budget structure</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Income (money coming in)</li>
            <li>• Fixed expenses (same each month: phone plan, subscriptions)</li>
            <li>• Variable expenses (food, transport, entertainment)</li>
            <li>• Savings goal (set aside first if possible)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Simple rule to start</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="text-zinc-700">
              Track every purchase for 1 week, then group into categories.
              After that, set limits for each category.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Savings goal example</h2>
          <p className="text-zinc-700">
            If you want $600 in 3 months and you get paid weekly:
          </p>
          <div className="mt-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4">
            <p className="font-mono text-sm">3 months ≈ 12 weeks</p>
            <p className="font-mono text-sm">$600 / 12 = $50 per week</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Not tracking small purchases (they add up).</li>
            <li>• Setting a budget with no buffer for unexpected costs.</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
