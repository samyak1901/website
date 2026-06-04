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
      "Develop backend services, data platforms, and applied AI systems for biomedical research, bioinformatics automation, and public-health surveillance.",
    highlights: [
      "Built a genomic cohort-builder platform with dynamic faceted filtering, real-time cohort summaries, distribution analytics, saved cohorts, and streaming exports.",
      "Built a multi-agent AI assistant for bioinformatics research with sub-agent delegation, parallel execution, tool orchestration, permission controls, and run-level auditability.",
      "Designed cross-session memory and context-management capabilities including durable fact extraction, relevance-based memory retrieval, and automatic context compaction.",
      "Designed a syndromic surveillance anomaly-detection engine using Z-score and EWMA models, adaptive thresholds, confidence scoring, demographic stratification, and geographic roll-up.",
      "Delivered secure multi-tenant REST APIs, asynchronous processing pipelines, and service-to-service integrations.",
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
      "Progressed from Junior Data Analyst to Data Engineer, delivering data engineering, analytics, and automation solutions for enterprise clients and internal data products.",
    highlights: [
      "Built and maintained data pipelines that transformed raw, multi-source data into reliable analytical datasets.",
      "Developed SQL data models, stored procedures, and reporting layers for customer analytics and segmentation.",
      "Analysed large customer and behavioural datasets and built dashboards and visualisations for technical and non-technical stakeholders.",
      "Supported ML and analytics workflows through data preparation, feature engineering, validation, and performance analysis.",
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
      "Developed machine-learning models for predictive modelling research into magnesium alloys with optimal mechanical properties.",
    highlights: [
      "Supported research into lightweight vehicle materials through applied machine-learning and predictive-modelling workflows.",
    ],
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
    items: ["Python", "TypeScript", "SQL", "JavaScript", "Rust"],
  },
  {
    category: "AI & ML",
    items: [
      "LLM agents",
      "Tool orchestration",
      "Multi-agent systems",
      "Semantic memory / retrieval",
      "Anomaly detection",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "FastAPI",
      "Elysia",
      "REST microservices",
      "Pydantic",
      "SQLAlchemy",
      "Drizzle ORM",
    ],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "ClickHouse", "Redis", "pandas", "NumPy"],
  },
  {
    category: "Platform & Security",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Celery",
      "RabbitMQ",
      "Keycloak",
      "OPA",
    ],
  },
  {
    category: "BI & Visualisation",
    items: ["Microsoft Power BI", "Tableau"],
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
    title: "Dinner Decider",
    description:
      "A self-hosted household meal-planning app that helps families or roommates decide what to cook. It combines Gemini-powered dinner suggestions, dietary-aware fallbacks, voting, meal history, favourites, manual recipes, a weekly plan, and generated shopping lists.",
    technologies: [
      "Python",
      "FastAPI",
      "Google ADK",
      "React",
      "TypeScript",
      "SQLite",
      "Alembic",
    ],
    github: "https://github.com/samyak1901/dinner-decider",
    impact: "Practical household planning",
    image:
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Dinner table with shared food representing household meal planning",
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
