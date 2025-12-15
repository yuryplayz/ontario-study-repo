import type { ReactNode } from "react";

export default function PageShell({
  title,
  subtitle,
  children,
  variant = "note",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /**
   * "note": lesson/notes pages with a bordered content box (default)
   * "unit": landing pages that primarily show CardLink grids
   */
  variant?: "note" | "unit";
}) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-3 text-lg text-zinc-600">{subtitle}</p> : null}
      </header>

      <section className="space-y-8">
        {variant === "note" ? (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">{children}</div>
        ) : (
          children
        )}
      </section>
    </main>
  );
}
