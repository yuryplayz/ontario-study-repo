import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function DerivativesUnit() {
  return (
    <PageShell
      title="Derivatives"
      subtitle="Derivative rules and basic differentiation."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/calculus-vectors/derivatives/derivative-rules"
          title="Derivative rules"
          description="Power rule, constant rule, sum rule."
        />
        <CardLink
          href="/math/grade12/calculus-vectors/derivatives/tangent-line"
          title="Tangent line"
          description="Slope at a point and equation of the tangent."
        />
      </div>
    </PageShell>
  );
}
