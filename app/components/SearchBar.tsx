"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SEARCH_INDEX } from "@/app/lib/searchIndex";

export default function SearchBar() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return SEARCH_INDEX.filter((item) => {
      const hay = `${item.title} ${item.href} ${(item.tags || []).join(" ")}`.toLowerCase();
      return hay.includes(query);
    }).slice(0, 8);
  }, [q]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!boxRef.current) return;
      if (!boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    router.push(href);
  };

  return (
    <div ref={boxRef} className="relative w-full max-w-sm">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search notes… (ex: quadratics, limits, trig)"
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-zinc-300"
      />

      {open && q.trim() && (
        <div className="absolute mt-2 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-zinc-600">
              No results. Try: <span className="font-medium">quadratics</span>,{" "}
              <span className="font-medium">unit circle</span>,{" "}
              <span className="font-medium">derivatives</span>
            </div>
          ) : (
            <ul className="divide-y divide-zinc-100">
              {results.map((r) => (
                <li key={r.href}>
                  <button
                    type="button"
                    onClick={() => go(r.href)}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-zinc-50"
                  >
                    <div className="font-medium">{r.title}</div>
                    <div className="text-xs text-zinc-500">{r.href}</div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
