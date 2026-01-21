import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_TCP || process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const postsDirectory = path.join(process.cwd(), "content/blog");

async function main() {
  console.log("Starting blog migration...");

  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.log("No blog posts directory found.");
    return;
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(
      (fileName) =>
        (fileName.endsWith(".md") || fileName.endsWith(".mdx")) &&
        fileName !== "README.md"
    )
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      const title = matterResult.data.title || slug;
      const excerpt = matterResult.data.excerpt || "";
      const content = matterResult.content;

      return {
        slug,
        titleJa: title,
        titleEn: matterResult.data.titleEn || "",
        date: new Date(matterResult.data.date || new Date()),
        author: matterResult.data.author || "UTokyo Bakers' Lab",
        excerptJa: excerpt,
        excerptEn: matterResult.data.excerptEn || "",
        contentJa: content,
        contentEn: matterResult.data.contentEn || "",
        heroImage: matterResult.data.heroImage || null,
        published: true,
      };
    });

  console.log(`Found ${posts.length} blog posts to migrate.`);

  for (const post of posts) {
    try {
      await prisma.blogPost.upsert({
        where: { slug: post.slug },
        update: {
          titleJa: post.titleJa,
          titleEn: post.titleEn,
          date: post.date,
          author: post.author,
          excerptJa: post.excerptJa,
          excerptEn: post.excerptEn,
          contentJa: post.contentJa,
          contentEn: post.contentEn,
          heroImage: post.heroImage,
          published: post.published,
        },
        create: post,
      });
      console.log(`✓ Migrated: ${post.slug}`);
    } catch (error) {
      console.error(`✗ Failed to migrate ${post.slug}:`, error);
    }
  }

  console.log("Migration complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
