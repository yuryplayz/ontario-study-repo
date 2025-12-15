import PageShell from "@/app/components/PageShell";

export default function IdentitiesIntroNote() {
  return (
    <PageShell
      title="Intro to trig identities"
      subtitle="Fundamental identities used to simplify and prove trig expressions."
    >
      <div className="prose max-w-none">
        <h3>Fundamental identities</h3>
        <ul>
          <li>sin^2 θ + cos^2 θ = 1</li>
          <li>1 + tan^2 θ = sec^2 θ</li>
          <li>sin(−θ) = −sin θ, cos(−θ) = cos θ</li>
        </ul>

        <h4>Example</h4>
        <p>Simplify 1 − sin^2 θ using the Pythagorean identity → cos^2 θ.</p>

        <h4>Practice</h4>
        <ul>
          <li>Prove tan^2 θ + 1 = sec^2 θ using sin/cos definitions.</li>
        </ul>
      </div>
    </PageShell>
  );
}
