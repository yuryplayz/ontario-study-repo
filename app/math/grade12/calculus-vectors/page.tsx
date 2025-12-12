import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function CalcVectorsHub() {
  return (
    <PageShell
      title="Calculus & Vectors (MCV4U)"
      subtitle="Limits, derivatives, applications, and vectors."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/calculus-vectors/limits"
          title="Limits"
          description="Evaluate limits and understand continuity."
        />
        <CardLink
          href="/math/grade12/calculus-vectors/derivatives"
          title="Derivatives"
          description="Rules, derivative of polynomials, trig (intro)."
        />
        <CardLink
          href="/math/grade12/calculus-vectors/applications"
          title="Applications of derivatives"
          description="Optimization and rates of change."
        />
        <CardLink
          href="/math/grade12/calculus-vectors/vectors"
          title="Vectors"
          description="Vector basics, components, and geometry."
        />
      </div>
    </PageShell>
  );
}
