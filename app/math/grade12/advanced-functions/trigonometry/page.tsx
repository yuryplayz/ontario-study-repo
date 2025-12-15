import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFTrigUnit() {
  return (
    <PageShell title="Trigonometric Functions" subtitle="Graphs, identities, and solving trig equations in MHF4U.">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade12/advanced-functions/trigonometry/graph-features" title="Graph features" description="Amplitude, period, phase shift, and translations." />
        <CardLink href="/math/grade12/advanced-functions/trigonometry/graph-transformations" title="Graph transformations" description="Apply transformations to trig function graphs." />
      </div>
    </PageShell>
  );
}
