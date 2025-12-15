import PageShell from "@/app/components/PageShell";

export default function Grade10QuadraticsVertexForm() {
  return (
    <PageShell
      title="Vertex form"
      subtitle="Work with y = a(x − h)² + k and find the vertex, axis of symmetry, and graph features."
    >
      <div className="prose max-w-none">
        <h3>Overview</h3>
        <p>
          Vertex form makes it easy to read the vertex (h, k) and to perform translations and vertical stretches/compressions.
        </p>

        <h4>Key facts</h4>
        <ul>
          <li>Vertex: (h, k)</li>
          <li>Axis of symmetry: x = h</li>
          <li>If a > 0 the parabola opens upward; if a < 0 it opens downward.</li>
        </ul>

        <h4>Converting standard → vertex</h4>
        <p>Complete the square to rewrite y = ax² + bx + c in vertex form.</p>

        <h4>Example</h4>
        <p>Write y = x² − 4x + 1 in vertex form.</p>
        <pre>
// complete the square
y = x² − 4x + 1
  = (x² − 4x + 4) + 1 − 4
  = (x − 2)² − 3
// vertex at (2, −3)
        </pre>

        <h4>Practice</h4>
        <ul>
          <li>Convert y = 2x² − 8x + 3 to vertex form</li>
          <li>Identify the vertex and axis of symmetry for y = −(x + 1)² + 5</li>
        </ul>
      </div>
    </PageShell>
  );
}
