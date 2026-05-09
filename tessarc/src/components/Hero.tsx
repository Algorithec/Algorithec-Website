"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function useTypewriter(text: string, speedMs: number) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (speedMs <= 0) {
      setValue(text);
      return;
    }
    setValue("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setValue(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, speedMs]);

  return value;
}

function seeded01(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function ParticleField() {
  const reduceMotion = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => {
        const top = seeded01(i + 1) * 100;
        const left = seeded01(i + 2) * 100;
        const size = 2 + Math.round(seeded01(i + 3) * 4);
        const blur = 6 + seeded01(i + 4) * 12;
        const driftX = (seeded01(i + 5) - 0.5) * 90;
        const driftY = (seeded01(i + 6) - 0.5) * 90;
        const opacity = 0.18 + seeded01(i + 7) * 0.22;
        const delay = seeded01(i + 8) * 0.6;
        const duration = 4.6 + seeded01(i + 9) * 4.8;
        return {
          top,
          left,
          size,
          blur,
          driftX,
          driftY,
          opacity,
          delay,
          duration,
        };
      }),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_0%,rgba(43,111,255,0.10),transparent_65%)]" />
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            filter: `blur(${p.blur}px)`,
            opacity: p.opacity,
            transform: "translate3d(-50%,-50%,0)",
          }}
          initial={reduceMotion ? undefined : { x: 0, y: 0 }}
          animate={reduceMotion ? undefined : { x: p.driftX, y: p.driftY }}
          transition={
            reduceMotion
              ? undefined
              : {
                  type: "spring",
                  stiffness: 18,
                  damping: 12,
                  mass: 2.2,
                  delay: p.delay,
                  repeat: Infinity,
                  repeatType: "mirror",
                }
          }
        />
      ))}
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const headline = useTypewriter(
    "Safe decision intelligence, built for the real world.",
    reduceMotion ? 0 : 18
  );

  return (
    <section className="relative overflow-hidden">
      <ParticleField />
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background/60 px-3 py-2 text-xs text-foreground/70 backdrop-blur dark:border-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Models • Agents • Decision Engines • APIs
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            {headline}
            <span className="text-foreground/20">|</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-foreground/65 sm:text-lg">
            Algorethic researches, builds, and commercializes AI systems that
            help businesses and consumers evaluate options and execute the best
            outcomes. Flagship product: price predictions, comparisons, and
            timing insights for Indian e-commerce.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              See how it works
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-background/60 px-5 text-sm font-medium text-foreground/80 backdrop-blur transition-colors hover:border-black/20 hover:text-foreground dark:border-white/15 dark:hover:border-white/25"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
