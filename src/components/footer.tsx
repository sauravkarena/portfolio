import { Heart, Mail } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { NAV_LINKS, SITE, SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="text-lg font-bold">
              {SITE.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Full-stack developer building premium web experiences. Follow my 30-Day Challenge journey.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon className="text-muted-foreground transition-colors hover:text-accent" />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon className="text-muted-foreground transition-colors hover:text-accent" />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="text-muted-foreground transition-colors hover:text-accent" />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-4 w-4 text-red-500" /> during the 30-Day Challenge
          </p>
        </div>
      </div>
    </footer>
  );
}
