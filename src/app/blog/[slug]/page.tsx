import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { CATEGORIES } from "@/lib/categories";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Samyak`,
    description: post.meta.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <section className="min-h-screen px-6 pt-32 pb-24">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-(--color-muted) transition-colors hover:text-(--color-foreground)"
        >
          &larr; Back to blog
        </Link>

        <header className="mt-8 mb-12">
          <div className="flex items-center gap-3">
            <p className="text-sm text-(--color-muted)">{post.meta.date}</p>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${CATEGORIES[post.meta.category].color}`}
            >
              {CATEGORIES[post.meta.category].label}
            </span>
          </div>
          <h1 className="mt-2 font-(family-name:--font-heading) text-4xl font-bold tracking-tight">
            {post.meta.title}
          </h1>
          <p className="mt-3 text-lg text-(--color-muted)">
            {post.meta.description}
          </p>
        </header>

        <div className="prose prose-neutral max-w-none prose-headings:font-(family-name:--font-heading) prose-headings:tracking-tight prose-a:text-(--color-accent) prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </section>
  );
}
