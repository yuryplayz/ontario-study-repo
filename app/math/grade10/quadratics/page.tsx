import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10QuadraticsPage() {
  return (
    <PageShell
      title="Quadratic Functions"
      subtitle="Grade 10 quadratics: core skills + practice."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade10/quadratics/factoring"
          title="Factoring quadratics"
          description="Turn x² + bx + c into (x + p)(x + q)."
        />

        <CardLink
          href="/math/grade10/quadratics/vertex-form"
          title="Vertex form"
          description="Work with y = a(x − h)² + k and find the vertex."
        />

        <CardLink
          href="/math/grade10/quadratics/solve-by-factoring"
          title="Solving by factoring"
          description="Set to zero, factor, and use the zero-product property."
        />
      </div>
    </PageShell>
  );
}
