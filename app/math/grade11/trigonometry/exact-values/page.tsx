import PageShell from "@/app/components/PageShell";

export default function ExactValuesNote() {
  return (
    <PageShell
      title="Exact Values"
      subtitle="Special triangles + common angles so you don’t need a calculator."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Special triangles</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">45°–45°–90°</h3>
              <p className="text-zinc-700">Side ratio:</p>
              <p className="font-mono text-sm mt-2">1 : 1 : √2</p>
              <p className="text-zinc-700 mt-3">
                So: sin45 = √2/2, cos45 = √2/2, tan45 = 1
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4">
              <h3 className="font-semibold mb-2">30°–60°–90°</h3>
              <p className="text-zinc-700">Side ratio:</p>
              <p className="font-mono text-sm mt-2">1 : √3 : 2</p>
              <p className="text-zinc-700 mt-3">
                So: sin30 = 1/2, cos30 = √3/2, tan30 = √3/3
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Common exact values table</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-3 font-semibold">Angle</th>
                  <th className="p-3 font-semibold">sin</th>
                  <th className="p-3 font-semibold">cos</th>
                  <th className="p-3 font-semibold">tan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["0°", "0", "1", "0"],
                  ["30°", "1/2", "√3/2", "√3/3"],
                  ["45°", "√2/2", "√2/2", "1"],
                  ["60°", "√3/2", "1/2", "√3"],
                  ["90°", "1", "0", "undefined"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t">
                    <td className="p-3">{row[0]}</td>
                    <td className="p-3 font-mono">{row[1]}</td>
                    <td className="p-3 font-mono">{row[2]}</td>
                    <td className="p-3 font-mono">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Quick tips</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• tanθ = sinθ / cosθ</li>
            <li>• If cosθ = 0 then tanθ is undefined (division by zero).</li>
            <li>• Keep exact values as fractions and roots (don’t round).</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
