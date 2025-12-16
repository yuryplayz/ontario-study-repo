import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade12SciencePage() {
  return (
    <PageShell title="Grade 12 Science" subtitle="Strands and units for Grade 12 science." variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/science/grade12/biology" title="Biology" description="Biochemistry and genetics (starter)." />
        <CardLink href="/science/grade12/chemistry" title="Chemistry" description="Structure and equilibrium (starter)." />
        <CardLink href="/science/grade12/physics" title="Physics" description="Dynamics and fields (starter)." />
        <CardLink href="/science/grade12/earth-space" title="Earth & Space" description="Climate systems (starter)." />
      </div>
    </PageShell>
  );
}
