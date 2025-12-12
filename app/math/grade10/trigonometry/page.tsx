import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10TrigPage() {
  return (
    <PageShell
      title="Trigonometry"
      subtitle="SOHCAHTOA, angles of elevation/depression, and real-world problems."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade10/trigonometry/sohcahtoa"
          title="SOHCAHTOA basics"
          description="Sin, cos, tan and how to pick the right ratio."
        />
        <CardLink
          href="/math/grade10/trigonometry/angles-elevation"
          title="Angles of elevation & depression"
          description="Diagram setup + solving word problems."
        />
        <CardLink
          href="/math/grade10/trigonometry/find-missing-sides"
          title="Finding missing sides"
          description="Practice-style questions with steps."
        />
        <CardLink
          href="/math/grade10/trigonometry/find-missing-angles"
          title="Finding missing angles"
          description="Inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)."
        />
      </div>
    </PageShell>
  );
}
