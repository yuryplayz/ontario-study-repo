import PageShell from "@/app/components/PageShell";

export default function Grade10AreaPerimeter() {
  return (
    <PageShell
      title="Area & perimeter"
      subtitle="Common formulas and problem-solving strategies."
    >
      <div className="prose max-w-none">
        <h3>Key formulas</h3>
        <ul>
          <li>Rectangle area: A = length × width</li>
          <li>Triangle area: A = (1/2) × base × height</li>
          <li>Circle area: A = π × r × r</li>
          <li>Perimeter/circumference: sum of sides, C = 2πr</li>
        </ul>

        <h4>Examples</h4>
        <p>Triangle with base 6 and height 4 → A = 0.5 × 6 × 4 = 12.</p>

        <h4>Practice</h4>
        <ul>
          <li>Find area and perimeter of composite shapes by splitting into parts.</li>
        </ul>
      </div>
    </PageShell>
  );
}
