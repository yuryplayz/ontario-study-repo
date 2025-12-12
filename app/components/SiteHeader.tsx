export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="font-semibold tracking-tight">
          Ontario Study Repo
        </a>

        <nav className="flex items-center gap-4 text-sm text-zinc-600">
          <a className="hover:text-zinc-900" href="/math">
            Math
          </a>
          <a className="hover:text-zinc-900" href="/science">
            Science
          </a>
          <a className="hover:text-zinc-900" href="/resources">
            Resources
          </a>
        </nav>
      </div>
    </header>
  );
}
