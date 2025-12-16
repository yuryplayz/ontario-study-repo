import CardLink from "@/app/components/CardLink";

export default function SciencePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold">Science</h1>

      <p className="mb-8 text-lg text-gray-600">
        Ontario Grade 9–12 science notes, explanations, and practice.
      </p>

      <div className="space-y-6">
        <CardLink
          href="/science/grade10"
          title="Grade 10 Science"
          description="Biology, chemistry, physics, and earth/space systems foundations."
        />

        <CardLink
          href="/science/grade11"
          title="Grade 11 Science"
          description="Build core concepts in biology, chemistry, and physics."
        />

        <CardLink
          href="/science/grade12"
          title="Grade 12 Science"
          description="Deeper topics in biology, chemistry, physics, and earth/space science."
        />
      </div>
    </main>
  );
}
