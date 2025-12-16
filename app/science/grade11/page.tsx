import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11SciencePage() {
  return (
    <PageShell title="Grade 11 Science" subtitle="Strands and units for Grade 11 science." variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/science/grade11/biology" title="Biology" description="Biodiversity, evolution, and genetics (starter)." />
        <CardLink href="/science/grade11/chemistry" title="Chemistry" description="Bonding and solutions (starter)." />
        <CardLink href="/science/grade11/physics" title="Physics" description="Motion, forces, energy, and waves (starter)." />
        <CardLink href="/science/grade11/earth-space" title="Earth & Space" description="Astronomy and Earth systems (starter)." />
      </div>
    </PageShell>
  );
}
