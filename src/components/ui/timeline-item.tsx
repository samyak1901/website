"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/lib/data";

export function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute top-2 left-0 h-full w-px bg-(--color-border)" />
      {/* Timeline dot */}
      <div className="absolute top-2 left-0 h-2 w-2 -translate-x-[3.5px] rounded-full bg-(--color-foreground)" />

      <p className="text-sm font-medium text-(--color-muted)">
        {experience.period}
      </p>
      <h3 className="mt-1 font-(family-name:--font-heading) text-lg font-semibold">
        {experience.role}
      </h3>
      <p className="text-(--color-muted)">{experience.company}</p>
      <p className="mt-2 text-(--color-muted) leading-relaxed">
        {experience.description}
      </p>
    </motion.div>
  );
}
