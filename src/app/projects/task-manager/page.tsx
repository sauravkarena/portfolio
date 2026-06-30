import { ArrowLeft, CheckCircle2, GripVertical, AlertCircle, ArrowRight, Sparkles, Folder, Layers, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/social-icons";
import { GlassCard } from "@/components/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "TaskFlow Manager - Projects",
  description: "A collaborative workflow kanban board built with Laravel, Inertia.js, and React.",
  path: "/projects/task-manager",
});

export default function TaskManagerDetailPage() {
  const techStack = ["React", "Laravel 12", "Inertia.js", "MySQL", "Tailwind CSS v4", "Framer Motion"];

  const features = [
    {
      title: "Interactive Kanban Board",
      description: "Seamless drag-and-drop workflow system to move tasks dynamically through stages ('To Do', 'In Progress', 'Done').",
      icon: GripVertical,
    },
    {
      title: "Optimistic UI Updates",
      description: "Tasks update instantly on the screen when dropped, with the Inertia API syncing changes to MySQL database silently in the background.",
      icon: Zap,
    },
    {
      title: "Premium Validation & Error Handling",
      description: "Native HTML required bubbles are disabled. Form validation errors are verified on the backend and highlighted with custom React Alert components.",
      icon: AlertCircle,
    },
    {
      title: "Smart Completed Tasks Restriction",
      description: "To prevent accidental modifications, completed tasks in the 'Done' column are locked. Dragging them triggers a custom React toast warning.",
      icon: ShieldCheck,
    },
    {
      title: "Trello-Style Responsive Layout",
      description: "Columns expand vertically with content, while the board level scrolls horizontally to fit a flexible, professional viewport.",
      icon: Layers,
    },
    {
      title: "Unified Dark & Light Themes",
      description: "System-integrated layout with persistent dark mode support, using tailwind custom variables and smooth CSS transitions.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/15 border-none">
                  Day 3 Project
                </Badge>
                <Badge variant="success">Completed</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                TaskFlow Manager
              </h1>
              <p className="mt-2 text-muted-foreground max-w-xl">
                A premium, collaborative workspace dashboard bringing standard kanban features together under a unified Laravel & Inertia ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Button asChild variant="outline">
                <a
                  href="https://github.com/sauravkarena/task-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub Repository
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Project Showcasing Banner */}
        <GlassCard className="overflow-hidden p-0 mb-12 border-white/5 relative aspect-video">
          <Image
            src="/images/projects/tasks.png"
            alt="TaskFlow Dashboard Screenshot"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        </GlassCard>

        {/* Project Info & Spec Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          
          {/* Main Info Column */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Folder className="w-5 h-5 text-indigo-400" />
                Project In-depth Details
              </h2>
              <div className="text-muted-foreground text-sm space-y-4 leading-relaxed">
                <p>
                  TaskFlow Manager was built as part of the <strong>30-Day Full-Stack Challenge</strong> to demonstrate modern full-stack workflows using Laravel as a robust API and React as an interactive state management system.
                </p>
                <p>
                  Instead of standard blade files, this project leverages <strong>Inertia.js</strong> to map client-side React page components directly to server-side controller responses. This creates a Single Page Application (SPA) experience without requiring manual API architectures or losing standard backend session capabilities.
                </p>
                <p>
                  The sidebar, user preferences, and forms are fully modular, with performance modifications like component memoization to ensure high rendering efficiency during drag events.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                Core Features
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <GlassCard key={i} className="p-5 flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>

          {/* Details Sidebar Column */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                Challenge Log
              </h3>
              <div className="text-sm space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">Timeline:</span>
                  <span className="font-medium">Day 3 Project</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-emerald-400 font-medium">Completed</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">Database:</span>
                  <span className="font-medium">MySQL (Laragon)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Client:</span>
                  <span className="font-medium">Inertia React</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border-indigo-500/10">
              <h3 className="font-bold text-sm mb-2 flex items-center gap-1">
                <span>📹</span> Walkthrough
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                No local live deployment is available for this project. Check out the full source code and setup steps in the repository below.
              </p>
              <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold">
                <a
                  href="https://github.com/sauravkarena/task-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub Repository
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
