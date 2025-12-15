import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function ApplicationsUnit() {
  return (
    <PageShell title="Applications of derivatives" subtitle="Optimization and modelling examples for MCV4U.">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade12/calculus-vectors/applications/optimization" title="Optimization" description="Max/min problems using derivatives." />
      </div>
    </PageShell>
  );
}
