import { motion } from "framer-motion";

export function Waveform({ bars = 48 }: { bars?: number }) {
  return (
    <div className="flex h-24 items-center justify-center gap-1">
      {Array.from({ length: bars }).map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.7)) * 70;
        return (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-primary/30 via-primary to-accent"
            style={{ height: `${h}%` }}
            animate={{ scaleY: [0.3, 1, 0.4, 0.9, 0.3] }}
            transition={{
              duration: 1.4 + (i % 6) * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.04,
            }}
          />
        );
      })}
    </div>
  );
}