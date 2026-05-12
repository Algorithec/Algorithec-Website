"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Line = {
  role: "user" | "algorethic";
  text: string;
};

const lines: Line[] = [
  { role: "user", text: "iPhone 15 (128GB) best price in India?" },
  { role: "algorethic", text: "Recognizing intent… product match + storage + color." },
  { role: "algorethic", text: "Checking Amazon, Flipkart, Croma, Reliance Digital… comparing offers." },
  {
    role: "algorethic",
    text: "Best price found. Price history suggests a likely drop during the next sale window.",
  },
];

function useTypedLines(all: Line[], start: boolean) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState("");

  const currentText = all[Math.min(visible, all.length - 1)]?.text ?? "";

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setVisible(all.length);
      setTyped("");
      return;
    }
    setVisible(0);
    setTyped("");
  }, [all.length, reduceMotion, start]);

  useEffect(() => {
    if (!start || reduceMotion) return;
    if (visible >= all.length) return;

    let i = 0;
    setTyped("");
    const id = window.setInterval(() => {
      i += 1;
      setTyped(currentText.slice(0, i));
      if (i >= currentText.length) {
        window.clearInterval(id);
        window.setTimeout(() => {
          setVisible((v) => v + 1);
        }, 320);
      }
    }, 16);

    return () => window.clearInterval(id);
  }, [all.length, currentText, reduceMotion, start, visible]);

  return { visible, typed };
}

export function LiveDemo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -30% 0px" });

  const all = useMemo(() => lines, []);
  const { visible, typed } = useTypedLines(all, inView);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-medium text-foreground/60">
          Live demo (flagship: commerce)
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Compare, predict, decide
        </h2>
        <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
          One text in, live comparisons + price timing out. The same decision
          layer scales across mobility, logistics, finance, healthcare, and
          public services.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="mt-10 rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15 sm:p-8"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-foreground/60">
            algorithec://demo
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-foreground/20" />
            <span className="h-2 w-2 rounded-full bg-foreground/20" />
            <span className="h-2 w-2 rounded-full bg-foreground/20" />
          </div>
        </div>

        <div className="mt-6 space-y-3 font-mono text-sm leading-6">
          {all.slice(0, Math.min(visible, all.length)).map((l, idx) => (
            <p
              key={`${l.role}-${idx}`}
              className={
                l.role === "user" ? "text-foreground/70" : "text-accent"
              }
            >
              {l.role === "user" ? "User: " : "Algorithec: "}
              {l.text}
            </p>
          ))}

          {visible < all.length && (
            <p
              className={
                all[visible]?.role === "user"
                  ? "text-foreground/70"
                  : "text-accent"
              }
            >
              {all[visible]?.role === "user" ? "User: " : "Algorithec: "}
              {typed}
              <span className="text-foreground/30">▍</span>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
