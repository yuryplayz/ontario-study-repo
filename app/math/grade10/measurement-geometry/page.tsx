import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10MeasGeoPage() {
  return (
    <PageShell
      title="Measurement & Geometry"
      subtitle="Formulas and problem-solving for area, surface area, volume, and geometry applications."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade10/measurement-geometry/area-perimeter" title="Area & perimeter" description="Common formulas & examples." />
        <CardLink href="/math/grade10/measurement-geometry/surface-area" title="Surface area" description="Prisms, cylinders and more." />
        <CardLink href="/math/grade10/measurement-geometry/volume" title="Volume" description="Prisms, cylinders, cones, and pyramids." />
        <CardLink href="/math/grade10/measurement-geometry/geometry-problems" title="Geometry problems" description="Multi-step geometry problem strategies." />
      </div>
    </PageShell>
  );
}
