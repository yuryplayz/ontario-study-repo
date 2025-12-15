import PageShell from "@/app/components/PageShell";

export default function SolvingTrigEquationsNote() {
  return (
    <PageShell
      title="Solving trig equations"
      subtitle="Approaches: algebraic manipulation, identities, and using the unit circle."
    >
      <div className="prose max-w-none">
        <h3>Approach</h3>
        <p>Isolate trig function, use identities if needed, and find general solutions (including +2πk or using reference angles).</p>

        <h4>Example</h4>
        <p>Solve sin θ = 1/2 → θ = π/6 + 2πk or θ = 5π/6 + 2πk.</p>

        <h4>Practice</h4>
        <ul>
          <li>Solve 2 sin θ − 1 = 0 on [0, 2π).</li>
        </ul>
      </div>
    </PageShell>
  );
}
