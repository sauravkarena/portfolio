"use client";

import Link from "next/link";
import { FadeIn } from "@/components/page-transition";
import { GlassCard } from "@/components/glass-card";
import { SectionHeader } from "@/components/section-header";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { skillCategories, skills } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <Progress value={isInView ? level : 0} />
    </div>
  );
}

export function SkillsPreview() {
  const previewSkills = skills.slice(0, 6);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I work with"
          description="A curated set of tools and frameworks I use daily."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {previewSkills.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.05}>
              <GlassCard>
                <SkillBar name={skill.name} level={skill.level} />
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/skills">View All Skills</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Expertise"
          description="Proficiency across frontend, backend, databases, and developer tools."
        />

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.id,
            );

            return (
              <FadeIn key={category.id} delay={catIndex * 0.1}>
                <div>
                  <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold">
                    <span
                      className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.color}`}
                    />
                    {category.label}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {categorySkills.map((skill) => (
                      <GlassCard key={skill.name}>
                        <SkillBar name={skill.name} level={skill.level} />
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
