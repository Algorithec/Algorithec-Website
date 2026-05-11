import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-background/60 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">Algorethic</p>
          <p className="text-sm text-foreground/60">
            Safe decision intelligence, from research to deployment.
          </p>
          <div className="pt-2">
            <Link
              href="/terms"
              className="text-xs text-foreground/60 underline decoration-black/20 underline-offset-4 hover:text-foreground hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
