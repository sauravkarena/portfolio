"use client";

import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE, SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight transition-colors hover:text-accent"
        >
          {SITE.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href
                  ? "text-accent"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-background/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-white/5",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-3 border-t border-white/5 pt-4">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon className="text-muted-foreground hover:text-accent" />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="text-muted-foreground hover:text-accent" />
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon className="text-muted-foreground hover:text-accent" />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-accent" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
