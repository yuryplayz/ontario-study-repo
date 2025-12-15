import PageShell from "@/app/components/PageShell";
import CardLink from "@/app/components/CardLink";

export default function AFLogsUnit() {
  return (
    <PageShell title="Exponential & Logarithmic Functions" subtitle="Laws, solving, and applications.">
      <div className="grid gap-4 sm:grid-cols-2">
        <CardLink href="/math/grade12/advanced-functions/logarithms/log-laws" title="Log laws" description="Properties for combining/splitting logs." />
        <CardLink href="/math/grade12/advanced-functions/logarithms/solving-log-equations" title="Solving log equations" description="Rewrite between exponential and log form to solve." />
      </div>
    </PageShell>
  );
}
