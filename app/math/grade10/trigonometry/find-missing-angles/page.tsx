import PageShell from "@/app/components/PageShell";

export default function Grade10TrigFindMissingAngles() {
  return (
    <PageShell
      title="Finding missing angles"
      subtitle="Use inverse trig functions and triangle facts to find unknown angles."
    >
      <div className="prose max-w-none">
        <h3>Approach</h3>
        <p>Use inverse trig (sin^-1, cos^-1, tan^-1) when you know two sides and want the angle. For non-right triangles use angle sum or law of sines where appropriate.</p>

        <h4>Example</h4>
        <p>Opposite = 3, adjacent = 4 → θ = arctan(3/4) ≈ 36.87 degrees.</p>

        <h4>Practice</h4>
        <ul>
          <li>Given sides 7 and 24 (adjacent and hypotenuse), find θ.</li>
        </ul>
      </div>
    </PageShell>
  );
}
