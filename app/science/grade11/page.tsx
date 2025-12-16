import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11SciencePage() {
  return (
    <PageShell title="Grade 11 Science" subtitle="Choose a strand and study the key ideas." variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/science/grade11/biology" title="Biology" description="Evolution, genetics, and body systems." />
        <CardLink href="/science/grade11/chemistry" title="Chemistry" description="Matter, bonding, reactions, and solutions." />
        <CardLink href="/science/grade11/physics" title="Physics" description="Forces, energy, waves, and fields (intro)." />
        <CardLink href="/science/grade11/earth-space" title="Earth & Space" description="Astronomy, climate, and space science (intro)." />
      </div>
    </PageShell>
  );
}
