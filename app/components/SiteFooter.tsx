export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Ontario Study Repo</p>
        <p className="mt-2">
          <a className="underline hover:text-zinc-900" href="/privacy">
            Privacy
          </a>{" "}
          ·{" "}
          <a className="underline hover:text-zinc-900" href="/terms">
            Terms
          </a>
        </p>
      </div>
    </footer>
  );
}
