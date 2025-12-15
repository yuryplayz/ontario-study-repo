import PageShell from "@/app/components/PageShell";

export default function Grade10GeometryProblems() {
  return (
    <PageShell
      title="Geometry problems"
      subtitle="Apply area, perimeter, similarity, and reasoning to solve multi-step geometry problems."
    >
      <div className="prose max-w-none">
        <h3>Tips</h3>
        <ul>
          <li>Draw a clear diagram and label known values.</li>
          <li>Look for similar triangles and use the Pythagorean theorem when appropriate.</li>
          <li>Break composite shapes into simpler parts.</li>
        </ul>

        <h4>Practice</h4>
        <ul>
          <li>Find missing lengths using triangle similarity.</li>
          <li>Solve problems combining area and perimeter constraints.</li>
        </ul>
      </div>
    </PageShell>
  );
}
