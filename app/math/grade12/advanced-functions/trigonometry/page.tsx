import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFTrigUnit() {
  return (
    <PageShell
      title="Trigonometric Functions"
      subtitle="Transformations, key features, and solving trig equations."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/advanced-functions/trigonometry/graph-features"
          title="Graph features"
          description="Amplitude, period, phase shift, and midline."
        />
        <CardLink
          href="/math/grade12/advanced-functions/trigonometry/graph-transformations"
          title="Graph transformations"
          description="Build graphs from y = sin x and y = cos x."
        />
      </div>
    </PageShell>
  );
}
