"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="section-kicker">Education</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-(--color-foreground) sm:text-5xl">
            Academic foundation and focused learning.
          </h2>
          <p className="mt-4 text-(--color-muted)">
            Keep this concise and outcome-oriented once the final details are available.
          </p>
        </motion.div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={`${item.institution}-${item.degree}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="portfolio-card p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-(--color-foreground)">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-(--color-accent)">
                    {item.institution}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-(--color-border) px-3 py-1 text-xs text-(--color-muted)">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 leading-relaxed text-(--color-muted)">
                {item.description}
              </p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-(--color-muted)">
                {item.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
