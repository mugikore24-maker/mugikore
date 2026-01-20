import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog-db";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

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
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back to Blog */}
      <div className="border-b border-brown-300 bg-beige-50 py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-8 flex items-center justify-between">
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

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <header className="mb-12">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-brown-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-base text-brown-600 mb-8">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          {post.heroImage && (
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

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

      {/* Back to Blog Footer */}
      <div className="border-t border-brown-300 bg-beige-50 py-8">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <Link
            href="/blog"
            className="inline-block border-2 border-brown-600 text-brown-900 px-8 py-3 text-lg font-medium hover:bg-brown-50 transition-colors"
          >
            ← ブログ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
