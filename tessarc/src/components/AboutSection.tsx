"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Clarity over complexity",
    body: "Systems that are explainable, testable, and calm under pressure.",
  },
  {
    title: "Trust through transparency",
    body: "Price history, platform breakdowns, and clear signals—not black-box guesses.",
  },
  {
    title: "Optimization, not hype",
    body: "Prediction models tuned to real outcomes: accuracy, timing, and user trust.",
  },
];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="max-w-xl">
          <p className="text-xs font-medium text-foreground/60">About</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Price predictions and recommendations for India
          </h1>
          <p className="mt-5 text-sm leading-7 text-foreground/60 sm:text-base">
            Algorethic helps shoppers make confident purchases with price
            predictions, personalized recommendations, and a single-text way to
            compare prices across Indian e-commerce platforms.
          </p>
          <div className="mt-8 rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15">
            <p className="text-xs font-medium text-foreground/60">
              What this enables
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/70">
              <li>Price history and trend analysis at a glance</li>
              <li>Buy now vs wait recommendations with transparent signals</li>
              <li>One-text price comparisons across multiple platforms</li>
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
