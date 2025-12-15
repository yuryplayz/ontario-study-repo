import PageShell from "@/app/components/PageShell";

export default function DomainRangeNote() {
  return (
    <PageShell
      title="Domain & Range"
      subtitle="Find the domain and range of functions and describe them using intervals."
    >
      <div className="prose max-w-none">
        <h3>Domain</h3>
        <p>All x-values for which the function is defined. Watch for division by zero and even roots.</p>

        <h3>Range</h3>
        <p>All possible y-values. Use graphs, algebra, or inverses to find range.</p>

        <h4>Examples</h4>
        <ul>
          <li>y = sqrt(x) → domain [0, infinity), range [0, infinity)</li>
          <li>y = 1/(x - 2) → domain (-infinity, 2) U (2, infinity)</li>
        </ul>
      </div>
    </PageShell>
  );
}
