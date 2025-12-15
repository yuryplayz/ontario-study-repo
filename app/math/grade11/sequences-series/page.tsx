import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11SeqSeriesUnit() {
  return (
    <PageShell
      title="Sequences & Series"
      subtitle="Arithmetic and geometric sequences, series, and applications."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade11/sequences-series/arithmetic"
          title="Arithmetic sequences"
          description="Common difference, term formula, and solving for n."
        />
        <CardLink
          href="/math/grade11/sequences-series/geometric"
          title="Geometric sequences"
          description="Common ratio, growth/decay, and term formula."
        />
        <CardLink
          href="/math/grade11/sequences-series/series-sums"
          title="Series & sums"
          description="Sum formulas and problem solving."
        />
        <CardLink
          href="/math/grade11/sequences-series/applications"
          title="Applications"
          description="Real-world word problems."
        />
      </div>
    </PageShell>
  );
}
