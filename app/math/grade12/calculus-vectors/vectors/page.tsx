import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function VectorsUnit() {
  return (
    <PageShell
      title="Vectors"
      subtitle="Vector representations, operations, and dot product basics."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/calculus-vectors/vectors/basics"
          title="Vector basics"
          description="Magnitude, direction, components, and notation."
        />
        <CardLink
          href="/math/grade12/calculus-vectors/vectors/dot-product-intro"
          title="Dot product (intro)"
          description="Angle between vectors and projections."
        />
      </div>
    </PageShell>
  );
}
