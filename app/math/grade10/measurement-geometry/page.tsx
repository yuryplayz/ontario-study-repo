import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function Grade10MeasGeoPage() {
  return (
    <PageShell
      title="Measurement & Geometry"
      subtitle="Area, volume, surface area, and geometry problem solving."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink
          href="/math/grade10/measurement-geometry/area-perimeter"
          title="Area & perimeter"
          description="Key formulas + common mistakes."
        />
        <CardLink
          href="/math/grade10/measurement-geometry/surface-area"
          title="Surface area"
          description="Nets, units, and step-by-step examples."
        />
        <CardLink
          href="/math/grade10/measurement-geometry/volume"
          title="Volume"
          description="Prisms, cylinders, pyramids, cones, spheres."
        />
        <CardLink
          href="/math/grade10/measurement-geometry/geometry-problems"
          title="Geometry problems"
          description="Multi-step questions and diagrams."
        />
      </div>
    </PageShell>
  );
}
