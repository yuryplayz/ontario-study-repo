import PageShell from "@/app/components/PageShell";
import {
  type ScienceLab,
  type SciencePracticeQuestion,
  SCIENCE_CONTENT,
} from "@/app/science/lib/scienceContent";

type Params = {
  grade: string;
  strand: string;
  unit: string;
  lesson: string;
};

function Bullets({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="list-disc pl-6 text-zinc-700">
        {items.map((x, i) => (
          <li key={`${title}-${i}`}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

function Practice({ title, items }: { title: string; items?: SciencePracticeQuestion[] }) {
  if (!items?.length) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="space-y-4">
        {items.map((q, i) => (
          <div key={`${title}-${i}`} className="rounded-xl border border-zinc-200 bg-white p-4">
            <div className="text-sm font-semibold text-zinc-900">Q{i + 1}.</div>
            <div className="mt-1 text-zinc-800">{q.question}</div>
            <div className="mt-3 text-sm font-semibold text-zinc-900">Answer</div>
            <div className="mt-1 text-zinc-700">{q.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LabCard({ lab, index }: { lab: ScienceLab; index: number }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <h3 className="text-lg font-semibold">Lab {index + 1}: {lab.title}</h3>

      <div className="mt-3 space-y-4 text-zinc-700">
        <div>
          <div className="text-sm font-semibold text-zinc-900">Purpose</div>
          <p className="mt-1">{lab.purpose}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold text-zinc-900">Materials</div>
            <ul className="mt-1 list-disc pl-6">
              {lab.materials.map((m, i) => (
                <li key={`m-${i}`}>{m}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900">Safety</div>
            <ul className="mt-1 list-disc pl-6">
              {lab.safety.map((s, i) => (
                <li key={`s-${i}`}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-900">Procedure</div>
          <ol className="mt-1 list-decimal pl-6">
            {lab.procedure.map((step, i) => (
              <li key={`p-${i}`}>{step}</li>
            ))}
          </ol>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-900">Analysis questions (with answers)</div>
          <div className="mt-2 space-y-3">
            {lab.analysisQuestions.map((q, i) => (
              <div key={`a-${i}`} className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                <div className="text-sm font-semibold">Q{i + 1}.</div>
                <div className="mt-1">{q.question}</div>
                <div className="mt-2 text-sm font-semibold">Answer</div>
                <div className="mt-1">{q.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Labs({ items }: { items?: ScienceLab[] }) {
  if (!items?.length) return null;
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Labs / activities</h2>
      <div className="space-y-4">
        {items.map((lab, i) => (
          <LabCard key={`lab-${i}`} lab={lab} index={i} />
        ))}
      </div>
    </section>
  );
}

export default async function ScienceLessonPage({ params }: { params: Promise<Params> }) {
  const { grade, strand, unit, lesson } = await params;
  const lessonData = SCIENCE_CONTENT[grade]?.strands?.[strand]?.units?.[unit]?.lessons?.[lesson];

  if (!lessonData) {
    return (
      <PageShell title="Science" subtitle="This page is still being built.">
        <div className="prose max-w-none">
          <p>We couldn{"'"}t find this lesson yet.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell title={lessonData.title} subtitle={lessonData.subtitle}>
      <div className="space-y-8">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
          Grade 10 lessons include notes, practice, and labs with worked answers.
        </div>

        <Bullets title="Notes" items={lessonData.notes} />

        {lessonData.diagrams?.length ? (
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Diagrams (what to draw)</h2>
            <div className="space-y-3">
              {lessonData.diagrams.map((d, i) => (
                <div key={`diagram-${i}`} className="rounded-xl border border-zinc-200 bg-white p-4">
                  <div className="font-semibold text-zinc-900">{d.title}</div>
                  <div className="mt-1 text-zinc-700">{d.description}</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <Bullets title="Vocabulary" items={lessonData.vocabulary} />

        <Practice title="Practice questions (with worked answers)" items={lessonData.practice} />
        <Practice title="Quick check" items={lessonData.quickCheck} />

        <Labs items={lessonData.labs} />
      </div>
    </PageShell>
  );
}
