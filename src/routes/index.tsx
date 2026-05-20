import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { HoloOrb } from "@/components/HoloOrb";
import { Waveform } from "@/components/Waveform";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA.AI — Intelligence Beyond Screens" },
      { name: "description", content: "Meet AURA, the next-generation holographic AI assistant designed to transform the future of human interaction." },
      { property: "og:title", content: "AURA.AI — Holographic AI Assistant" },
      { property: "og:description", content: "A cinematic, hologram-first AI experience. Voice, vision, ambient intelligence." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden text-foreground">
      <Nav />
      <Hero />
      <AiCore />
      <Interface />
      <Voice />
      <Ecosystem />
      <Vision />
      <Features />
      <Footer />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
      <span className="h-1.5 w-1.5 animate-holo-pulse rounded-full bg-primary" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-40 -translate-y-full animate-scan"
          style={{ background: "linear-gradient(to bottom, transparent, oklch(0.82 0.18 215 / 0.08), transparent)" }} />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <SectionLabel>Neural System // V.07</SectionLabel>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Intelligence
            <br />
            <span className="text-holo">Beyond Screens.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            Meet AURA — the next-generation holographic AI assistant designed
            to transform the future of human interaction. Ambient, contextual,
            and quietly powerful.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <button className="group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-holo)", boxShadow: "var(--shadow-holo)" }}>
              <span className="relative z-10">Activate Assistant</span>
            </button>
            <button className="rounded-full border border-primary/40 bg-primary/5 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10">
              Watch Experience
            </button>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 text-left lg:max-w-none">
            {[
              ["99.4ms", "Neural latency"],
              ["18+", "Sensor inputs"],
              ["∞", "Ambient context"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-semibold text-foreground">{v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative animate-holo-float"
        >
          <HoloOrb />
          {/* floating UI chips */}
          <FloatingChip className="-left-2 top-10" label="VISION" value="Active" />
          <FloatingChip className="right-0 top-20" label="VOICE" value="Listening" />
          <FloatingChip className="-left-4 bottom-16" label="CONTEXT" value="Living Room" />
          <FloatingChip className="right-2 bottom-10" label="SIGNAL" value="98%" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({ className = "", label, value }: { className?: string; label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className={`absolute glass-panel rounded-xl px-3 py-2 text-left ${className}`}
    >
      <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
      <div className="text-xs font-semibold text-primary">{value}</div>
    </motion.div>
  );
}

function AiCore() {
  return (
    <section id="core" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionLabel>Neural Core</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            A mind that <span className="text-holo">breathes</span> with you.
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            The Aura Core processes 4.2 trillion contextual signals per second —
            blending vision, voice and ambient state into a single continuous
            stream of intelligence.
          </p>
          <div className="mt-8 space-y-3">
            {[
              ["Thinking", "Modeling intent across 14 simultaneous threads"],
              ["Sensing", "Spatial audio + depth field + biometric pulse"],
              ["Responding", "Generative speech with emotional dynamics"],
            ].map(([t, d]) => (
              <div key={t} className="glass-panel flex items-start gap-4 rounded-2xl p-4">
                <div className="mt-1 h-2 w-2 animate-holo-pulse rounded-full bg-primary shadow-[0_0_12px_var(--holo-cyan)]" />
                <div>
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="text-xs text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[3rem]" style={{ background: "var(--gradient-radial-glow)" }} />
          <div className="glass-panel relative overflow-hidden rounded-3xl p-8 scanline">
            <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>Aura Cortex</span>
              <span className="text-primary">● LIVE</span>
            </div>
            <HoloOrb />
            <div className="mt-6">
              <Waveform bars={56} />
            </div>
            <div className="mt-4 rounded-xl border border-primary/20 bg-background/40 p-3 text-xs text-muted-foreground">
              <span className="text-primary">›</span> Analyzing ambient context · 4.2T signals/s
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Interface() {
  const widgets = [
    { t: "Calendar", v: "3 events today", d: "Briefing at 09:00" },
    { t: "Climate", v: "21.4°C", d: "Adaptive comfort active" },
    { t: "Focus", v: "Deep Work", d: "Notifications silenced" },
    { t: "Mobility", v: "Vehicle ready", d: "Departing in 12 min" },
    { t: "Health", v: "72 bpm", d: "Steady · Calm" },
    { t: "Spaces", v: "Living Room", d: "Lighting · Cinematic" },
  ];
  return (
    <section id="interface" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Holographic Interface</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            An operating system that <span className="text-holo">floats</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Translucent panels arrange themselves around you — every widget
            shaped by intent, every surface reflecting the moment.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {widgets.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-panel scanline relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl"
                style={{ background: "var(--gradient-holo)" }} />
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>{w.t}</span>
                <span className="h-1.5 w-1.5 animate-holo-pulse rounded-full bg-primary" />
              </div>
              <div className="mt-6 text-3xl font-semibold text-foreground">{w.v}</div>
              <div className="mt-2 text-xs text-muted-foreground">{w.d}</div>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 20 }).map((_, j) => (
                  <div key={j} className="h-3 flex-1 rounded-sm"
                    style={{ background: `oklch(0.82 0.18 215 / ${0.15 + (j % 4) * 0.15})` }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voice() {
  const transcript = [
    { from: "you", text: "Aura, prep the studio for a recording session." },
    { from: "aura", text: "Lowering blinds, warming mic preamps, lighting set to amber 2700K." },
    { from: "you", text: "And queue the reference track from last Thursday." },
    { from: "aura", text: "Queued. Want me to draft the session notes when we're done?" },
  ];
  return (
    <section id="voice" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="glass-panel scanline relative overflow-hidden rounded-3xl p-8">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Voice Channel · Encrypted</span>
            <span className="text-primary">● 48 kHz</span>
          </div>
          <div className="mt-8">
            <Waveform bars={64} />
          </div>
          <div className="mt-8 space-y-3">
            {transcript.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.from === "you" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  m.from === "you"
                    ? "ml-auto bg-primary/15 text-foreground"
                    : "border border-primary/20 bg-background/40 text-muted-foreground"
                }`}
              >
                <div className="mb-1 text-[9px] uppercase tracking-[0.3em] text-primary">{m.from}</div>
                {m.text}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <SectionLabel>Voice Intelligence</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Speak naturally. <span className="text-holo">Be understood.</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Aura listens to tone, cadence and silence — replying with a voice
            that adapts to the room and the mood. No commands. Just conversation.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Real-time transcription in 42 languages","Emotional speech synthesis","On-device privacy core"].map(x => (
              <li key={x} className="flex items-center gap-3 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--holo-cyan)]" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const nodes = [
    { label: "Home", pos: "top-4 left-1/2 -translate-x-1/2" },
    { label: "Vehicle", pos: "top-1/3 right-4" },
    { label: "Workspace", pos: "bottom-1/3 right-8" },
    { label: "AR Glass", pos: "bottom-4 left-1/2 -translate-x-1/2" },
    { label: "Robotics", pos: "bottom-1/3 left-8" },
    { label: "Wearables", pos: "top-1/3 left-4" },
  ];
  return (
    <section id="ecosystem" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Smart Ecosystem</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            One intelligence. <span className="text-holo">Every surface.</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 aspect-square w-full max-w-2xl">
          <div className="absolute inset-0 rounded-full border border-primary/20" />
          <div className="absolute inset-12 rounded-full border border-primary/15 animate-holo-spin-slow" />
          <div className="absolute inset-28 rounded-full border border-primary/10" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full"
              style={{ background: "var(--gradient-radial-glow)" }}>
              <div className="h-16 w-16 rounded-full animate-holo-pulse"
                style={{ background: "var(--gradient-holo)", boxShadow: "var(--shadow-holo)" }} />
            </div>
          </div>

          {nodes.map((n) => (
            <div key={n.label} className={`absolute ${n.pos}`}>
              <div className="glass-panel flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide">
                <span className="h-1.5 w-1.5 animate-holo-pulse rounded-full bg-primary" />
                {n.label}
              </div>
            </div>
          ))}

          {/* connecting lines */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100">
            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const x = 50 + 42 * Math.cos((deg * Math.PI) / 180);
              const y = 50 + 42 * Math.sin((deg * Math.PI) / 180);
              return (
                <line key={i} x1="50" y1="50" x2={x} y2={y}
                  stroke="oklch(0.82 0.18 215 / 0.35)" strokeDasharray="1 2" strokeWidth="0.3" />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>Future Vision</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Meetings without <span className="text-holo">walls</span>.
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Step into spaces that bend to your purpose — a holographic studio,
            an infinite workspace, a quiet room shared across continents.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Holographic meetings","Spatial workspaces","Immersive review","Ambient focus"].map(x => (
              <div key={x} className="glass-panel rounded-xl px-4 py-3 text-sm">{x}</div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel scanline relative aspect-[4/3] overflow-hidden rounded-3xl p-6">
            <div className="absolute inset-0 grid-bg opacity-40" />
            {/* horizon */}
            <div className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            {/* floating figures */}
            <div className="relative grid h-full grid-cols-3 items-end gap-4">
              {[0.6, 1, 0.75].map((s, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="relative flex flex-col items-center"
                  style={{ transform: `scale(${s})` }}
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-to-b from-primary/60 to-transparent blur-[1px]" />
                  <div className="mt-2 h-24 w-10 rounded-t-xl bg-gradient-to-b from-primary/40 to-transparent" />
                  <div className="mt-2 h-1 w-20 rounded-full bg-primary/60 shadow-[0_0_20px_var(--holo-cyan)]" />
                </motion.div>
              ))}
            </div>
            <div className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Aura Stage · Live
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { t: "Voice Intelligence", d: "Speech that listens between the words." },
    { t: "Contextual AI", d: "Understands rooms, moments, intent." },
    { t: "Holographic Projection", d: "Light-field surfaces, any space." },
    { t: "Smart Automation", d: "Routines that anticipate, not react." },
    { t: "Emotional Response", d: "Tone adapts to the room's energy." },
    { t: "Neural Learning", d: "Quietly evolves with you, on device." },
  ];
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Built from the <span className="text-holo">future</span>, backwards.
          </h2>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group glass-panel relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <div className="h-3 w-3 rounded-sm animate-holo-pulse" style={{ background: "var(--gradient-holo)" }} />
              </div>
              <h3 className="text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary opacity-70">
                Engaged <span className="h-1 w-1 rounded-full bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-24 overflow-hidden rounded-3xl glass-panel scanline p-10 text-center sm:p-16">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-glow)" }} />
          <SectionLabel>Begin</SectionLabel>
          <h3 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Step into the <span className="text-holo">post-screen</span> era.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Request early access to the Aura Developer Program and start
            building for the next interface of humanity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-holo)", boxShadow: "var(--shadow-holo)" }}>
              Request Access
            </button>
            <button className="rounded-full border border-primary/40 bg-primary/5 px-7 py-3 text-sm font-semibold hover:bg-primary/10">
              Read Manifesto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-primary/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-holo-pulse rounded-full bg-primary" />
          AURA.AI © {new Date().getFullYear()} · Hologram Systems
        </div>
        <div className="flex gap-6 uppercase tracking-[0.25em]">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Press</a>
          <a href="#" className="hover:text-primary">Careers</a>
        </div>
      </div>
    </footer>
  );
}
