import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  console.log("Testing Prisma connection...\n");

  // Get all posts
  const posts = await prisma.blogPost.findMany({
    orderBy: {
      date: "desc",
    },
  });

  console.log(`Found ${posts.length} blog posts:\n`);

  posts.forEach((post) => {
    console.log(`- ${post.title}`);
    console.log(`  Slug: ${post.slug}`);
    console.log(`  Date: ${post.date.toLocaleDateString()}`);
    console.log(`  Author: ${post.author}`);
    console.log(`  Excerpt: ${post.excerpt.substring(0, 100)}...`);
    console.log();
  });

  console.log("✓ Prisma connection test successful!");
}

main()
  .catch((e) => {
    console.error("✗ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
