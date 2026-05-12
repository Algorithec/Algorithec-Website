"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const socials: SocialLink[] = [
  {
    href: "https://github.com/algorithec",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 .5C5.73.5.75 5.56.75 11.9c0 5.1 3.2 9.43 7.64 10.96.56.1.77-.25.77-.55v-2.06c-3.11.69-3.77-1.35-3.77-1.35-.51-1.33-1.24-1.69-1.24-1.69-1.01-.71.08-.7.08-.7 1.12.08 1.71 1.18 1.71 1.18.99 1.74 2.6 1.24 3.23.95.1-.74.38-1.24.69-1.52-2.48-.29-5.08-1.26-5.08-5.6 0-1.24.43-2.25 1.14-3.04-.12-.29-.5-1.45.1-3.02 0 0 .93-.31 3.05 1.16.88-.25 1.82-.37 2.76-.38.94.01 1.88.13 2.76.38 2.12-1.47 3.05-1.16 3.05-1.16.6 1.57.22 2.73.1 3.02.71.79 1.14 1.8 1.14 3.04 0 4.35-2.61 5.31-5.1 5.6.39.35.74 1.03.74 2.08v3.08c0 .3.2.65.78.55 4.43-1.54 7.63-5.86 7.63-10.96C23.25 5.56 18.27.5 12 .5z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/algorithec",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.6c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.69H9.29V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28zM5.27 7.43A2.07 2.07 0 1 1 5.27 3.3a2.07 2.07 0 0 1 0 4.13zM7.05 20.45H3.48V9h3.57v11.45z"
        />
      </svg>
    ),
  },
  {
    href: "https://x.com/algorithec",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.77 7.74L23.6 22h-6.57l-5.15-6.55L5.82 22H2.7l7.25-8.3L.4 2h6.73l4.66 5.98L18.9 2zm-1.15 18h1.72L6.76 3.93H4.92L17.75 20z"
        />
      </svg>
    ),
  },
];

export function SocialLinks() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <div ref={ref}>
      <motion.ul
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="flex items-center gap-3"
      >
        {socials.map((s) => (
          <motion.li
            key={s.label}
            variants={{
              hidden: { opacity: 0, y: 6 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 260, damping: 26 },
              },
            }}
          >
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background/60 px-3 py-2 text-xs text-foreground/70 backdrop-blur transition-colors hover:text-foreground hover:border-black/20 dark:border-white/15 dark:hover:border-white/25"
            >
              <span className="text-foreground/80">{s.icon}</span>
              <span>{s.label}</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
