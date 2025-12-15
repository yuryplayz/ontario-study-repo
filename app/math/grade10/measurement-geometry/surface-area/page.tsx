import PageShell from "@/app/components/PageShell";

export default function Grade10SurfaceArea() {
  return (
    <PageShell
      title="Surface area"
      subtitle="Calculate surface area for prisms, cylinders, and common solids."
    >
      <div className="prose max-w-none">
        <h3>Formulas</h3>
        <ul>
          <li>Rectangular prism: SA = 2(lw + lh + wh)</li>
          <li>Cylinder: SA = 2πr(h + r) (lateral + 2 bases)</li>
        </ul>

        <h4>Example</h4>
        <p>Rectangular prism 3 × 4 × 5 → SA = 2(12 + 15 + 20) = 94.</p>

        <h4>Practice</h4>
        <ul>
          <li>Find SA of a cylinder with r = 2 and h = 6.</li>
        </ul>
      </div>
    </PageShell>
  );
}
