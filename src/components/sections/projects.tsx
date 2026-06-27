"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/social-icons";
import { useState } from "react";
import { FadeIn } from "@/components/page-transition";
import { GlassCard } from "@/components/glass-card";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectFilters, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const isUpcoming = project.isUpcoming;

  return (
    <GlassCard className={cn("group overflow-hidden p-0 transition-all duration-300", isUpcoming && "opacity-85 border-white/5 hover:border-white/10")}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isUpcoming ? "filter grayscale-[50%] opacity-40 blur-[2px]" : "group-hover:scale-105"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        
        {isUpcoming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Badge className="bg-gradient-to-r from-accent to-purple text-white shadow-lg border-none px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase">
              Coming Soon
            </Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className={cn("text-lg font-semibold truncate", isUpcoming ? "text-muted-foreground" : "text-foreground")}>
            {project.title}
          </h3>
          {isUpcoming && (
            <Badge variant="default" className="border-accent/30 text-accent/80 text-[10px] uppercase font-bold tracking-wider shrink-0 bg-transparent">
              Upcoming
            </Badge>
          )}
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className={cn(isUpcoming && "opacity-60")}>
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-3 min-h-[20px]">
          {isUpcoming ? (
            <span className="text-xs font-medium text-muted-foreground/60 italic flex items-center gap-1">
              <span>✨</span> Stay tuned for the release!
            </span>
          ) : (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills and creativity."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title="My Work"
          description="Explore projects across different technologies and domains."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                filter === f.id
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
