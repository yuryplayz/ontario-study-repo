export default function Grade10MathPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Grade 10 Math (MPM2D)</h1>
      <p className="text-gray-600 mb-8">
        Notes, examples, and practice for the Ontario Grade 10 math curriculum.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <a
          href="/math/grade10/quadratics"
          className="rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Quadratic Functions</h2>
          <p className="text-gray-600">Factoring, graphing, vertex form, solving.</p>
        </a>

        <a
          href="/math/grade10/trigonometry"
          className="rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Trigonometry</h2>
          <p className="text-gray-600">SOHCAHTOA, angles of elevation, applications.</p>
        </a>

        <a
          href="/math/grade10/linear-systems"
          className="rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Linear Systems</h2>
          <p className="text-gray-600">Graphing, substitution, elimination.</p>
        </a>

        <a
          href="/math/grade10/measurement-geometry"
          className="rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">Measurement & Geometry</h2>
          <p className="text-gray-600">Area, volume, and problem solving.</p>
        </a>
      </div>
    </main>
  );
}
