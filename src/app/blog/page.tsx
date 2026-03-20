import { getAllPosts } from "@/lib/posts";
import { BlogList } from "@/components/blog/blog-list";

export const metadata = {
  title: "Blog — Samyak",
  description:
    "Thoughts on software development, football, investments, and more.",
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
          Thoughts on tech, football, and investments.
        </p>

        <BlogList posts={posts} />
      </div>
    </section>
  );
}
