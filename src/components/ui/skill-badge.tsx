"use client";

import { motion } from "framer-motion";

export function SkillBadge({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="rounded-lg border border-(--color-border) px-4 py-2 text-sm font-medium transition-colors hover:border-(--color-muted) hover:bg-(--color-surface)"
    >
      {name}
    </motion.span>
  );
}
