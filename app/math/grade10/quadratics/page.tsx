export default function Grade10QuadraticsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Quadratic Functions</h1>
      <p className="text-gray-600 mb-8">
        Grade 10 quadratics: core skills + practice.
      </p>

      <ul className="space-y-3">
        <li>
          <a className="text-blue-600 underline" href="/math/grade10/quadratics/factoring">
            Factoring quadratics
          </a>
        </li>
        <li>
          <a className="text-blue-600 underline" href="/math/grade10/quadratics/vertex-form">
            Vertex form (y = a(x − h)² + k)
          </a>
        </li>
        <li>
          <a className="text-blue-600 underline" href="/math/grade10/quadratics/solve-by-factoring">
            Solving by factoring
          </a>
        </li>
      </ul>
    </main>
  );
}
