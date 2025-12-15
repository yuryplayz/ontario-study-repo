import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AdvancedFunctionsHub() {
  return (
    <PageShell
      title="Advanced Functions (MHF4U)"
      subtitle="Functions and modelling topics for Grade 12 university preparation."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/advanced-functions/transformations"
          title="Transformations & Function Features"
          description="Graph changes, domain/range, and key characteristics."
        />
        <CardLink
          href="/math/grade12/advanced-functions/polynomial"
          title="Polynomial Functions"
          description="Factoring, zeros, end behaviour, and solving."
        />
        <CardLink
          href="/math/grade12/advanced-functions/rational"
          title="Rational Functions"
          description="Asymptotes, holes, intercepts, and restrictions."
        />
        <CardLink
          href="/math/grade12/advanced-functions/trigonometry"
          title="Trigonometric Functions"
          description="Transformations, solving trig equations, identities."
        />
        <CardLink
          href="/math/grade12/advanced-functions/logarithms"
          title="Exponential & Logarithmic Functions"
          description="Laws, solving, and applications."
        />
      </div>
    </PageShell>
  );
}
