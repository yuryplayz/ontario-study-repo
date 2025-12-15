import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10LinearSystemsPage() {
  return (
    <PageShell
      title="Linear Systems"
      subtitle="Solve systems with graphing, substitution, and elimination."
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

        <a href="/math/grade10/linear-systems/word-problems" className="rounded-xl border p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Word problems</h2>
          <p className="text-gray-600">Translate real situations into systems and solve.</p>
        </a>
      </div>
    </PageShell>
  );
}
