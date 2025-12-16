import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";
import { SCIENCE_CONTENT } from "@/app/science/lib/scienceContent";

type Params = {
  grade: string;
  strand: string;
  unit: string;
};

export default async function ScienceUnitPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { grade, strand, unit } = await params;
  const unitData = SCIENCE_CONTENT[grade]?.strands?.[strand]?.units?.[unit];

  if (!unitData) {
    return (
      <PageShell
        title="Science"
        subtitle="This page is still being built."
      >
        <div className="prose max-w-none">
          <p>
            We couldn{"'"}t find this unit yet.
          </p>
        </div>
      </PageShell>
    );
  }

  const lessonEntries = Object.entries(unitData.lessons);

  return (
    <PageShell title={unitData.title} subtitle={unitData.subtitle} variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        {lessonEntries.map(([lessonSlug, lesson]) => (
          <CardLink
            key={lessonSlug}
            href={`/science/${grade}/${strand}/${unit}/${lessonSlug}`}
            title={lesson.title}
            description={lesson.subtitle}
          />
        ))}
      </div>
    </PageShell>
  );
}
