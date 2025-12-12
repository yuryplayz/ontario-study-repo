import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFLogsUnit() {
  return (
    <PageShell
      title="Exponential & Logarithmic Functions"
      subtitle="Laws, solving, and basic applications."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/advanced-functions/logarithms/log-laws"
          title="Log laws"
          description="Product, quotient, and power rules."
        />
        <CardLink
          href="/math/grade12/advanced-functions/logarithms/solving-log-equations"
          title="Solving log equations"
          description="Rewrite and solve while checking domain restrictions."
        />
      </div>
    </PageShell>
  );
}
