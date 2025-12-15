import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFRationalUnit() {
  return (
    <PageShell title="Rational Functions" subtitle="Asymptotes, holes, intercepts, and restrictions.">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade12/advanced-functions/rational/domain-asymptotes" title="Domain & asymptotes" description="Vertical/horizontal/slant asymptotes and domain restrictions." />
        <CardLink href="/math/grade12/advanced-functions/rational/holes-intercepts" title="Holes & intercepts" description="Find removable discontinuities and intercepts." />
      </div>
    </PageShell>
  );
}
