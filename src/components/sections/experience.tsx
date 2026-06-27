"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { FadeIn } from "@/components/page-transition";
import { GlassCard } from "@/components/glass-card";
import { SectionHeader } from "@/components/section-header";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey"
          description="My career timeline and key responsibilities at each role."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-purple to-transparent md:block md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <motion.div
                    className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2 md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  />

                  <div className="md:w-1/2 md:pl-0">
                    <GlassCard className="ml-8 md:ml-0">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <p className="flex items-center gap-1.5 text-accent">
                            <Briefcase className="h-4 w-4" />
                            {exp.company}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {exp.duration}
                        </span>
                      </div>
                      {exp.location && (
                        <p className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
