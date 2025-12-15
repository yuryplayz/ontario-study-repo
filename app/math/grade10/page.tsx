import CardLink from "@/app/components/CardLink";

export default function Grade10MathPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Grade 10 Math (MPM2D)</h1>
      <p className="mb-8 text-gray-600">
        Notes, examples, and practice for the Ontario Grade 10 math curriculum.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <CardLink
          href="/math/grade10/quadratics"
          title="Quadratic Functions"
          description="Factoring, graphing, vertex form, solving."
        />

        <CardLink
          href="/math/grade10/trigonometry"
          title="Trigonometry"
          description="SOHCAHTOA, angles of elevation, applications."
        />

        <CardLink
          href="/math/grade10/linear-systems"
          title="Linear Systems"
          description="Graphing, substitution, elimination."
        />

        <CardLink
          href="/math/grade10/measurement-geometry"
          title="Measurement & Geometry"
          description="Area, volume, and problem solving."
        />
      </div>
    </main>
  );
}
