import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11FinancialMathUnit() {
  return (
    <PageShell
      title="Financial Math (MCF3M)"
      subtitle="Money math topics that students search all the time."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade11/financial-math/simple-interest"
          title="Simple interest"
          description="I = Prt and quick applications."
        />
        <CardLink
          href="/math/grade11/financial-math/compound-interest"
          title="Compound interest"
          description="A = P(1 + r/n)^(nt) and growth."
        />
        <CardLink
          href="/math/grade11/financial-math/loans-payments"
          title="Loans & payments"
          description="Monthly payments and amortization basics."
        />
        <CardLink
          href="/math/grade11/financial-math/budgeting"
          title="Budgeting"
          description="Income vs expenses, saving goals, and planning."
        />
      </div>
    </PageShell>
  );
}
