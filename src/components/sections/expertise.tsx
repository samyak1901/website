"use client";

import { motion } from "framer-motion";
import { certifications, technicalSkills } from "@/lib/data";

export function Expertise() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45 }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <p className="section-kicker">Technical Skills</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-(--color-foreground) sm:text-5xl">
              Practical tools across AI, backend, and data systems.
            </h2>
          </div>

          <div className="portfolio-card p-6 sm:p-8">
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              {technicalSkills.map((group) => (
                <div key={group.category}>
                  <h3 className="font-semibold text-(--color-foreground)">{group.category}</h3>
                  <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-(--color-border) pt-6">
              <h3 className="font-semibold text-(--color-foreground)">Certifications</h3>
              <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                {certifications.join(" · ")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
