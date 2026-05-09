"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Clarity over complexity",
    body: "Systems that are explainable, testable, and calm under pressure.",
  },
  {
    title: "Retrieval you can trust",
    body: "RAG with citations, guardrails, and measurable quality targets.",
  },
  {
    title: "Optimization, not hype",
    body: "Evaluate, iterate, and ship improvements with business-visible outcomes.",
  },
];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="max-w-xl">
          <p className="text-xs font-medium text-foreground/60">About</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A decision engine built on retrieval and rigor
          </h1>
          <p className="mt-5 text-sm leading-7 text-foreground/60 sm:text-base">
            Tessarc combines an AI Decision Engine with production-grade RAG
            pipelines. The result is a minimalist interface over complex
            reasoning: predictable orchestration, constrained context, and
            measurable outcomes.
          </p>
          <div className="mt-8 rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15">
            <p className="text-xs font-medium text-foreground/60">
              What this enables
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/70">
              <li>RAG pipelines with grounding, citations, and eval loops</li>
              <li>Intent recognition and tool execution through MCP-style surfaces</li>
              <li>Direct action handoffs (checkout, booking, routing) with audits</li>
            </ul>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 260, damping: 26 },
                },
              }}
              className="rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15"
            >
              <p className="text-sm font-semibold text-foreground">{v.title}</p>
              <p className="mt-2 text-sm leading-6 text-foreground/60">
                {v.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
