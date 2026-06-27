import type { ChallengeDay, Experience, Project, Skill } from "@/types";

export const profile = {
  name: "Saurav",
  role: "Full-Stack Developer",
  tagline: "Building elegant digital experiences with modern web technologies.",
  location: "India",
  experienceYears: "3+",
  avatar: "/images/profile.jpeg",
  resume: "/saurav resume.pdf",
  typingRoles: [
    "Full-Stack Developer",
    "React Specialist",
    "Next.js Enthusiast",
    "Problem Solver",
  ],
  about: {
    introduction:
      "I'm a passionate full-stack developer with a love for crafting clean, performant, and user-centric applications. I specialize in the React ecosystem and Laravel, with a growing focus on modern tooling like Next.js and Python.",
    education: {
      degree: "Bachelor of Science in Information Technology",
      institution: "Saurashtra University",
      year: "2019",
    },
    journey: [
      "Started coding with PHP and web fundamentals",
      "Transitioned to Laravel for robust backend systems",
      "Mastered React and modern frontend architecture",
      "Currently exploring Next.js, AI integrations, and cloud-native apps",
    ],
    currentlyWorkingOn:
      "The 30-Day Full-Stack Challenge — building one premium project every day to sharpen skills and grow my portfolio.",
  },
};

export const skills: Skill[] = [
  { name: "React", level: 92, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 93, category: "frontend" },
  { name: "Laravel", level: 88, category: "backend" },
  { name: "PHP", level: 85, category: "backend" },
  { name: "Python", level: 78, category: "backend" },
  { name: "REST API", level: 90, category: "backend" },
  { name: "PostgreSQL", level: 82, category: "database" },
  { name: "MySQL", level: 88, category: "database" },
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 92, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 88, category: "tools" },
];

export const skillCategories = [
  { id: "frontend" as const, label: "Frontend", color: "from-blue-500 to-cyan-400" },
  { id: "backend" as const, label: "Backend", color: "from-violet-500 to-purple-400" },
  { id: "database" as const, label: "Database", color: "from-emerald-500 to-teal-400" },
  { id: "tools" as const, label: "Tools", color: "from-amber-500 to-orange-400" },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "briskbrainteck",
    role: "Web Developer",
    duration: "3 Years",
    location: "Remote",
    responsibilities: [
      "Responsible for end-to-end web development processes, from scratch design to full production deployment.",
      "Designed and implemented modern user interfaces and robust server-side application logic.",
      "Ensured high performance, security, and scalability of applications.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Modern Developer Portfolio",
    description:
      "A premium, fully responsive portfolio built with Next.js 15, Framer Motion, and Tailwind CSS — the centerpiece of the 30-Day Challenge.",
    image: "/images/projects/portfolio.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sauravkarena/portfolio",
    liveDemo: "https://portfolio-delta-ebon-6vr2wraj9d.vercel.app",
    category: "nextjs",
    featured: true,
  },
  {
    id: "proj-2",
    title: "SaaS Landing Page",
    description:
      "A conversion-focused SaaS landing page with responsive layouts, modern UI/UX, pricing tables, testimonials, and smooth scroll animations.",
    image: "/images/projects/ecommerce.svg",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: "nextjs",
    featured: true,
    isUpcoming: true,
  },
  {
    id: "proj-3",
    title: "Task Manager",
    description:
      "A collaborative workflow application featuring authentication, status tracking, task priorities, due dates, and full CRUD operations.",
    image: "/images/projects/tasks.svg",
    techStack: ["React", "Laravel", "PostgreSQL", "REST API"],
    category: "laravel",
    featured: true,
    isUpcoming: true,
  },
  {
    id: "proj-4",
    title: "Weather Dashboard",
    description:
      "A live weather forecast application displaying current temperature, daily forecast, air quality indices, and geolocation services.",
    image: "/images/projects/analytics.svg",
    techStack: ["React", "FastAPI", "Python", "Third-party APIs"],
    category: "python",
    isUpcoming: true,
  },
  {
    id: "proj-5",
    title: "Expense Tracker",
    description:
      "A financial planning tool for tracking incomes and expenses with categories, monthly visualization charts, and CSV exporting.",
    image: "/images/projects/blog.svg",
    techStack: ["React", "Laravel", "PostgreSQL", "Chart.js"],
    category: "laravel",
    isUpcoming: true,
  },
  {
    id: "proj-6",
    title: "AI Chat UI",
    description:
      "An interactive chat interface with streaming responses, historical logging, and markdown rendering powered by local AI APIs.",
    image: "/images/projects/inventory.svg",
    techStack: ["React", "FastAPI", "Python", "AI Integration"],
    category: "python",
    isUpcoming: true,
  },
];

export const challengeDays: ChallengeDay[] = [
  {
    day: 1,
    title: "Modern Portfolio",
    status: "completed",
    description:
      "Premium developer portfolio with animated hero, glassmorphism, dark mode, and full SEO setup.",
    demo: "https://portfolio-delta-ebon-6vr2wraj9d.vercel.app",
    github: "https://github.com/sauravkarena/portfolio",
    linkedin: "https://linkedin.com/in/sauravkarena",
    screenshot: "/images/projects/portfolio.png",
  },
  {
    day: 2,
    title: "Coming Tomorrow...",
    status: "upcoming",
    description: "Stay tuned for the next project in the 30-Day Full-Stack Challenge.",
  },
  ...Array.from({ length: 28 }, (_, i) => ({
    day: i + 3,
    title: "Coming Soon",
    status: "upcoming" as const,
    description: `Day ${i + 3} project will be revealed soon.`,
  })),
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "laravel", label: "Laravel" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "python", label: "Python" },
] as const;
