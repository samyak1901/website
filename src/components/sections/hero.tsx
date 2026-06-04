"use client";

import { motion } from "framer-motion";
import { profile, socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden px-6 pt-36 pb-24 text-center"
    >
      <div className="hero-grid absolute inset-0" />

      <div className="relative mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-fit rounded-full border border-(--color-border) bg-(--color-card) px-4 py-2 text-sm text-(--color-muted)"
        >
          {profile.availability}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-(--color-muted) sm:text-xl"
        >
          <span className="font-semibold text-(--color-foreground)">
            {profile.role}
          </span>{" "}
          based in {profile.location}. {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a href={`mailto:${profile.email}`} className="btn-primary">
            Contact Me
          </a>
          <a href={profile.resumeUrl} download className="btn-secondary">
            Download Resume
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-(--color-muted)"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="link-glow"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
