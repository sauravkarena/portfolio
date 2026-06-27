import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/page-transition";
import { GlassCard } from "@/components/glass-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title="Crafting digital experiences with passion"
          description="A glimpse into who I am and what drives my work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <GlassCard>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {profile.about.introduction}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-accent" />
                  {profile.experienceYears} Years Experience
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.1}>
            <GlassCard className="h-full">
              <GraduationCap className="mb-3 h-8 w-8 text-accent" />
              <h3 className="font-semibold">Education</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {profile.about.education.degree}
              </p>
              <p className="text-sm text-muted-foreground">
                {profile.about.education.institution} · {profile.about.education.year}
              </p>
            </GlassCard>
          </FadeIn>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title="Introduction"
          description={profile.about.introduction}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <GlassCard>
              <h3 className="mb-4 text-xl font-semibold">My Journey</h3>
              <ul className="space-y-3">
                {profile.about.journey.map((step, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    {step}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.1}>
            <GlassCard>
              <h3 className="mb-4 text-xl font-semibold">Education</h3>
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 shrink-0 text-accent" />
                <div>
                  <p className="font-medium">{profile.about.education.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {profile.about.education.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Graduated {profile.about.education.year}
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.2} className="md:col-span-2">
            <GlassCard className="border-accent/20 bg-accent/5">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">What I&apos;m Currently Working On</h3>
                  <p className="mt-2 text-muted-foreground">
                    {profile.about.currentlyWorkingOn}
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
