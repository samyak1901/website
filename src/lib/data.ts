export const profile = {
  name: "Samyak Jain",
  role: "Software & AI Developer",
  location: "Canberra, ACT, Australia",
  availability: "Open to relevant software and AI opportunities",
  email: "samyak1901@gmail.com",
  resumeUrl: "downloads/Resume.pdf",
  summary:
    "An Honours degree in Advanced Computing, experienced across backend engineering, data platforms, and applied AI.",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    value: "samyak-jain-a20623107",
    href: "https://linkedin.com/in/samyak-jain-a20623107",
  },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "GitHub",
    value: "github.com/samyak1901",
    href: "https://github.com/samyak1901",
  },
];

export const siteConfig = {
  name: profile.name,
  title: profile.role,
  description: profile.summary,
  email: profile.email,
  links: {
    github: socialLinks[2].href,
    linkedin: socialLinks[0].href,
  },
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software / AI Developer",
    company: "Pacific Analytics Pty Ltd",
    period: "Dec 2024 - Present",
    description:
      "Build production AI, backend, automation, and data systems across biomedical research, public-health surveillance, and enterprise analytics.",
    highlights: [
      "Led the design and delivery of scalable AI-enabled platforms for production-ready operational workflows.",
      "Developed secure, standards-aligned data platforms for governed analysis across distributed environments.",
      "Architected 'Lumi', a multi-agent AI assistant featuring tool orchestration, memory, and auditable workflows.",
      "Designed scalable data discovery and analytics capabilities for high-volume dataset processing and export.",
      "Delivered distributed workflow and data-processing services with asynchronous execution and API integrations.",
      "Implemented analytical and anomaly-detection pipelines using statistical modelling and adaptive thresholds.",
    ],
    technologies: [
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    role: "Data Engineer / Data Analyst",
    company: "smrtr",
    period: "Jan 2021 - Nov 2024",
    description:
      "Delivered enterprise data engineering and automation solutions, progressing from Analyst to Engineer.",
    highlights: [
      "Built reliable SQL data pipelines and reporting layers for complex analytical datasets.",
      "Analysed behavioural datasets and developed stakeholder dashboards supporting ML data workflows.",
    ],
    technologies: [
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Data Modelling",
      "Analytics",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "The Australian National University",
    period: "Jul 2019 - May 2020",
    description:
      "Developed ML models to predict mechanical properties of magnesium alloys for vehicle research.",
    highlights: [],
    technologies: [
      "Machine Learning",
      "Predictive Modelling",
      "Python",
      "Research",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  details: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Advanced Computing (Honours)",
    institution: "The Australian National University",
    period: "2018 - 2021",
    description:
      "Specialised in Intelligent Systems with coursework across machine learning, data, software engineering, security, and advanced computing research methods.",
    details: [
      "Courses completed include Foundations of Computing, Data Wrangling, Data Mining, Information Theory, Strategic Thinking: Game Theory, Intro to Machine Learning, Document Analysis, Advanced Computing Research Methods, Software Design Methodologies, Intro to Data and Security, Advanced Computing Project, Neural Networks: Deep Learning, Statistical Machine Learning, and Computer Vision.",
    ],
  },
  {
    degree: "Bachelor of Science",
    institution:
      "International Centre for Applied Sciences - Manipal University",
    period: "2016 - 2018",
    description:
      "Completed foundational computer science studies with a research thesis focused on computational alloy design and discovery.",
    details: [
      "Research thesis: Computational Alloy Design and Discovery using Magnesium.",
      "Employed machine-learning models to build a predictive modelling approach for identifying magnesium alloy compositions with desirable mechanical properties for lightweight vehicle materials.",
    ],
  },
];

export const certifications = [
  "AWS - Machine Learning",
  "Analyzing and Visualizing Data with Microsoft Power BI",
];

export const technicalSkills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Rust", "Go"],
  },
  {
    category: "AI & ML",
    items: [
      "LLM agents",
      "Tool orchestration (Vercel AI SDK, CrewAI)",
      "Multi-agent systems (LangGraph)",
      "Frameworks (LangChain, Google ADK)",
      "Prompt engineering",
      "RAG retrieval",
      "Semantic memory",
      "Guardrails",
      "Monitoring",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "FastAPI",
      "Django",
      "REST microservices",
      "Pydantic",
      "SQLAlchemy",
      "Elysia",
      "Drizzle ORM",
    ],
  },
  {
    category: "Data",
    items: [
      "PostgreSQL",
      "ClickHouse",
      "Redis",
      "MongoDB",
      "Parquet",
      "Spark",
      "Hadoop",
    ],
  },
  {
    category: "Platform & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Celery",
      "RabbitMQ",
      "CI/CD",
      "Automated testing",
    ],
  },
  {
    category: "Security",
    items: ["Keycloak", "JWT", "OAuth2", "RBAC", "OPA", "Audit logging"],
  },
  {
    category: "BI & Visualisation",
    items: ["Microsoft Power BI", "Tableau"],
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP"],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  impact: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    title: "Consilium",
    description:
      "A multi-agent LLM platform for equity and crypto research. A team of specialist agents — technical, sentiment, news, and fundamentals analysts — study a ticker with live market data, then debate it bull-vs-bear before a portfolio manager issues a rated Buy/Overweight/Hold/Underweight/Sell decision with full reasoning. Built on LangGraph with a FastAPI backend that streams the agents working live over SSE, a React/Vite frontend with an editable report library, multi-provider LLM support, and a learning loop that scores its own past calls against a benchmark.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "React",
      "TypeScript",
      "Vite",
      "Multi-LLM",
    ],
    github: "https://github.com/samyak1901/research",
    impact: "Multi-agent investment research",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Trading screens with market charts representing a multi-agent research platform",
  },
  {
    title: "Signal Desk",
    description:
      "An AI-powered investment research workspace that turns Substack reading lists, watchlists, and market data into structured research workflows. It includes a FastAPI backend, React frontend, background jobs, streaming job progress, setup checks, and clear handling for Substack cookie authentication.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Gemini",
    ],
    github: "https://github.com/samyak1901/substack",
    impact: "Investment research automation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Analytics dashboard screens representing an investment research workspace",
  },
  {
    title: "The Long Game",
    description:
      "A separate editorial writing site for my notes on investing, compounding, stock research, football, and long-term decision-making. The site keeps all written content in Markdown and presents stock pitches in a clean publication-style layout.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Markdown",
      "GitHub Pages",
      "CSS",
    ],
    github: "https://github.com/samyak1901/the-long-game",
    live: "https://samyak1901.github.io/the-long-game/",
    impact: "Personal writing and research archive",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Notebook and laptop workspace representing long-form writing and research",
  },
];

export const aboutText = [profile.summary];

export const skillCategories = technicalSkills.map((skillGroup) => ({
  name: skillGroup.category,
  skills: skillGroup.items,
}));
