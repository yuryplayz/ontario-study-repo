import PageShell from "@/app/components/PageShell";

export default function UnitCircleNote() {
  return (
    <PageShell
      title="Unit circle basics"
      subtitle="Use the unit circle to find exact trig values and understand angles."
    >
      <div className="prose max-w-none">
        <h3>Overview</h3>
        <p>The unit circle is the circle of radius 1 centered at the origin. Points are (cos θ, sin θ) for angle θ measured from the positive x-axis.</p>

        <h4>Key angles</h4>
        <p>Remember coordinates for 0°, 30°, 45°, 60°, 90° (and their radians 0, π/6, π/4, π/3, π/2).</p>

        <h4>Example</h4>
        <p>At 150° (5π/6) the point is (−√3/2, 1/2) so cos150 = −√3/2, sin150 = 1/2.</p>

        <h4>Practice</h4>
        <ul>
          <li>Find sin and cos for 210° and 315° using reference angles.</li>
        </ul>
      </div>
    </PageShell>
  );
}
