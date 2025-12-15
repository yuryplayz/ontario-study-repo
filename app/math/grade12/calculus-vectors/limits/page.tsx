import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function LimitsUnit() {
  return (
    <PageShell
      title="Limits"
      subtitle="Learn how limits describe behaviour near a point."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade12/calculus-vectors/limits/basic-limits" title="Basic limits" description="Substitution, factoring, and simplifying." />
      </div>
    </PageShell>
  );
}
