"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl border border-(--color-border) p-6 transition-all hover:border-(--color-muted) hover:shadow-sm"
    >
      <h3 className="font-(family-name:--font-heading) text-xl font-semibold">
        {project.title}
      </h3>
      <p className="mt-2 text-(--color-muted) leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-(--color-surface) px-3 py-1 text-xs font-medium text-(--color-muted)"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-(--color-foreground) underline decoration-(--color-border) underline-offset-4 transition-colors hover:decoration-(--color-foreground)"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-(--color-foreground) underline decoration-(--color-border) underline-offset-4 transition-colors hover:decoration-(--color-foreground)"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
