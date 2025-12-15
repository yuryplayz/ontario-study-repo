import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11FinancialMathUnit() {
  return (
    <PageShell
      title="Financial Math (MCF3M)"
      subtitle="Interest, loans, and practical budgeting."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade11/financial-math/simple-interest" title="Simple interest" description="A = P(1 + rt)" />
        <CardLink href="/math/grade11/financial-math/compound-interest" title="Compound interest" description="A = P(1 + r/n)^{n t}" />
        <CardLink href="/math/grade11/financial-math/loans-payments" title="Loans & payments" description="Amortization basics and payment formulas." />
        <CardLink href="/math/grade11/financial-math/budgeting" title="Budgeting" description="Practical budgeting & planning tips." />
      </div>
    </PageShell>
  );
}
