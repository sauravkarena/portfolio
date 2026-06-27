import { CheckCircle2, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { FadeIn } from "@/components/page-transition";
import { GlassCard } from "@/components/glass-card";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { challengeDays } from "@/lib/data";
import { cn } from "@/lib/utils";

function ChallengeCard({ day }: { day: (typeof challengeDays)[0] }) {
  const isCompleted = day.status === "completed";
  const isUpcoming = day.status === "upcoming";

  return (
    <GlassCard
      className={cn(
        isCompleted && "border-emerald-500/20",
        isUpcoming && "opacity-70",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold",
              isCompleted
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-white/5 text-muted-foreground",
            )}
          >
            {day.day}
          </div>
          <div>
            <h3 className="font-semibold">{day.title}</h3>
            {day.description && (
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {day.description}
              </p>
            )}
          </div>
        </div>
        {isCompleted ? (
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
        ) : (
          <Clock className="h-5 w-5 shrink-0 text-muted-foreground" />
        )}
      </div>

      {day.screenshot && isCompleted && (
        <div className="relative mt-4 aspect-video overflow-hidden rounded-xl">
          <Image
            src={day.screenshot}
            alt={day.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {isCompleted && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge variant="success">Completed</Badge>
          {day.demo && (
            <a
              href={day.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-accent hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
          {day.github && (
            <a
              href={day.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-accent hover:underline"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {day.linkedin && (
            <a
              href={day.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-accent hover:underline"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          )}
        </div>
      )}
    </GlassCard>
  );
}

export function ChallengePreview() {
  const recent = challengeDays.slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="30-Day Challenge"
          title="Building one project every day"
          description="Follow my journey as I ship 30 full-stack projects in 30 days."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {recent.map((day, i) => (
            <FadeIn key={day.day} delay={i * 0.1}>
              <ChallengeCard day={day} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/challenge">View Full Challenge</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ChallengeSection() {
  const completed = challengeDays.filter((d) => d.status === "completed").length;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="30-Day Full-Stack Challenge"
          title="Daily Project Log"
          description={`Progress: ${completed} of 30 days completed. Each day brings a new project to life.`}
        />

        <div className="mb-8">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-purple transition-all duration-1000"
              style={{ width: `${(completed / 30) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {Math.round((completed / 30) * 100)}% complete
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {challengeDays.map((day, i) => (
            <FadeIn key={day.day} delay={(i % 6) * 0.05}>
              <ChallengeCard day={day} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
