import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11TrigUnit() {
  return (
    <PageShell
      title="Trigonometry"
      subtitle="Exact values, unit circle basics, and solving common trig questions."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade11/trigonometry/exact-values"
          title="Exact values"
          description="Special triangles + common angles."
        />
        <CardLink
          href="/math/grade11/trigonometry/unit-circle"
          title="Unit circle basics"
          description="Coordinates, sin/cos/tan, and quadrants."
        />
        <CardLink
          href="/math/grade11/trigonometry/identities-intro"
          title="Intro to identities"
          description="Simple identities and simplifying expressions."
        />
        <CardLink
          href="/math/grade11/trigonometry/solving-equations"
          title="Solving trig equations"
          description="Find all solutions in a given interval."
        />
      </div>
    </PageShell>
  );
}
