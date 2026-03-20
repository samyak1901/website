import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

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

  // Dynamic import of the MDX file
  let MDXContent;
  try {
    MDXContent = (await import(`@/content/posts/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

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
          <p className="text-sm text-(--color-muted)">{post.meta.date}</p>
          <h1 className="mt-2 font-(family-name:--font-heading) text-4xl font-bold tracking-tight">
            {post.meta.title}
          </h1>
          <p className="mt-3 text-lg text-(--color-muted)">
            {post.meta.description}
          </p>
        </header>

        <div className="prose prose-neutral max-w-none prose-headings:font-(family-name:--font-heading) prose-headings:tracking-tight prose-a:text-(--color-accent) prose-a:no-underline hover:prose-a:underline">
          <MDXContent />
        </div>
      </article>
    </section>
  );
}
