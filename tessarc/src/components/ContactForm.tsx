"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="w-full max-w-lg rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15 sm:p-8"
      >
        <div className="max-w-md">
          <p className="text-xs font-medium text-foreground/60">Contact</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let’s build quietly powerful systems
          </h1>
          <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
            Send a note and we’ll reply with the shortest path to clarity.
          </p>
        </div>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="relative">
            <input
              id="name"
              name="name"
              required
              className="peer h-12 w-full rounded-xl border border-black/10 bg-background/60 px-4 pt-4 text-sm text-foreground outline-none backdrop-blur transition-colors placeholder:text-transparent focus:border-black/20 dark:border-white/15 dark:focus:border-white/25"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-4 top-3 text-xs text-foreground/50 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-foreground/40 peer-focus:top-3 peer-focus:text-xs peer-focus:text-foreground/60"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="peer h-12 w-full rounded-xl border border-black/10 bg-background/60 px-4 pt-4 text-sm text-foreground outline-none backdrop-blur transition-colors placeholder:text-transparent focus:border-black/20 dark:border-white/15 dark:focus:border-white/25"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-4 top-3 text-xs text-foreground/50 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-foreground/40 peer-focus:top-3 peer-focus:text-xs peer-focus:text-foreground/60"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="peer w-full resize-none rounded-xl border border-black/10 bg-background/60 px-4 pt-5 text-sm text-foreground outline-none backdrop-blur transition-colors placeholder:text-transparent focus:border-black/20 dark:border-white/15 dark:focus:border-white/25"
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-3 text-xs text-foreground/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-foreground/40 peer-focus:top-3 peer-focus:text-xs peer-focus:text-foreground/60"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Send
          </button>

          {sent && (
            <p className="text-sm text-foreground/60">
              Message captured. We’ll respond shortly.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
