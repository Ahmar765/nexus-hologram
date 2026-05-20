export function Nav({ onActivate, active, onNav }: { onActivate: () => void; active: boolean; onNav: (id: string) => void }) {
  const link = (id: string, label: string) => (
    <button onClick={() => onNav(id)} className="hover:text-primary">{label}</button>
  );
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass-panel px-5 py-3">
        <button onClick={() => onNav("top")} className="flex items-center gap-2">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full"
            style={{ background: "var(--gradient-holo)" }}>
            <span className="h-2 w-2 rounded-full bg-background" />
          </span>
          <span className="text-sm font-semibold tracking-[0.2em] text-foreground">AURA<span className="text-primary">.AI</span></span>
        </button>
        <nav className="hidden gap-7 text-xs font-medium tracking-widest text-muted-foreground md:flex">
          {link("core", "CORE")}
          {link("interface", "INTERFACE")}
          {link("voice", "VOICE")}
          {link("ecosystem", "ECOSYSTEM")}
          {link("vision", "VISION")}
        </nav>
        <button onClick={onActivate} className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary transition-colors hover:bg-primary/20">
          {active ? "ACTIVE ●" : "ACTIVATE"}
        </button>
      </div>
    </header>
  );
}