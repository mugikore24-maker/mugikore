"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/admin/ImageUpload";

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"ja" | "en">("ja");
  const [formData, setFormData] = useState({
    titleJa: "",
    titleEn: "",
    slug: "",
    author: "UTokyo Bakers' Lab",
    date: new Date().toISOString().split("T")[0],
    excerptJa: "",
    excerptEn: "",
    contentJa: "",
    contentEn: "",
    heroImage: "",
    published: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await response.json();
        setError(data.error || "Failed to create post");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      titleJa: title,
      slug: generateSlug(title),
    }));
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-brown-900">
          New Blog Post (Bilingual)
        </h2>
        <p className="text-sm text-brown-600 mt-2">
          Create content in both Japanese and English
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Language Tabs */}
        <div className="bg-white border border-brown-300">
          <div className="flex border-b border-brown-300">
            <button
              type="button"
              onClick={() => setActiveTab("ja")}
              className={`flex-1 px-6 py-3 font-medium transition-colors ${
                activeTab === "ja"
                  ? "bg-brown-600 text-white"
                  : "bg-beige-50 text-brown-700 hover:bg-beige-100"
              }`}
            >
              🇯🇵 Japanese
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("en")}
              className={`flex-1 px-6 py-3 font-medium transition-colors ${
                activeTab === "en"
                  ? "bg-brown-600 text-white"
                  : "bg-beige-50 text-brown-700 hover:bg-beige-100"
              }`}
            >
              🇬🇧 English
            </button>
          </div>

          <div className="p-6 space-y-6">
            {activeTab === "ja" ? (
              <>
                <div>
                  <label
                    htmlFor="titleJa"
                    className="block text-sm font-medium text-brown-700 mb-2"
                  >
                    タイトル (Japanese) *
                  </label>
                  <input
                    type="text"
                    id="titleJa"
                    value={formData.titleJa}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="excerptJa"
                    className="block text-sm font-medium text-brown-700 mb-2"
                  >
                    概要 (Japanese) *
                  </label>
                  <textarea
                    id="excerptJa"
                    value={formData.excerptJa}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        excerptJa: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contentJa"
                    className="block text-sm font-medium text-brown-700 mb-2"
                  >
                    本文 (Japanese) * (Markdown format)
                  </label>
                  <textarea
                    id="contentJa"
                    value={formData.contentJa}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contentJa: e.target.value,
                      }))
                    }
                    rows={20}
                    className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500 font-mono text-sm"
                    required
                    disabled={loading}
                    placeholder="Write your post content in Markdown format..."
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="titleEn"
                    className="block text-sm font-medium text-brown-700 mb-2"
                  >
                    Title (English) *
                  </label>
                  <input
                    type="text"
                    id="titleEn"
                    value={formData.titleEn}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        titleEn: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="excerptEn"
                    className="block text-sm font-medium text-brown-700 mb-2"
                  >
                    Excerpt (English) *
                  </label>
                  <textarea
                    id="excerptEn"
                    value={formData.excerptEn}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        excerptEn: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contentEn"
                    className="block text-sm font-medium text-brown-700 mb-2"
                  >
                    Content (English) * (Markdown format)
                  </label>
                  <textarea
                    id="contentEn"
                    value={formData.contentEn}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contentEn: e.target.value,
                      }))
                    }
                    rows={20}
                    className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500 font-mono text-sm"
                    required
                    disabled={loading}
                    placeholder="Write your post content in Markdown format..."
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Common Fields */}
        <div className="bg-white border border-brown-300 p-6 space-y-6">
          <h3 className="font-medium text-brown-900 pb-3 border-b border-brown-300">
            Common Settings
          </h3>

          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-brown-700 mb-2"
            >
              Slug * (URL-friendly)
            </label>
            <input
              type="text"
              id="slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, slug: e.target.value }))
              }
              className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
              required
              disabled={loading}
              pattern="[a-z0-9-]+"
              title="Only lowercase letters, numbers, and hyphens"
            />
            <p className="mt-1 text-xs text-brown-600">
              URL: /blog/{formData.slug || "your-slug"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-brown-700 mb-2">
              Hero Image (optional)
            </label>
            <ImageUpload
              value={formData.heroImage}
              onChange={(url) =>
                setFormData((prev) => ({ ...prev, heroImage: url }))
              }
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-brown-700 mb-2"
              >
                Author *
              </label>
              <input
                type="text"
                id="author"
                value={formData.author}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, author: e.target.value }))
                }
                className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-brown-700 mb-2"
              >
                Publication Date *
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, date: e.target.value }))
                }
                className="w-full px-3 py-2 border border-brown-300 bg-white text-brown-900 focus:outline-none focus:border-brown-500"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  published: e.target.checked,
                }))
              }
              className="w-4 h-4 text-brown-600 border-brown-300"
              disabled={loading}
            />
            <label
              htmlFor="published"
              className="ml-2 text-sm text-brown-700"
            >
              Publish immediately
            </label>
          </div>
        </div>

        {error && (
          <div className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
            {error}
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-brown-600 text-white px-6 py-2 font-medium hover:bg-brown-700 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Post"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="border border-brown-300 text-brown-700 px-6 py-2 font-medium hover:bg-beige-50"
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
