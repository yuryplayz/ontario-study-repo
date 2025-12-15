import PageShell from "@/app/components/PageShell";

export default function Grade10LinearSubstitution() {
  return (
    <PageShell
      title="Solve by substitution"
      subtitle="Use substitution to solve a system by replacing one variable with an expression from the other equation."
    >
      <div className="prose max-w-none">
        <h3>Steps</h3>
        <ol>
          <li>Solve one equation for one variable (e.g., y = ...).</li>
          <li>Substitute that expression into the other equation and solve for the remaining variable.</li>
          <li>Back-substitute to find the other variable.</li>
        </ol>

        <h4>Example</h4>
        <p>Solve: y = 2x + 1 and x + y = 7. Substitute y → x + (2x + 1) = 7 → 3x + 1 = 7 → x = 2 → y = 5.</p>

        <h4>Practice</h4>
        <ul>
          <li>Solve: 2x − y = 3 and x + 2y = 8 using substitution.</li>
        </ul>
      </div>
    </PageShell>
  );
}
