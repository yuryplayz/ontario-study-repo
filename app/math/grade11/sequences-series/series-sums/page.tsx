import PageShell from "@/app/components/PageShell";

export default function SeriesSumsNote() {
  return (
    <PageShell title="Series & sums" subtitle="Use sequence formulas and tests for sums and series.">
      <div className="prose max-w-none">
        <h3>Arithmetic series</h3>
        <p>Use S_n = n/2 (a_1 + a_n) or S_n = n/2 (2a_1 + (n − 1)d).</p>

        <h3>Geometric series</h3>
        <p>
          Use S_n = a_1 (1 − r^n)/(1 − r) for r ≠ 1. Infinite sum exists when |r| {"<"} 1: S_∞ = a_1/(1 − r).
        </p>

        <h4>Practice</h4>
        <ul>
          <li>Find sum of geometric series 3 + 6 + 12 + ... up to 5 terms.</li>
        </ul>
      </div>
    </PageShell>
  );
}
