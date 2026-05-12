export default function TermsPage() {
  const sections = [
    {
      id: "privacy-choices",
      title: "Privacy choices",
      body: "You can make choices about how certain data is used for personalization and service improvement, subject to applicable law and product configuration.",
    },
    {
      id: "privacy-policy",
      title: "Privacy policy",
      body: "This policy describes what data we collect, how we use it, how we share it, and the controls available to you. For questions, contact info@algorithec.com.",
    },
    {
      id: "terms-of-service",
      title: "Terms of service",
      body: "Use of Algorithec services is subject to applicable law and these policies. Outputs may be probabilistic and should be validated for your use case. Availability, pricing, and feature access may vary by product and agreement.",
    },
    {
      id: "usage-policy",
      title: "Usage policy",
      body: "You agree not to misuse the services, including attempting to bypass safeguards, violating laws, or using the system to harm others. We may restrict access for policy violations.",
    },
    {
      id: "availability",
      title: "Availability",
      body: "We aim for reliable availability but may perform maintenance, experience outages, or change features. Enterprise availability and SLAs may be defined by contract.",
    },
    {
      id: "status",
      title: "Status",
      body: "Service status and incident updates may be communicated through official channels. For urgent issues, contact support via info@algorithec.com.",
    },
  ] as const;

  return (
    <div className="relative flex flex-1 flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_0%,rgba(43,111,255,0.10),transparent_65%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-foreground/60">
            Terms and policies
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Algorithec Terms and Policies
          </h1>
          <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
            These terms and policies govern your access to and use of Algorithec
            services, products, and websites. If you have questions, contact{" "}
            <a
              href="mailto:info@algorithec.com"
              className="text-foreground underline decoration-black/20 underline-offset-4 hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
            >
              info@algorithec.com
            </a>
            .
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {sections.map((s) => (
            <section
              id={s.id}
              key={s.id}
              className="rounded-2xl border border-black/10 bg-background/70 p-6 backdrop-blur dark:border-white/15 dark:bg-background/40"
            >
              <h2 className="text-sm font-semibold text-foreground">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-foreground/60">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
