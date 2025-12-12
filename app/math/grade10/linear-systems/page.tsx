import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10LinearSystemsPage() {
  return (
    <PageShell
      title="Linear Systems"
      subtitle="Graphing, substitution, and elimination."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade10/linear-systems/graphing"
          title="Solve by graphing"
          description="Intersection point + checking solutions."
        />
        <CardLink
          href="/math/grade10/linear-systems/substitution"
          title="Solve by substitution"
          description="Isolate a variable and substitute."
        />
        <CardLink
          href="/math/grade10/linear-systems/elimination"
          title="Solve by elimination"
          description="Add/subtract equations to eliminate a variable."
        />
        <CardLink
          href="/math/grade10/linear-systems/word-problems"
          title="Word problems"
          description="Translate situations into two equations."
        />
      </div>
    </PageShell>
  );
}
