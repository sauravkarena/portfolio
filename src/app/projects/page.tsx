import { ProjectsSection } from "@/components/sections/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Featured full-stack projects built with React, Next.js, Laravel, and Python.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsSection />;
}
