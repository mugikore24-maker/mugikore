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

      return {
        slug,
        title: matterResult.data.title || slug,
        date: new Date(matterResult.data.date || new Date()),
        author: matterResult.data.author || "UTokyo Bakers' Lab",
        excerpt: matterResult.data.excerpt || "",
        content: matterResult.content,
        published: true,
      };
    });

  console.log(`Found ${posts.length} blog posts to migrate.`);

  for (const post of posts) {
    try {
      await prisma.blogPost.upsert({
        where: { slug: post.slug },
        update: {
          title: post.title,
          date: post.date,
          author: post.author,
          excerpt: post.excerpt,
          content: post.content,
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
