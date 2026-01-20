import { prisma } from "./prisma";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  heroImage?: string | null;
}

export async function getAllPosts(language: "ja" | "en" = "ja"): Promise<BlogPost[]> {
  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
    },
    orderBy: {
      date: "desc",
    },
    select: {
      slug: true,
      titleJa: true,
      titleEn: true,
      date: true,
      author: true,
      excerptJa: true,
      excerptEn: true,
      contentJa: true,
      contentEn: true,
      heroImage: true,
    },
  });

  return posts.map((post) => ({
    slug: post.slug,
    title: language === "ja" ? post.titleJa : post.titleEn,
    date: post.date.toISOString().split("T")[0],
    author: post.author,
    excerpt: language === "ja" ? post.excerptJa : post.excerptEn,
    content: language === "ja" ? post.contentJa : post.contentEn,
    heroImage: post.heroImage,
  }));
}

export async function getPostBySlug(
  slug: string,
  language: "ja" | "en" = "ja"
): Promise<BlogPost | null> {
  const post = await prisma.blogPost.findUnique({
    where: {
      slug,
      published: true,
    },
    select: {
      slug: true,
      titleJa: true,
      titleEn: true,
      date: true,
      author: true,
      excerptJa: true,
      excerptEn: true,
      contentJa: true,
      contentEn: true,
      heroImage: true,
    },
  });

  if (!post) {
    return null;
  }

  return {
    slug: post.slug,
    title: language === "ja" ? post.titleJa : post.titleEn,
    date: post.date.toISOString().split("T")[0],
    author: post.author,
    excerpt: language === "ja" ? post.excerptJa : post.excerptEn,
    content: language === "ja" ? post.contentJa : post.contentEn,
    heroImage: post.heroImage,
  };
}

export function formatDate(dateString: string, language: "ja" | "en" = "ja"): string {
  const date = new Date(dateString);
  if (language === "en") {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
