import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/blog-db";

// Use dynamic rendering since blog posts are fetched from database
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog - UTokyo Bakers' Lab",
  description: "Activity reports, event information, and articles about bread culture",
};

export default async function BlogPageEN() {
  const posts = await getAllPosts("en");

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header className="bg-beige-50 border-b border-brown-300 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brown-900 text-center mb-4">
            Blog
          </h1>
          <p className="text-center text-xl text-brown-700 mb-6">
            Activity reports and articles about bread culture
          </p>
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="text-brown-600 hover:text-brown-900 transition-colors font-medium"
            >
              日本語
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-brown-700">
              No articles yet. Coming soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/en/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-brown-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="relative h-48 w-full overflow-hidden"
                  style={{
                    backgroundImage: post.heroImage
                      ? `linear-gradient(135deg, rgba(0,0,0,0.45), rgba(0,0,0,0.2)), url(${post.heroImage})`
                      : "linear-gradient(135deg, #F5F1E8, #E8DFD6)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-black/30 to-transparent p-4">
                    <h2 className="font-display text-2xl font-bold text-white group-hover:text-beige-50">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-beige-100/90">
                      <time dateTime={post.date}>{formatDate(post.date, "en")}</time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 p-4">
                  <p className="hidden text-brown-800 md:block">{post.excerpt}</p>
                  <span className="inline-block text-brown-600 font-medium group-hover:text-brown-800">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
