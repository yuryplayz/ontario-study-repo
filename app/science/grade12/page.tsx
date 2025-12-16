import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade12SciencePage() {
  return (
    <PageShell title="Grade 12 Science" subtitle="Advanced science topics organized by strand." variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/science/grade12/biology" title="Biology" description="Biochemistry, genetics, homeostasis, and evolution." />
        <CardLink href="/science/grade12/chemistry" title="Chemistry" description="Equilibrium, kinetics, organic chemistry, and thermochemistry." />
        <CardLink href="/science/grade12/physics" title="Physics" description="Dynamics, energy, fields, waves, and modern physics." />
        <CardLink href="/science/grade12/earth-space" title="Earth & Space" description="Geology, climate, and space systems." />
      </div>
    </PageShell>
  );
}
