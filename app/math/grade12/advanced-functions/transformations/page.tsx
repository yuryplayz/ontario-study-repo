import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFTransformationsUnit() {
  return (
    <PageShell
      title="Transformations & Function Features"
      subtitle="Core skills: reading graphs and describing transformations."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/advanced-functions/transformations/transformations-rules"
          title="Transformation rules"
          description="g(x) = a f(b(x−h)) + k and what each part does."
        />
        <CardLink
          href="/math/grade12/advanced-functions/transformations/domain-range"
          title="Domain and range"
          description="Restrictions and interval notation."
        />
      </div>
    </PageShell>
  );
}
