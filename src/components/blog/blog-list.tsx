"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, type Category } from "@/lib/categories";
import type { PostMeta } from "@/lib/posts";

type FilterKey = "all" | Category;

export function BlogList({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered =
    active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter pills */}
      <div className="mt-10 flex flex-wrap gap-2">
        {(Object.keys(CATEGORIES) as FilterKey[]).map((key) => {
          const cat = CATEGORIES[key];
          const isActive = active === key;

          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-(--color-foreground) text-white"
                  : "bg-(--color-surface) text-(--color-muted) hover:bg-(--color-border)"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Posts */}
      <div className="mt-12 space-y-12">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-(--color-muted)"
            >
              No posts in this category yet. Stay tuned!
            </motion.p>
          )}
          {filtered.map((post) => (
            <motion.article
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-(--color-muted)">
                    {post.date}
                  </span>
                  <CategoryBadge category={post.category} />
                </div>
                <h2 className="mt-1 font-(family-name:--font-heading) text-xl font-semibold transition-colors group-hover:text-(--color-accent)">
                  {post.title}
                </h2>
                <p className="mt-2 leading-relaxed text-(--color-muted)">
                  {post.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-(--color-surface) px-3 py-1 text-xs font-medium text-(--color-muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function CategoryBadge({ category }: { category: Category }) {
  const config = CATEGORIES[category];
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${config.color}`}>
      {config.label}
    </span>
  );
}
