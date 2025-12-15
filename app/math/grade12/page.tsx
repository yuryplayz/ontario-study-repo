import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade12MathPage() {
  return (
    <PageShell
      title="Grade 12 Math (MHF4U / MCV4U)"
      subtitle="Advanced Functions and Calculus & Vectors."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/advanced-functions"
          title="Advanced Functions (MHF4U)"
          description="Transformations, polynomial/rational, trig functions, logs."
        />
        <CardLink
          href="/math/grade12/calculus-vectors"
          title="Calculus & Vectors (MCV4U)"
          description="Limits, derivatives, applications, and vectors."
        />
      </div>
    </PageShell>
  );
}
