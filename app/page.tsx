export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Ontario High School Study Hub
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Free Grade 9–12 Ontario curriculum notes, summaries, practice questions,
        and formula sheets.
      </p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a href="/math" className="rounded-xl border p-6 hover:shadow-md">
          <h2 className="text-xl font-semibold">📐 Math</h2>
          <p className="text-gray-600">
            Algebra, Functions, Trigonometry, Calculus
          </p>
        </a>

        <a href="/science" className="rounded-xl border p-6 hover:shadow-md">
          <h2 className="text-xl font-semibold">🧪 Science</h2>
          <p className="text-gray-600">
            Chemistry, Physics, Biology
          </p>
        </a>

        <a href="/resources" className="rounded-xl border p-6 hover:shadow-md">
          <h2 className="text-xl font-semibold">📄 Study Resources</h2>
          <p className="text-gray-600">
            Formula sheets, exam tips, practice sets
          </p>
        </a>
      </section>
    </main>
  );
}
