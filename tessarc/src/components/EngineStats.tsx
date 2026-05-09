"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

const stats: Stat[] = [
  {
    label: "Domains Indexed",
    value: 14,
    description: "Multi-source retrieval across structured + unstructured data.",
  },
  {
    label: "RAG Latency (p95)",
    value: 180,
    suffix: "ms",
    description: "Fast recall with controlled context windows and caching.",
  },
  {
    label: "Evaluations / Day",
    value: 1200,
    description: "Continuous testing for relevance, safety, and correctness.",
  },
];

function CountUp({
  to,
  suffix,
  start,
}: {
  to: number;
  suffix?: string;
  start: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      type: "spring",
      stiffness: 140,
      damping: 20,
      mass: 0.8,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [reduceMotion, start, to]);

  return (
    <span className="font-mono text-2xl tracking-tight text-foreground sm:text-3xl">
      {value.toLocaleString()}
      {suffix ?? ""}
    </span>
  );
}

export function EngineStats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15"
          >
            <p className="text-xs font-medium text-foreground/60">{s.label}</p>
            <p className="mt-3">
              <CountUp to={s.value} suffix={s.suffix} start={inView} />
            </p>
            <p className="mt-3 text-sm leading-6 text-foreground/60">
              {s.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
