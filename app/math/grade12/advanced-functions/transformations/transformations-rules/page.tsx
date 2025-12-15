import PageShell from "@/app/components/PageShell";

export default function AFTransformRulesNote() {
  return (
    <PageShell
      title="Transformation rules"
      subtitle="Practical rules: order, signs, and combining transformations."
    >
      <div className="prose max-w-none">
        <h3>Order of operations</h3>
        <p>Apply horizontal transformations (inside f(bx + h)) before vertical ones, and handle reflections/stretches carefully.</p>

        <h4>Common patterns</h4>
        <ul>
          <li>y = f(x − h) shifts right by h.</li>
          <li>y = f(x) + k shifts up by k.</li>
          <li>y = a·f(x) stretches vertically by factor a.</li>
          <li>y = f(bx) stretches/compresses horizontally by factor 1/b.</li>
        </ul>

        <h4>Example</h4>
        <p>Describe y = −2 f(3(x + 1)) − 4: reflect over x-axis, vertical stretch by 2, horizontal compress by 3, shift left 1, down 4.</p>
      </div>
    </PageShell>
  );
}
