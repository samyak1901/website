export const profile = {
  name: "Samyak Jain",
  role: "Software & AI Developer",
  location: "Canberra, ACT, Australia",
  availability: "Open to relevant software and AI opportunities",
  email: "samyak1901@gmail.com",
  resumeUrl: "#",
  summary:
    "Software and AI Developer with an Honours degree in Advanced Computing, experienced across backend engineering, data platforms, and applied AI. I design production services, data pipelines, and AI-driven tools for biomedical research, public-health surveillance, and enterprise analytics.",
};

export const socialLinks = [
  { label: "LinkedIn", value: "samyak-jain", href: "https://linkedin.com/in/samyak-jain" },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "Add GitHub URL", href: "#" },
];

export const siteConfig = {
  name: profile.name,
  title: profile.role,
  description: profile.summary,
  email: profile.email,
  links: {
    github: socialLinks[2].href,
    linkedin: socialLinks[0].href,
    twitter: "#",
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
      "Built Lumi, a multi-agent AI assistant for bioinformatics research with sub-agent delegation, parallel execution, tool orchestration, permission controls, and run-level auditability.",
      "Designed cross-session memory and context-management capabilities including durable fact extraction, relevance-based memory retrieval, and automatic context compaction.",
      "Designed a syndromic surveillance anomaly-detection engine using Z-score and EWMA models, adaptive thresholds, confidence scoring, demographic stratification, and geographic roll-up.",
      "Delivered secure multi-tenant REST APIs, asynchronous processing pipelines, and service-to-service integrations.",
    ],
    technologies: ["Python", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
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
    technologies: ["SQL", "Python", "Power BI", "Tableau", "Data Modelling", "Analytics"],
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
    technologies: ["Machine Learning", "Predictive Modelling", "Python", "Research"],
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
    institution: "International Centre for Applied Sciences - Manipal University",
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
    items: ["LLM agents", "Tool orchestration", "Multi-agent systems", "Semantic memory / retrieval", "Anomaly detection"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Elysia", "REST microservices", "Pydantic", "SQLAlchemy", "Drizzle ORM"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "ClickHouse", "Redis", "pandas", "NumPy"],
  },
  {
    category: "Platform & Security",
    items: ["Docker", "Kubernetes", "AWS", "Celery", "RabbitMQ", "Keycloak", "OPA"],
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
}

export const projects: Project[] = [
  {
    title: "Genomic Cohort Builder",
    description:
      "A research platform for creating, refining, saving, analysing, and exporting study cohorts from large-scale sequencing metadata. Includes dynamic faceted filtering, real-time summaries, distribution analytics, and streaming exports.",
    technologies: ["TypeScript", "Python", "REST APIs", "PostgreSQL", "Analytics"],
    github: "#",
    live: "#",
    impact: "Biomedical research discovery",
  },
  {
    title: "Lumi Multi-Agent AI Assistant",
    description:
      "A multi-agent AI assistant for bioinformatics research with sub-agent delegation, parallel execution, tool orchestration, permission controls, full run-level auditability, and cross-session memory.",
    technologies: ["LLM Agents", "Vercel AI SDK", "Tool Orchestration", "Semantic Memory", "TypeScript"],
    github: "#",
    live: "#",
    impact: "AI-assisted research automation",
  },
  {
    title: "Syndromic Surveillance Anomaly Detection",
    description:
      "An anomaly-detection engine for public-health surveillance using Z-score and EWMA models, adaptive thresholds, confidence scoring, demographic stratification, and geographic roll-up.",
    technologies: ["Python", "Anomaly Detection", "EWMA", "Z-score", "Data Pipelines"],
    github: "#",
    live: "#",
    impact: "Public-health intelligence",
  },
];

export const aboutText = [profile.summary];

export const skillCategories = technicalSkills.map((skillGroup) => ({
  name: skillGroup.category,
  skills: skillGroup.items,
}));
