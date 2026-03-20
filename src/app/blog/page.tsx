import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Samyak",
  description: "Thoughts on software development, technology, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-(family-name:--font-heading) text-4xl font-bold tracking-tight">
          Blog
        </h1>
        <p className="mt-3 text-lg text-(--color-muted)">
          Thoughts on software, technology, and building things.
        </p>

        <div className="mt-16 space-y-12">
          {posts.length === 0 && (
            <p className="text-(--color-muted)">No posts yet. Stay tuned!</p>
          )}
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <p className="text-sm text-(--color-muted)">{post.date}</p>
                <h2 className="mt-1 font-(family-name:--font-heading) text-xl font-semibold group-hover:text-(--color-accent) transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-(--color-muted) leading-relaxed">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
