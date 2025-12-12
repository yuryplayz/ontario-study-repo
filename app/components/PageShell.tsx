import type { ReactNode } from "react";

export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="mt-3 text-lg text-zinc-600">{subtitle}</p>
        ) : null}
      </header>

      <section className="space-y-8">{children}</section>
    </main>
  );
}
