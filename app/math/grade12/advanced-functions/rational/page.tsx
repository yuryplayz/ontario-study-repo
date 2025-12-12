import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFRationalUnit() {
  return (
    <PageShell
      title="Rational Functions"
      subtitle="Asymptotes, holes, intercepts, and restrictions."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade12/advanced-functions/rational/domain-asymptotes"
          title="Domain & asymptotes"
          description="Find restrictions and identify vertical/horizontal asymptotes."
        />
        <CardLink
          href="/math/grade12/advanced-functions/rational/holes-intercepts"
          title="Holes & intercepts"
          description="When canceling creates holes; finding x- and y-intercepts."
        />
      </div>
    </PageShell>
  );
}
