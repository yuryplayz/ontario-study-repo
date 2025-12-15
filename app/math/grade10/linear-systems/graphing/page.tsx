import PageShell from "@/app/components/PageShell";

export default function Grade10LinearGraphing() {
  return (
    <PageShell
      title="Solve by graphing"
      subtitle="Graph linear equations and use intersection points to solve systems."
    >
      <div className="prose max-w-none">
        <h3>Overview</h3>
        <p>To solve by graphing, draw both lines on the same coordinate axes. The intersection point (if any) is the solution (x, y).</p>

        <h4>Example</h4>
        <p>y = 2x + 1 and y = −x + 4. Graph both and find intersection: set 2x + 1 = −x + 4 → 3x = 3 → x = 1, y = 3.</p>

        <h4>When graphing is useful</h4>
        <ul>
          <li>Good for visualizing solutions and identifying parallel or coincident lines.</li>
          <li>Be careful with scale; approximate intersections may require algebra to find exact values.</li>
        </ul>
      </div>
    </PageShell>
  );
}
