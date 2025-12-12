import PageShell from "@/app/components/PageShell";

export default function AFZerosNote() {
  return (
    <PageShell
      title="Zeros & Multiplicity"
      subtitle="How intercept behaviour shows repeated factors."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <p className="text-zinc-700">
          A <span className="font-semibold">zero</span> is an x-value where f(x)=0 (x-intercept).
          If (x − r) is a factor, then x=r is a zero.
        </p>

        <ul className="space-y-2 text-zinc-700">
          <li>• Odd multiplicity: graph crosses the x-axis.</li>
          <li>• Even multiplicity: graph touches/bounces off the x-axis.</li>
        </ul>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
          <p className="font-mono text-sm">f(x) = (x − 2)²(x + 1)</p>
          <p className="text-zinc-700 mt-2">
            Zero at x=2 (mult 2 → touches), zero at x=-1 (mult 1 → crosses).
          </p>
        </div>
      </div>
    </PageShell>
  );
}
