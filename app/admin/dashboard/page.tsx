import Link from "next/link";
import { prisma } from "@/lib/prisma";
import type { BlogPost } from "@prisma/client";

// Use dynamic rendering since this page queries the database
export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const posts: BlogPost[] = await prisma.blogPost.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-brown-900">
          Blog Posts
        </h2>
        <Link
          href="/admin/dashboard/posts/new"
          className="bg-brown-600 text-white px-4 py-2 font-medium hover:bg-brown-700"
        >
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white border border-brown-300 p-8 text-center">
          <p className="text-brown-700">No blog posts yet.</p>
          <Link
            href="/admin/dashboard/posts/new"
            className="text-brown-600 underline mt-2 inline-block"
          >
            Create your first post
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-brown-300">
          <table className="w-full">
            <thead className="border-b border-brown-300 bg-beige-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-brown-900">
                  Title (JA / EN)
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-brown-900">
                  Slug
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-brown-900">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-brown-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-brown-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brown-200">
              {posts.map((post: BlogPost) => (
                <tr key={post.id} className="hover:bg-beige-50">
                  <td className="px-6 py-4 text-sm text-brown-900">
                    <div className="space-y-1">
                      <div className="font-medium">{post.titleJa}</div>
                      <div className="text-brown-600 text-xs">{post.titleEn}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-brown-700">
                    {post.slug}
                  </td>
                  <td className="px-6 py-4 text-sm text-brown-700">
                    {post.date.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 text-xs ${post.published
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-brown-600 hover:text-brown-900 underline"
                      >
                        JA
                      </Link>
                      <Link
                        href={`/blog/en/${post.slug}`}
                        target="_blank"
                        className="text-brown-600 hover:text-brown-900 underline"
                      >
                        EN
                      </Link>
                      <Link
                        href={`/admin/dashboard/posts/${post.id}`}
                        className="text-brown-600 hover:text-brown-900 underline"
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
