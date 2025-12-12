import PageShell from "@/app/components/PageShell";

export default function BasicLimitsNote() {
  return (
    <PageShell
      title="Basic Limits"
      subtitle="The first tools: substitution, factoring, and simplifying."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <p className="text-zinc-700">
          Many limits can be solved by direct substitution. If you get 0/0,
          simplify (often by factoring) first.
        </p>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="font-mono text-sm">lim (x→2) (x² − 4)/(x − 2)</p>
          <p className="text-zinc-700">Factor: x² − 4 = (x − 2)(x + 2)</p>
          <p className="text-zinc-700">Cancel (x − 2), then substitute:</p>
          <p className="font-mono text-sm">= lim (x→2) (x + 2) = 4</p>
        </div>
      </div>
    </PageShell>
  );
}
