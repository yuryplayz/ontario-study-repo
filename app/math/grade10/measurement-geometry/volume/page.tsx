import PageShell from "@/app/components/PageShell";

export default function Grade10Volume() {
  return (
    <PageShell
      title="Volume"
      subtitle="Volume formulas and examples for prisms, cylinders, and pyramids."
    >
      <div className="prose max-w-none">
        <h3>Common formulas</h3>
        <ul>
          <li>Rectangular prism: V = length × width × height</li>
          <li>Cylinder: V = π × r × r × h</li>
          <li>Pyramid/cone: V = (1/3) × base area × height</li>
        </ul>

        <h4>Example</h4>
        <p>Cylinder with r = 3 and h = 5 → V = π × 9 × 5 = 45π.</p>

        <h4>Practice</h4>
        <ul>
          <li>Convert units where necessary before computing volume.</li>
        </ul>
      </div>
    </PageShell>
  );
}
