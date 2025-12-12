import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade11FunctionsUnit() {
  return (
    <PageShell
      title="Functions"
      subtitle="Core Grade 11 skills for working with functions."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade11/functions/transformations"
          title="Transformations"
          description="Stretches, reflections, and translations."
        />
        <CardLink
          href="/math/grade11/functions/domain-range"
          title="Domain & Range"
          description="Find restrictions and describe intervals."
        />
        <CardLink
          href="/math/grade11/functions/function-notation"
          title="Function notation"
          description="Evaluate and interpret f(x) in context."
        />
        <CardLink
          href="/math/grade11/functions/operations"
          title="Operations on functions"
          description="Add, subtract, multiply, divide, and compose."
        />
      </div>
    </PageShell>
  );
}
