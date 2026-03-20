export const siteConfig = {
  name: "Samyak",
  title: "Software Developer",
  description:
    "I build thoughtful, performant software with a focus on clean architecture and great user experiences.",
  email: "hello@samyak.dev",
  links: {
    github: "https://github.com/samyak",
    linkedin: "https://linkedin.com/in/samyak",
    twitter: "https://x.com/samyak",
  },
};

export const aboutText = [
  "I'm a software developer who loves building things that live on the internet. I care deeply about clean code, thoughtful architecture, and creating experiences that feel effortless to use.",
  "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing about what I've learned.",
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["TypeScript", "Python", "Go", "Rust", "JavaScript"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "PostgreSQL", "Redis", "REST APIs", "GraphQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Linux", "CI/CD", "AWS"],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application for managing workflows with real-time collaboration features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    github: "https://github.com/samyak/project-alpha",
    live: "https://project-alpha.vercel.app",
  },
  {
    title: "CLI Toolkit",
    description:
      "A developer-friendly CLI tool for automating repetitive tasks and scaffolding projects.",
    tags: ["Go", "Cobra", "REST API"],
    github: "https://github.com/samyak/cli-toolkit",
  },
  {
    title: "Design System",
    description:
      "A component library and design system built for consistency across multiple applications.",
    tags: ["React", "Storybook", "Tailwind CSS", "Figma"],
    github: "https://github.com/samyak/design-system",
    live: "https://design-system-demo.vercel.app",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Senior Software Developer",
    company: "Tech Corp",
    period: "2024 — Present",
    description:
      "Leading frontend architecture and building scalable web applications serving thousands of users.",
  },
  {
    role: "Software Developer",
    company: "Startup Inc",
    period: "2022 — 2024",
    description:
      "Built core product features from the ground up, working across the full stack with React and Node.js.",
  },
  {
    role: "Junior Developer",
    company: "Agency Co",
    period: "2020 — 2022",
    description:
      "Developed client-facing websites and internal tools, gaining experience across diverse tech stacks.",
  },
];
