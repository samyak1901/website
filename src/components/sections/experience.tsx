"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="section-kicker">Work Experience</p>
          </div>
          <p className="max-w-md text-(--color-muted)">
            Experience across applied AI, backend services, data engineering,
            analytics, and research software.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="portfolio-card p-6 sm:p-7"
            >
              <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                <div>
                  <p className="w-fit rounded-full border border-(--color-border) px-3 py-1 text-xs text-(--color-muted)">
                    {experience.period}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-(--color-foreground)">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-(--color-accent)">
                    {experience.company}
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed text-(--color-muted)">
                    {experience.description}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-(--color-muted)">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
