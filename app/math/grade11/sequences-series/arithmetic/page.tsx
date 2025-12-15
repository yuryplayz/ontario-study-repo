import PageShell from "@/app/components/PageShell";

export default function ArithmeticSequencesNote() {
  return (
    <PageShell
      title="Arithmetic sequences"
      subtitle="Common difference, nth term, and sum formulas."
    >
      <div className="prose max-w-none">
        <h3>Formulas</h3>
        <ul>
          <li>nth term: a_n = a_1 + (n − 1)d</li>
          <li>sum (n terms): S_n = n/2 (a_1 + a_n)</li>
        </ul>

        <h4>Example</h4>
        <p>Find 10th term when a_1 = 3 and d = 5 → a_10 = 3 + 9·5 = 48.</p>

        <h4>Practice</h4>
        <ul>
          <li>Compute sum of first 20 terms for a_1 = 2, d = 3.</li>
        </ul>
      </div>
    </PageShell>
  );
}
