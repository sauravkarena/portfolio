export type SkillCategory = "frontend" | "backend" | "database" | "tools";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  localDetailPath?: string;
  category: "laravel" | "react" | "nextjs" | "python" | "other";
  featured?: boolean;
  isUpcoming?: boolean;
}

export interface ChallengeDay {
  day: number;
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  description?: string;
  demo?: string;
  github?: string;
  linkedin?: string;
  screenshot?: string;
}

export interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
  username: string;
  avatarUrl: string;
  bio: string | null;
}
