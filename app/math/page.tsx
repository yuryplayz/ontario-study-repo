export default function MathPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">
        Math
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Ontario Grade 9–12 math notes, explanations, practice questions, and
        formula sheets.
      </p>

      <div className="space-y-6">
        <a
          href="/math/grade10"
          className="block rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">
            Grade 10 Math (MPM2D)
          </h2>
          <p className="text-gray-600">
            Linear relations, quadratics, trigonometry, and systems.
          </p>
        </a>

        <a
          href="/math/grade11"
          className="block rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">
            Grade 11 Math (MCR3U / MCF3M)
          </h2>
          <p className="text-gray-600">
            Functions, trigonometry, and polynomial relationships.
          </p>
        </a>

        <a
          href="/math/grade12"
          className="block rounded-xl border p-6 hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold">
            Grade 12 Math (MHF4U / MCV4U)
          </h2>
          <p className="text-gray-600">
            Advanced functions, calculus, and vectors.
          </p>
        </a>
      </div>
    </main>
  );
}
