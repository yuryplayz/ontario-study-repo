import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10SciencePage() {
  return (
    <PageShell title="Grade 10 Science" subtitle="Core Grade 10 science strands." variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/science/grade10/biology" title="Biology" description="Cells, genetics basics, and systems." />
        <CardLink href="/science/grade10/chemistry" title="Chemistry" description="Atoms, elements, compounds, and reactions." />
        <CardLink href="/science/grade10/physics" title="Physics" description="Motion, forces, and energy basics." />
        <CardLink href="/science/grade10/earth-space" title="Earth & Space" description="Earth systems and space exploration basics." />
      </div>
    </PageShell>
  );
}
