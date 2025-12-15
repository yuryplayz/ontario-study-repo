import PageShell from "@/app/components/PageShell";

export default function Grade10TrigFindMissingSides() {
  return (
    <PageShell
      title="Finding missing sides"
      subtitle="Use trig ratios to find missing side lengths in right triangles."
    >
      <div className="prose max-w-none">
        <h3>Approach</h3>
        <p>Pick the ratio matching the known and unknown sides: sin = opp/hyp, cos = adj/hyp, tan = opp/adj.</p>

        <h4>Example</h4>
        <p>If θ = 30 degrees and hypotenuse = 10, opposite = 10 × sin(30) = 5.</p>

        <h4>Practice</h4>
        <ul>
          <li>Find the adjacent side when θ = 40 degrees and hypotenuse = 20.</li>
        </ul>
      </div>
    </PageShell>
  );
}
