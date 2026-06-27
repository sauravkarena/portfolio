import type { ChallengeDay, Experience, Project, Skill } from "@/types";

export const profile = {
  name: "Saurav Karena",
  role: "Full-Stack Developer",
  tagline: "Building elegant digital experiences with modern web technologies.",
  location: "India",
  experienceYears: "3+",
  avatar: "/images/profile.svg",
  resume: "/resume.pdf",
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
      degree: "Bachelor of Computer Applications",
      institution: "Your University",
      year: "2021",
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
    company: "Tech Solutions Pvt. Ltd.",
    role: "Full-Stack Developer",
    duration: "2023 — Present",
    location: "Remote",
    responsibilities: [
      "Built and maintained Laravel + React applications serving 10K+ users",
      "Designed RESTful APIs and optimized database queries for performance",
      "Led frontend migration to Next.js with improved Core Web Vitals",
      "Collaborated with cross-functional teams using Agile methodologies",
    ],
  },
  {
    id: "exp-2",
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    duration: "2021 — 2023",
    location: "Ahmedabad, India",
    responsibilities: [
      "Developed responsive React interfaces for client projects",
      "Implemented Tailwind CSS design systems across multiple products",
      "Integrated third-party APIs and payment gateways",
      "Mentored junior developers on React best practices",
    ],
  },
  {
    id: "exp-3",
    company: "Freelance",
    role: "Web Developer",
    duration: "2020 — 2021",
    location: "Remote",
    responsibilities: [
      "Delivered custom WordPress and PHP websites for small businesses",
      "Managed client communication and project timelines",
      "Built e-commerce solutions with WooCommerce",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Modern Developer Portfolio",
    description:
      "A premium, fully responsive portfolio built with Next.js 15, Framer Motion, and Tailwind CSS — the centerpiece of the 30-Day Challenge.",
    image: "/images/projects/portfolio.svg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sauravkarena/portfolio",
    liveDemo: "https://sauravkarena.dev",
    category: "nextjs",
    featured: true,
  },
  {
    id: "proj-2",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with Laravel backend, React frontend, payment integration, and admin dashboard.",
    image: "/images/projects/ecommerce.svg",
    techStack: ["Laravel", "React", "MySQL", "Stripe"],
    github: "https://github.com/sauravkarena/ecommerce",
    liveDemo: "https://demo.example.com",
    category: "laravel",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Task Management App",
    description:
      "Collaborative task board with real-time updates, drag-and-drop, and team workspaces built with React.",
    image: "/images/projects/tasks.svg",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/sauravkarena/task-app",
    category: "react",
    featured: true,
  },
  {
    id: "proj-4",
    title: "API Analytics Dashboard",
    description:
      "Python-powered analytics dashboard with REST API monitoring, charts, and alerting system.",
    image: "/images/projects/analytics.svg",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Chart.js"],
    github: "https://github.com/sauravkarena/analytics",
    category: "python",
  },
  {
    id: "proj-5",
    title: "Blog CMS",
    description:
      "Headless CMS with Next.js frontend and Laravel API for content management and SEO optimization.",
    image: "/images/projects/blog.svg",
    techStack: ["Next.js", "Laravel", "PostgreSQL"],
    github: "https://github.com/sauravkarena/blog-cms",
    liveDemo: "https://blog.example.com",
    category: "nextjs",
  },
  {
    id: "proj-6",
    title: "Inventory System",
    description:
      "Enterprise inventory management with barcode scanning, reporting, and multi-warehouse support.",
    image: "/images/projects/inventory.svg",
    techStack: ["Laravel", "Vue.js", "MySQL"],
    github: "https://github.com/sauravkarena/inventory",
    category: "laravel",
  },
];

export const challengeDays: ChallengeDay[] = [
  {
    day: 1,
    title: "Modern Portfolio",
    status: "completed",
    description:
      "Premium developer portfolio with animated hero, glassmorphism, dark mode, and full SEO setup.",
    demo: "https://sauravkarena.dev",
    github: "https://github.com/sauravkarena/portfolio",
    linkedin: "https://linkedin.com/in/sauravkarena",
    screenshot: "/images/projects/portfolio.svg",
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
