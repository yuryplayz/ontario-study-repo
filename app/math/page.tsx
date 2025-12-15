import CardLink from "@/app/components/CardLink";

export default function MathPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold">Math</h1>

      <p className="mb-8 text-lg text-gray-600">
        Ontario Grade 9–12 math notes, explanations, practice questions, and formula sheets.
      </p>

      <div className="space-y-6">
        <CardLink
          href="/math/grade10"
          title="Grade 10 Math (MPM2D)"
          description="Linear relations, quadratics, trigonometry, and systems."
        />

        <CardLink
          href="/math/grade11"
          title="Grade 11 Math (MCR3U / MCF3M)"
          description="Functions, trigonometry, and polynomial relationships."
        />

        <CardLink
          href="/math/grade12"
          title="Grade 12 Math (MHF4U / MCV4U)"
          description="Advanced functions, calculus, and vectors."
        />
      </div>
    </main>
  );
}
