export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p className="font-mono">
          AI_CHALLENGES © {new Date().getFullYear()} — Only prize-backed competitions indexed
        </p>
        <p>
          Data refreshed daily via agentic spider · Last scan: {new Date().toLocaleDateString()}
        </p>
      </div>
    </footer>
  );
}
