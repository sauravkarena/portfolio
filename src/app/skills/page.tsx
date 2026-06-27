import { SkillsSection } from "@/components/sections/skills";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Skills",
  description:
    "Technical skills in React, Next.js, Laravel, Python, PostgreSQL, and modern developer tools.",
  path: "/skills",
});

export default function SkillsPage() {
  return <SkillsSection />;
}
