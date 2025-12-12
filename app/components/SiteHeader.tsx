import SearchBar from "./SearchBar";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="font-semibold tracking-tight">
            Ontario Study Repo
          </a>

          <nav className="hidden items-center gap-4 text-sm text-zinc-600 sm:flex">
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

        <div className="sm:w-[360px]">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
