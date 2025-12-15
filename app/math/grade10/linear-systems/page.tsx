import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10LinearSystemsPage() {
  return (
    <PageShell
      title="Linear Systems"
      subtitle="Solve systems with graphing, substitution, and elimination."
      variant="unit"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade10/linear-systems/graphing"
          title="Solve by graphing"
          description="Graph two lines and read the intersection."
        />

        <CardLink
          href="/math/grade10/linear-systems/substitution"
          title="Solve by substitution"
          description="Replace a variable using one equation and solve."
        />

        <CardLink
          href="/math/grade10/linear-systems/elimination"
          title="Solve by elimination"
          description="Add/subtract equations to eliminate a variable."
        />

        <CardLink
          href="/math/grade10/linear-systems/word-problems"
          title="Word problems"
          description="Translate real situations into systems and solve."
        />
      </div>
    </PageShell>
  );
}
