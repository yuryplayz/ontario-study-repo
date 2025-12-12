import PageShell from "@/app/components/PageShell";

export default function LoansPaymentsNote() {
  return (
    <PageShell
      title="Loans and Payments"
      subtitle="Monthly payments, interest, and total cost over time."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Key idea</h2>
          <p className="text-zinc-700">
            Loans usually compound interest, and payments reduce the balance over time.
            The longer the loan term, the more total interest you usually pay.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">What to track</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Principal (amount borrowed)</li>
            <li>• Interest rate (APR)</li>
            <li>• Payment amount and frequency (monthly, bi-weekly)</li>
            <li>• Term (how long you’re paying)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Quick example reasoning</h2>
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2">
            <p className="text-zinc-700">
              If two loans have the same rate, the one with the longer term usually
              has smaller monthly payments but more total interest.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common mistakes</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Comparing loans only by monthly payment (not total paid).</li>
            <li>• Forgetting compounding frequency (monthly vs annually).</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
