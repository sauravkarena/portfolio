export const SITE = {
  name: "Saurav",
  title: "Saurav — Full-Stack Developer",
  description:
    "Premium developer portfolio showcasing full-stack projects, experience, and the 30-Day Full-Stack Challenge.",
  url: "https://portfolio-delta-ebon-6vr2wraj9d.vercel.app",
  email: "saurav.karena@gmail.com",
  domain: "portfolio-delta-ebon-6vr2wraj9d.vercel.app",
} as const;

export const SOCIAL = {
  github: "https://github.com/sauravkarena",
  linkedin: "https://linkedin.com/in/sauravkarena",
  instagram: "https://instagram.com/sauravkarena",
  twitter: "https://twitter.com/sauravkarena",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/challenge", label: "30-Day Challenge" },
  { href: "/contact", label: "Contact" },
] as const;
