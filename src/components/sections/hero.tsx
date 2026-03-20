"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-widest text-(--color-muted) uppercase"
        >
          {siteConfig.title}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 font-(family-name:--font-heading) text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-(--color-accent)">{siteConfig.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-(--color-muted)"
        >
          {siteConfig.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-(--color-foreground) px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-(--color-border) px-6 py-3 text-sm font-medium transition-colors hover:border-(--color-muted)"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
