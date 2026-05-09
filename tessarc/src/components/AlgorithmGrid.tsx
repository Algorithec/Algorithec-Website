"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    title: "AI Decision Engine",
    body: "Deterministic orchestration that turns uncertain signals into confident actions.",
  },
  {
    title: "RAG Pipelines",
    body: "Minimal, auditable retrieval with citations and guardrails—optimized for relevance.",
  },
  {
    title: "MCP Connectivity",
    body: "Tooling surfaces that connect models to real systems with crisp contracts.",
  },
  {
    title: "Direct Checkout Redirection",
    body: "Intent recognition to action—simulate a purchase flow with structured handoffs.",
  },
  {
    title: "Evaluation Harness",
    body: "Continuous regression tests for quality, safety, and business metrics.",
  },
  {
    title: "Privacy-First Architecture",
    body: "Least-privilege access patterns, redaction by default, and secure boundaries.",
  },
];

export function AlgorithmGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-medium text-foreground/60">Capabilities</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Built for calm, high-signal execution
        </h2>
        <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
          A compact stack that favors clarity over ceremony—optimized for speed,
          control, and trust.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 260, damping: 26 },
              },
            }}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="group rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <span className="mt-1 h-2 w-2 rounded-full bg-accent/70 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="mt-3 text-sm leading-6 text-foreground/60">
              {item.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
