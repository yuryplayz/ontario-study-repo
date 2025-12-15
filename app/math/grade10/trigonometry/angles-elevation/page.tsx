import PageShell from "@/app/components/PageShell";

export default function Grade10TrigAnglesElevation() {
  return (
    <PageShell
      title="Angles of elevation & depression"
      subtitle="Apply basic trig to angles of elevation and depression problems."
    >
      <div className="prose max-w-none">
        <h3>Idea</h3>
        <p>Convert the scenario into a right triangle where the angle is measured from horizontal. Elevation looks up; depression looks down.</p>

        <h4>Example</h4>
        <p>A person 1.6 m tall stands 50 m from a tower. Angle of elevation to top is 12 degrees. Height ≈ 1.6 + 50 * tan(12).</p>

        <h4>Practice</h4>
        <ul>
          <li>Given distance and angle, find height above eye level.</li>
          <li>Use SOHCAHTOA to solve after drawing the triangle.</li>
        </ul>
      </div>
    </PageShell>
  );
}
