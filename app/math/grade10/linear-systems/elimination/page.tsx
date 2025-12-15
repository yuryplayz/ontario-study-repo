import PageShell from "@/app/components/PageShell";

export default function Grade10LinearElimination() {
  return (
    <PageShell
      title="Solve by elimination"
      subtitle="Use addition/subtraction (and scaling) to eliminate a variable and solve systems."
    >
      <div className="prose max-w-none">
        <h3>Steps</h3>
        <ol>
          <li>Multiply equations if necessary so coefficients line up.</li>
          <li>Add or subtract the equations to eliminate one variable.</li>
          <li>Solve for the remaining variable and back-substitute.</li>
        </ol>

        <h4>Worked example</h4>
        <p>Solve the system: 2x + 3y = 12 and x − 3y = 0.</p>
        <p>Adding both gives 3x = 12 → x = 4. Then 2(4) + 3y = 12 → 8 + 3y = 12 → y = 4/3.</p>

        <h4>Tips</h4>
        <ul>
          <li>Look for common multiples to make elimination easy.</li>
          <li>If equations become identical, the system has infinitely many solutions.</li>
          <li>If elimination produces a contradiction (e.g., 0 = 5) there is no solution.</li>
        </ul>
      </div>
    </PageShell>
  );
}
