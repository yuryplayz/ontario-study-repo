import PageShell from "@/app/components/PageShell";

export default function Grade10TrigSOHCAHTOA() {
  return (
    <PageShell
      title="SOHCAHTOA basics"
      subtitle="Right triangle trig fundamentals for Grade 10."
    >
      <div className="prose max-w-none">
        <h3>Definitions</h3>
        <ul>
          <li>sin θ = opposite / hypotenuse</li>
          <li>cos θ = adjacent / hypotenuse</li>
          <li>tan θ = opposite / adjacent</li>
        </ul>

        <h4>Using SOHCAHTOA</h4>
        <p>Identify the sides relative to angle θ and choose the matching ratio.</p>

        <h4>Practice</h4>
        <ul>
          <li>Find sin θ if opposite = 4 and hypotenuse = 5.</li>
        </ul>
      </div>
    </PageShell>
  );
}
