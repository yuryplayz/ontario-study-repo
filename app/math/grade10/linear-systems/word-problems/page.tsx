import PageShell from "@/app/components/PageShell";

export default function Grade10LinearWordProblems() {
  return (
    <PageShell
      title="Word problems"
      subtitle="Translate real-world situations into systems of linear equations and solve."
    >
      <div className="prose max-w-none">
        <h3>Strategy</h3>
        <ol>
          <li>Define variables clearly.</li>
          <li>Write equations representing relationships.</li>
          <li>Solve the resulting system and interpret the answer in context.</li>
        </ol>

        <h4>Example</h4>
        <p>Two numbers add to 20 and one is 4 more than the other. Let x and y be the numbers: x + y = 20, x = y + 4. Solve to get x = 12, y = 8.</p>

        <h4>Practice</h4>
        <ul>
          <li>Set up and solve mixture or age problems that lead to linear systems.</li>
        </ul>
      </div>
    </PageShell>
  );
}
