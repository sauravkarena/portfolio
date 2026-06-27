"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { profile } from "@/lib/data";
import { SITE, SOCIAL } from "@/lib/constants";

export function HeroSection() {
  const typedRole = useTypingEffect(profile.typingRoles);

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <div className="mt-4 h-8 text-xl text-muted-foreground sm:text-2xl">
            <span>{typedRole}</span>
            <span className="animate-pulse text-accent">|</span>
          </div>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={profile.resume} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:border-accent/50 hover:bg-accent/10"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:border-accent/50 hover:bg-accent/10"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:border-accent/50 hover:bg-accent/10"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-purple/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={400}
              height={400}
              className="rounded-2xl"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-sm font-medium">{profile.experienceYears} Years</p>
            <p className="text-xs text-muted-foreground">Experience</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
