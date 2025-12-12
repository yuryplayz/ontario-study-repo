import PageShell from "@/app/components/PageShell";

export default function AFEndBehaviourNote() {
  return (
    <PageShell
      title="End Behaviour"
      subtitle="Use degree and leading coefficient to predict the ends of the graph."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <ul className="space-y-2 text-zinc-700">
          <li>• Even degree: both ends go the same direction.</li>
          <li>• Odd degree: ends go opposite directions.</li>
          <li>• Leading coefficient positive: right end goes up.</li>
          <li>• Leading coefficient negative: right end goes down.</li>
        </ul>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="font-mono text-sm">f(x) = -2x³ + x</p>
          <p className="text-zinc-700">
            Odd degree and negative leading coefficient → left up, right down.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
