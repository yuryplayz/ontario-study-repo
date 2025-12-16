import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10SciencePage() {
  return (
    <PageShell title="Grade 10 Science" subtitle="Strands and units for Grade 10 science." variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/science/grade10/biology" title="Biology" description="Life systems: cells, tissues, organs, and health." />
        <CardLink href="/science/grade10/chemistry" title="Chemistry" description="Chemical reactions and quantitative relationships." />
        <CardLink href="/science/grade10/physics" title="Physics" description="Forces, motion, and energy in systems." />
        <CardLink href="/science/grade10/earth-space" title="Earth & Space" description="Climate change, weather, and Earth systems." />
      </div>
    </PageShell>
  );
}
