import { AboutSection } from "@/components/sections/about";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Saurav Karena — full-stack developer with 3+ years of experience building modern web applications.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutSection />;
}
