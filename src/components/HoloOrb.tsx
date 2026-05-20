import { motion } from "framer-motion";

export function HoloOrb() {
  return (
    <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center sm:h-[520px] sm:w-[520px]">
      {/* outer glow */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{ background: "var(--gradient-radial-glow)" }} />

      {/* rotating rings */}
      <div className="absolute inset-6 rounded-full border border-primary/30 animate-holo-spin-slow" />
      <div className="absolute inset-16 rounded-full border border-accent/30 animate-holo-spin-reverse" />
      <div className="absolute inset-28 rounded-full border border-primary/40 animate-holo-spin-slow" />

      {/* tick marks ring */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-holo-spin-slow opacity-60">
        {Array.from({ length: 48 }).map((_, i) => (
          <line key={i} x1="100" y1="6" x2="100" y2={i % 4 === 0 ? 16 : 11}
            stroke="currentColor" className="text-primary" strokeWidth="0.5"
            transform={`rotate(${(360 / 48) * i} 100 100)`} />
        ))}
      </svg>

      {/* core orb */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-48 w-48 rounded-full sm:h-60 sm:w-60"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, oklch(0.95 0.05 210 / 0.9), oklch(0.65 0.22 250 / 0.6) 40%, oklch(0.25 0.10 270 / 0.2) 75%, transparent)",
          boxShadow:
            "inset 0 0 60px oklch(0.85 0.18 210 / 0.5), 0 0 80px oklch(0.65 0.22 250 / 0.6), 0 0 160px oklch(0.65 0.22 290 / 0.35)",
        }}
      >
        <div className="absolute inset-4 rounded-full border border-primary/40" />
        <div className="absolute inset-10 rounded-full border border-primary/30" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_24px_8px_oklch(0.82_0.18_215/0.8)]" />
      </motion.div>

      {/* floating particles */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/80"
          style={{
            top: `${50 + Math.sin((i / 16) * Math.PI * 2) * 38}%`,
            left: `${50 + Math.cos((i / 16) * Math.PI * 2) * 38}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.3, 0.6] }}
          transition={{ duration: 2 + (i % 5) * 0.4, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}