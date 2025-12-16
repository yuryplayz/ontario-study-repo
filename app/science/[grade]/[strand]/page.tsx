import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";
import { SCIENCE_CONTENT } from "@/app/science/lib/scienceContent";

type Params = {
  grade: string;
  strand: string;
};

export default async function ScienceStrandPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { grade, strand } = await params;
  const gradeData = SCIENCE_CONTENT[grade];
  const strandData = gradeData?.strands?.[strand];

  if (!gradeData || !strandData) {
    return (
      <PageShell
        title="Science"
        subtitle="This page is still being built."
      >
        <div className="prose max-w-none">
          <p>
            We couldn{"'"}t find this strand yet.
          </p>
        </div>
      </PageShell>
    );
  }

  const unitEntries = Object.entries(strandData.units);

  return (
    <PageShell title={strandData.title} subtitle={strandData.subtitle} variant="unit">
      <div className="grid gap-4 sm:grid-cols-2">
        {unitEntries.map(([unitSlug, unit]) => (
          <CardLink
            key={unitSlug}
            href={`/science/${grade}/${strand}/${unitSlug}`}
            title={unit.title}
            description={unit.subtitle}
          />
        ))}
      </div>
    </PageShell>
  );
}
