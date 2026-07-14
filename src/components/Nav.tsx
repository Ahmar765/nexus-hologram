import { useState } from "react";

export function Nav({ onActivate, active, onNav }: { onActivate: () => void; active: boolean; onNav: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const items: [string, string][] = [
    ["core", "CORE"],
    ["interface", "INTERFACE"],
    ["voice", "VOICE"],
    ["ecosystem", "ECOSYSTEM"],
    ["vision", "VISION"],
  ];
  const go = (id: string) => {
    onNav(id);
    setOpen(false);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full glass-panel px-3 py-2 sm:mt-4 sm:px-5 sm:py-3">
        <button onClick={() => go("top")} className="flex min-w-0 items-center gap-2">
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
            style={{ background: "var(--gradient-holo)" }}>
            <span className="h-2 w-2 rounded-full bg-background" />
          </span>
          <span className="truncate text-xs font-semibold tracking-[0.2em] text-foreground sm:text-sm">AURA<span className="text-primary">.AI</span></span>
        </button>
        <nav className="hidden gap-7 text-xs font-medium tracking-widest text-muted-foreground md:flex">
          {items.map(([id, l]) => (
            <button key={id} onClick={() => go(id)} className="hover:text-primary">{l}</button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onActivate} className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-primary transition-colors hover:bg-primary/20 sm:px-4 sm:text-xs">
            {active ? "ACTIVE ●" : "ACTIVATE"}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 text-primary md:hidden"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-px w-4 bg-primary" />
              <span className="block h-px w-4 bg-primary" />
              <span className="block h-px w-4 bg-primary" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl glass-panel p-4 md:hidden">
          <nav className="grid gap-3 text-xs font-medium tracking-widest text-muted-foreground">
            {items.map(([id, l]) => (
              <button key={id} onClick={() => go(id)} className="text-left hover:text-primary">{l}</button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}