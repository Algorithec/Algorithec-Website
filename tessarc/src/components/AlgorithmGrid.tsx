"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    title: "Foundational Models & LLM Systems",
    body: "Research and development across model capabilities, fine-tuning, and evaluation.",
  },
  {
    title: "AI Decision Engines",
    body: "Structured, auditable decision-making for commerce, mobility, logistics, and services.",
  },
  {
    title: "Agents & Conversational Assistants",
    body: "Natural language interfaces and autonomous workflows for enterprise, consumer, and government.",
  },
  {
    title: "APIs, Cloud, and SDKs",
    body: "Access models and decision systems via developer-friendly tooling and integrations.",
  },
  {
    title: "Safety & Alignment",
    body: "Frameworks for safe deployment: red-teaming, monitoring, and policy-driven guardrails.",
  },
  {
    title: "Partnerships & Licensing",
    body: "Strategic collaborations with industry, academia, and government—built to scale responsibly.",
  },
];

export function AlgorithmGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-medium text-foreground/60">Platform</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Built for safe, deployable AI
        </h2>
        <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
          Research-driven systems that can be licensed, integrated, and operated
          across sectors—with safety and measurement as first-class features.
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

      <div className="mt-12 rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15 sm:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-foreground/60">Industries</p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            Designed to transfer across domains
          </h3>
          <p className="mt-3 text-sm leading-7 text-foreground/60">
            Commerce is our flagship. The same platform extends to healthcare,
            education, finance, mobility, logistics, travel, hospitality, and
            public services.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
          }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {[
            "E-commerce",
            "Food Delivery",
            "Ride-hailing",
            "Travel",
            "Hospitality",
            "Mobility",
            "Healthcare",
            "Education",
            "Finance",
            "Logistics",
            "Public Services",
          ].map((label) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 6 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 260, damping: 26 },
                },
              }}
              className="rounded-full border border-black/10 bg-background/60 px-3 py-1.5 text-xs text-foreground/70 dark:border-white/15"
            >
              {label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
