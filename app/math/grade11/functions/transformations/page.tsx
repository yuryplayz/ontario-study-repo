import PageShell from "@/app/components/PageShell";

export default function TransformationsNote() {
  return (
    <PageShell
      title="Transformations"
      subtitle="Stretches, reflections, and translations of functions (Grade 11)."
    >
      <div className="prose max-w-none">
        <h3>Overview</h3>
        <p>Transformations change how a graph looks without changing its basic shape. Key types:
        </p>
        <ul>
          <li>Vertical stretch/compression: y = a·f(x)</li>
          <li>Horizontal stretch/compression: y = f(bx)</li>
          <li>Translation: y = f(x − h) + k shifts right/left and up/down</li>
          <li>Reflection: y = −f(x) (over x-axis) or y = f(−x) (over y-axis)</li>
        </ul>

        <h4>Example</h4>
        <p>Apply transformations in order: horizontal (inside), then vertical, then translations — pay attention to signs.</p>

        <h4>Practice</h4>
        <ul>
          <li>Describe how y = −2f(x + 3) − 1 transforms f(x)</li>
        </ul>
      </div>
    </PageShell>
  );
}
