"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="section-kicker justify-center">Projects</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black tracking-tight text-(--color-foreground) sm:text-5xl">
            Selected work with clear purpose and polished execution.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="portfolio-card group overflow-hidden"
            >
              <div className="grid gap-0 lg:grid-cols-[1fr_0.72fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-(--color-accent)">0{index + 1}</span>
                    <p className="text-sm font-medium text-(--color-accent)">{project.impact}</p>
                  </div>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-(--color-foreground)">{project.title}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-(--color-muted)">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="tag-pill">
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.live !== "#" || project.github !== "#" ? (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.live && project.live !== "#" && <a href={project.live} className="btn-secondary">Live Preview</a>}
                      {project.github && project.github !== "#" && <a href={project.github} className="btn-ghost">GitHub</a>}
                    </div>
                  ) : (
                    <p className="mt-7 text-sm text-(--color-muted)">Links can be added when public demos or repositories are available.</p>
                  )}
                </div>
                <div className="border-t border-(--color-border) p-6 lg:border-t-0 lg:border-l">
                  <div className="flex h-full min-h-52 flex-col justify-between rounded-xl border border-(--color-border) bg-(--color-background) p-5">
                    <p className="text-sm text-(--color-muted)">Project preview</p>
                    <div className="mt-10 space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-(--color-foreground)/15" />
                      <div className="h-3 w-1/2 rounded-full bg-(--color-foreground)/10" />
                      <div className="h-24 rounded-lg border border-(--color-border) bg-(--color-card)" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
