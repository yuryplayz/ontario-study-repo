import PageShell from "@/app/components/PageShell";

export default function GeometricSequencesNote() {
  return (
    <PageShell
      title="Geometric sequences"
      subtitle="Common ratio, nth term, and sum formulas."
    >
      <div className="prose max-w-none">
        <h3>Formulas</h3>
        <ul>
          <li>nth term: a_n = a_1 · r^(n−1)</li>
          <li>sum (n terms): S_n = a_1 (1 − r^n)/(1 − r) (r ≠ 1)</li>
        </ul>

        <h4>Example</h4>
        <p>a_1 = 4, r = 3 → a_5 = 4 · 3^4 = 324.</p>

        <h4>Practice</h4>
        <ul>
          <li>Find sum of first 6 terms for a_1 = 2 and r = 1/2.</li>
        </ul>
      </div>
    </PageShell>
  );
}
