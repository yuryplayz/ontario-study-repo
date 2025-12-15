import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFPolynomialUnit() {
  return (
    <PageShell
      title="Polynomial Functions"
      subtitle="Zeros, multiplicity, end behaviour, and factoring insights."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/advanced-functions/polynomial/zeros-multiplicity"
          title="Zeros & multiplicity"
          description="What x-intercepts tell you about factors and graph shape."
        />
        <CardLink
          href="/math/grade12/advanced-functions/polynomial/end-behaviour"
          title="End behaviour"
          description="Degree + leading coefficient → the left/right ends."
        />
      </div>
    </PageShell>
  );
}
