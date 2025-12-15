import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11MathPage() {
  return (
    <PageShell
      title="Grade 11 Math (MCR3U / MCF3M)"
      subtitle="Units and topics for Grade 11 math."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade11/functions"
          title="Functions"
          description="Transformations, features of graphs, and function operations."
        />
        <CardLink
          href="/math/grade11/trigonometry"
          title="Trigonometry"
          description="Exact values, special triangles, and trig identities (basics)."
        />
        <CardLink
          href="/math/grade11/sequences-series"
          title="Sequences & Series"
          description="Arithmetic and geometric sequences with applications."
        />
        <CardLink
          href="/math/grade11/financial-math"
          title="Financial Math (MCF3M)"
          description="Interest, loans, budgeting, and real-world money math."
        />
      </div>
    </PageShell>
  );
}
