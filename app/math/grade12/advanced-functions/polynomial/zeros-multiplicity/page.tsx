import PageShell from "@/app/components/PageShell";

export default function AFZerosNote() {
  return (
    <PageShell
      title="Zeros & multiplicity"
      subtitle="How zeros and their multiplicities affect polynomial graphs (Grade 12)."
    >
      <div className="prose max-w-none">
        <p>
          If (x − r)ⁿ is a factor, r is a root of multiplicity n. If n is odd the graph crosses the x-axis at r; if n is even it touches and rebounds.
        </p>

        <h4>Example</h4>
        <p>f(x) = (x − 1)²(x + 2) has root 1 (mult.2) — touches at x=1; root −2 crosses.</p>

        <h4>Practice</h4>
        <ul>
          <li>Determine multiplicity and behaviour at each zero for f(x) = (x − 3)³(x + 1)²</li>
        </ul>
      </div>
    </PageShell>
  );
}
