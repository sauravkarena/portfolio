import { Suspense } from "react";
import { GitHubStats } from "@/components/github-stats";
import { AboutPreview } from "@/components/sections/about";
import { ChallengePreview } from "@/components/sections/challenge";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects";
import { SkillsPreview } from "@/components/sections/skills";
import { GlassCard } from "@/components/glass-card";

function GitHubStatsFallback() {
  return (
    <GlassCard className="animate-pulse">
      <div className="h-24 rounded-xl bg-white/5" />
    </GlassCard>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SkillsPreview />
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Suspense fallback={<GitHubStatsFallback />}>
            <GitHubStats />
          </Suspense>
        </div>
      </section>
      <ProjectsPreview />
      <ChallengePreview />
    </>
  );
}
