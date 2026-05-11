export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-medium text-foreground/60">
          Terms and Conditions
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Algorethic Terms and Conditions
        </h1>
        <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
          These Terms and Conditions govern your access to and use of Algorethic
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
        {[
          {
            title: "Acceptance",
            body: "By accessing or using our services, you agree to these Terms and Conditions.",
          },
          {
            title: "Use of Services",
            body: "You agree to use the services responsibly and comply with applicable laws and platform policies.",
          },
          {
            title: "AI Outputs",
            body: "Outputs may be probabilistic and should be validated for your specific use case, especially in high-stakes contexts.",
          },
          {
            title: "Pricing Data & Availability",
            body: "Price comparisons and predictions may vary based on retailer availability, offers, and data refresh times.",
          },
          {
            title: "Intellectual Property",
            body: "Algorethic and its licensors retain all rights in the services, models, software, and content, except where explicitly stated.",
          },
          {
            title: "Disclaimer",
            body: "Services are provided on an as-is and as-available basis, without warranties to the fullest extent permitted by law.",
          },
          {
            title: "Limitation of Liability",
            body: "To the fullest extent permitted by law, Algorethic will not be liable for indirect, incidental, or consequential damages.",
          },
          {
            title: "Changes",
            body: "We may update these terms from time to time. Continued use after updates constitutes acceptance of the updated terms.",
          },
        ].map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-black/10 bg-background/60 p-6 backdrop-blur dark:border-white/15"
          >
            <h2 className="text-sm font-semibold text-foreground">{s.title}</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/60">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
