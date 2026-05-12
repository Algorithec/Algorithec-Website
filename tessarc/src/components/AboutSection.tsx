"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Research → product",
    body: "Fundamental and applied AI research that ships into real deployments.",
  },
  {
    title: "Safety by design",
    body: "Alignment, evaluation, monitoring, and controls built into every system.",
  },
  {
    title: "Licensable platform",
    body: "APIs, SDKs, and managed deployments for partners across industries.",
  },
];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="max-w-xl">
          <p className="text-xs font-medium text-foreground/60">About</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Building safe AI systems across industries
          </h1>
          <p className="mt-5 text-sm leading-7 text-foreground/60 sm:text-base">
            Algorithec researches, designs, develops, and commercializes AI
            systems including LLMs and decision engines. We build conversational
            assistants and autonomous agents, provide model access via APIs and
            SDKs, and partner with industry, academia, and government to deploy
            safe and beneficial AI.
          </p>
          <div className="mt-8 rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15">
            <p className="text-xs font-medium text-foreground/60">
              Current product: Biome
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/70">
              <li>Decision engine for shopping and e-commerce</li>
              <li>Decision support for food delivery and ride-hailing</li>
              <li>Decision workflows for travel and hospitality</li>
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
