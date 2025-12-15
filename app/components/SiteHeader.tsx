import Link from "next/link";

import SearchBar from "./SearchBar";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">
            Ontario Study Repo
          </Link>

          <nav className="hidden items-center gap-4 text-sm text-zinc-600 sm:flex">
            <Link className="hover:text-zinc-900" href="/math">
              Math
            </Link>
            <Link className="hover:text-zinc-900" href="/science">
              Science
            </Link>
            <Link className="hover:text-zinc-900" href="/resources">
              Resources
            </Link>
          </nav>
        </div>

        <div className="sm:w-[360px]">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
