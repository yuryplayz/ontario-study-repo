import PageShell from "@/app/components/PageShell";

export default function LogLawsNote() {
  return (
    <PageShell
      title="Log Laws"
      subtitle="The three main rules you use constantly."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
          <p className="font-mono text-sm">log(a b) = log(a) + log(b)</p>
          <p className="font-mono text-sm">log(a / b) = log(a) − log(b)</p>
          <p className="font-mono text-sm">log(a^k) = k log(a)</p>
        </div>

        <p className="text-zinc-700">
          Important: arguments must be positive (inside the log &gt; 0).
        </p>

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4">
          <p className="text-zinc-700">Example:</p>
          <p className="font-mono text-sm mt-2">log(3x) = log(3) + log(x)</p>
        </div>
      </div>
    </PageShell>
  );
}
