import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFTransformationsUnit() {
  return (
    <PageShell
      title="Transformations & Function Features"
      subtitle="How transformations affect graphs: stretches, reflections, translations, and function characteristics."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade12/advanced-functions/transformations/transformations-rules" title="Transformation rules" description="Order of operations, notation, and common examples." />
        <CardLink href="/math/grade12/advanced-functions/transformations/domain-range" title="Domain and range" description="How transformations change domain/range and restrictions." />
      </div>
    </PageShell>
  );
}
