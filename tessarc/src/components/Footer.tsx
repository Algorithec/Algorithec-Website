import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

const footerLinks = {
  products: [
    { label: "Biome", href: "/" },
    { label: "Platform overview", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  company: [
    { label: "Algorethic", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Economic Futures", href: "/about" },
    { label: "Research", href: "/about" },
    { label: "News", href: "/about" },
  ],
  terms: [
    { label: "Privacy choices", href: "/terms#privacy-choices" },
    { label: "Privacy policy", href: "/terms#privacy-policy" },
    {
      label: "Consumer health data privacy policy",
      href: "/terms#consumer-health-data-privacy-policy",
    },
    {
      label: "Responsible disclosure policy",
      href: "/terms#responsible-disclosure-policy",
    },
    { label: "Terms of service: Commercial", href: "/terms#tos-commercial" },
    { label: "Terms of service: Consumer", href: "/terms#tos-consumer" },
    { label: "Usage policy", href: "/terms#usage-policy" },
  ],
  help: [
    { label: "Availability", href: "/terms#availability" },
    { label: "Status", href: "/terms#status" },
    { label: "Support center", href: "/contact" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-background/70 backdrop-blur dark:border-white/10 supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-3 md:col-span-4">
            <p className="text-sm font-semibold tracking-tight text-foreground">
              Algorethic
            </p>
            <p className="text-sm leading-6 text-foreground/60">
              Safe decision intelligence, from research to deployment. Flagship
              product: Biome.
            </p>
            <a
              href="mailto:info@algorithec.com"
              className="inline-flex text-sm text-foreground/60 underline decoration-black/20 underline-offset-4 hover:text-foreground hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
            >
              info@algorithec.com
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-8 md:grid-cols-4">
            <div className="space-y-3">
              <p className="text-xs font-medium text-foreground/60">Products</p>
              <ul className="space-y-2">
                {footerLinks.products.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/60 hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium text-foreground/60">Company</p>
              <ul className="space-y-2">
                {footerLinks.company.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/60 hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium text-foreground/60">
                Terms and policies
              </p>
              <ul className="space-y-2">
                {footerLinks.terms.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/60 hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium text-foreground/60">
                Help and security
              </p>
              <ul className="space-y-2">
                {footerLinks.help.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/60 hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/60">
            © {new Date().getFullYear()} Algorethic. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
