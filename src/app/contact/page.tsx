import { ContactSection } from "@/components/sections/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Saurav Karena for collaborations, projects, or just to say hello.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}
