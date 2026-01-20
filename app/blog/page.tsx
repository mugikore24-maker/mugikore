import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/blog-db";

export const metadata: Metadata = {
  title: "Blog - UTokyo Bakers' Lab",
  description: "パン研究会の活動報告、イベント情報、パン文化に関する記事",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header className="bg-beige-50 border-b border-brown-300 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brown-900 text-center mb-4">
            Blog
          </h1>
          <p className="text-center text-xl text-brown-700 mb-6">
            活動報告とパン文化に関する記事
          </p>
          <div className="flex justify-center">
            <Link
              href="/blog/en"
              className="text-brown-600 hover:text-brown-900 transition-colors font-medium"
            >
              English
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-brown-700">
              記事はまだありません。近日公開予定です。
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className={index !== 0 ? "pt-12 border-t border-brown-300" : ""}
              >
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-900 mb-3 group-hover:text-brown-700 transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <div className="flex items-center gap-4 text-sm text-brown-600 mb-4">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>

                <p className="text-lg text-brown-800 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-brown-600 font-medium hover:text-brown-900 transition-colors"
                >
                  続きを読む →
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
