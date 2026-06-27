"use client";

import emailjs from "@emailjs/browser";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { FadeIn } from "@/components/page-transition";
import { GlassCard } from "@/components/glass-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE, SOCIAL } from "@/lib/constants";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" disabled={status === "loading"} className="w-full">
                  <Send className="h-4 w-4" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <p className="text-center text-sm text-emerald-400">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Failed to send. Configure EmailJS env vars or email me directly.
                  </p>
                )}
              </form>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              <GlassCard>
                <h3 className="mb-4 font-semibold">Social Links</h3>
                <div className="space-y-3">
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <LinkedInIcon className="text-accent" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href={SOCIAL.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <GitHubIcon className="text-accent" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <InstagramIcon className="text-accent" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-sm">{SITE.email}</span>
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="border-accent/20 bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  Prefer email? Reach out directly at{" "}
                  <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                    {SITE.email}
                  </a>
                </p>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
