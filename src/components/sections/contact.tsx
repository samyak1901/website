"use client";

import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="portfolio-card overflow-hidden p-8 text-center sm:p-12"
        >
          <p className="section-kicker justify-center">Contact</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight text-(--color-foreground) sm:text-6xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-(--color-muted)">
            Reach out for opportunities, collaborations, or a quick conversation about software, products, and systems.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Send Email
            </a>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {socialLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="portfolio-card block p-5 transition-colors hover:border-(--color-accent)"
            >
              <p className="text-sm text-(--color-muted)">{contact.label}</p>
              <p className="mt-2 font-medium text-(--color-foreground)">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
