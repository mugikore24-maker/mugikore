import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog-db";
import ReactMarkdown from "react-markdown";

// Use dynamic rendering since blog posts are fetched from database
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - UTokyo Bakers' Lab`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getAllPosts();
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex !== -1 && currentIndex < posts.length - 1
      ? posts[currentIndex + 1]
      : null;

  const recommendations = posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Back to Blog + Hero Card */}
      <div className="border-b border-brown-300 bg-beige-50 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 md:px-8">
          <Link
            href="/blog"
            className="text-brown-600 hover:text-brown-900 transition-colors"
          >
            ← ブログ一覧に戻る
          </Link>
          <Link
            href={`/blog/en/${slug}`}
            className="text-brown-600 hover:text-brown-900 transition-colors text-sm"
          >
            English
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-10 pt-8 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brown-900 via-brown-800 to-brown-700 shadow-2xl">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: post.heroImage
                ? `linear-gradient(135deg, rgba(28,22,16,0.70), rgba(28,22,16,0.55)), url(${post.heroImage})`
                : "linear-gradient(135deg, #2C2419, #3A3028)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-4 p-8 md:p-10">
            <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-beige-50">
              Field Notes
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-beige-100/90">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-6 pb-16 md:px-8 md:pb-20">
        <div className="prose-blog">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mt-12 mb-6">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-display text-xl md:text-2xl font-semibold text-brown-900 mt-8 mb-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-lg text-brown-800 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc ml-8 mb-6 space-y-2 text-lg text-brown-800">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal ml-8 mb-6 space-y-2 text-lg text-brown-800">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-brown-500 pl-6 italic text-brown-700 my-8">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-brown-600 underline hover:text-brown-900 transition-colors"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href?.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {children}
                </a>
              ),
              hr: () => <hr className="border-brown-300 my-12" />,
              strong: ({ children }) => (
                <strong className="font-semibold text-brown-900">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-brown-700">{children}</em>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Navigation */}
      <div className="border-t border-brown-300 bg-beige-50">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 justify-start">
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="text-brown-700 underline transition hover:text-brown-900"
              >
                ← 前の記事
              </Link>
            ) : (
              <span className="text-brown-400">← 前の記事</span>
            )}
          </div>
          <div className="flex flex-1 justify-end text-right">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="text-brown-700 underline transition hover:text-brown-900"
              >
                次の記事 →
              </Link>
            ) : (
              <span className="text-brown-400">次の記事 →</span>
            )}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <section className="bg-beige-50 pb-16 pt-2">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <h3 className="mb-6 text-lg font-semibold text-brown-900">
              こちらもおすすめ
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {recommendations.map((rec) => (
                <Link
                  key={rec.slug}
                  href={`/blog/${rec.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-brown-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="relative h-40 w-full overflow-hidden"
                    style={{
                      backgroundImage: rec.heroImage
                        ? `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${rec.heroImage})`
                        : "linear-gradient(135deg, #F5F1E8, #E8DFD6)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div className="space-y-2 p-4">
                    <h4 className="font-semibold text-brown-900 group-hover:text-brown-700">
                      {rec.title}
                    </h4>
                    <p className="hidden text-sm text-brown-700 md:block">
                      {rec.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
