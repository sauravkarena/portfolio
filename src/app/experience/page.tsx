import { ExperienceSection } from "@/components/sections/experience";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Experience",
  description:
    "Professional experience timeline — roles, companies, and key responsibilities.",
  path: "/experience",
});

export default function ExperiencePage() {
  return <ExperienceSection />;
}
