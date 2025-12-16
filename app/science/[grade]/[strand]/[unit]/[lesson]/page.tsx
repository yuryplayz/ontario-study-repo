import PageShell from "@/app/components/PageShell";
import { SCIENCE_CONTENT } from "@/app/science/lib/scienceContent";

type Params = {
  grade: string;
  strand: string;
  unit: string;
  lesson: string;
};

function Section({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="list-disc pl-6 text-zinc-700">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ScienceLessonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { grade, strand, unit, lesson } = await params;
  const lessonData = SCIENCE_CONTENT[grade]?.strands?.[strand]?.units?.[unit]?.lessons?.[lesson];

  if (!lessonData) {
    return (
      <PageShell title="Science" subtitle="This page is still being built.">
        <div className="prose max-w-none">
          <p>
            We couldn{"'"}t find this lesson yet.
          </p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title={lessonData.title} subtitle={lessonData.subtitle}>
      <div className="space-y-8">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
          Starter notes (Ontario curriculum aligned). I can expand this page with diagrams, labs, and practice questions.
        </div>

        <Section title="Big ideas" items={lessonData.bigIdeas} />
        <Section title="Key points" items={lessonData.keyPoints} />
        <Section title="Vocabulary" items={lessonData.vocabulary} />

        {lessonData.quickCheck?.length ? (
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Quick check</h2>
            <ol className="list-decimal pl-6 text-zinc-700">
              {lessonData.quickCheck.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>
        ) : null}
      </div>
    </PageShell>
  );
}
