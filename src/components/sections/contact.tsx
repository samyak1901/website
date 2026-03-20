"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together?"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block rounded-lg bg-(--color-foreground) px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Say Hello
          </a>
          <div className="mt-8 flex justify-center gap-8">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-muted) transition-colors hover:text-(--color-foreground)"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-muted) transition-colors hover:text-(--color-foreground)"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-muted) transition-colors hover:text-(--color-foreground)"
            >
              X / Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
