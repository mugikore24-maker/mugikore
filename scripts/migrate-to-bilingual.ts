import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Fetching existing blog posts...");

  // Get all existing posts
  const posts = await prisma.$queryRaw<any[]>`
    SELECT id, slug, title, date, author, excerpt, content, published, "createdAt", "updatedAt"
    FROM blog_posts
  `;

  console.log(`Found ${posts.length} posts to migrate:`);
  posts.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title} (${post.slug})`);
  });

  console.log("\nCreating temporary table with new structure...");

  // Step 1: Create temporary table with new structure
  await prisma.$executeRaw`
    CREATE TABLE blog_posts_temp (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      "titleJa" TEXT NOT NULL,
      "titleEn" TEXT NOT NULL,
      date TIMESTAMP(3) NOT NULL,
      author TEXT NOT NULL,
      "excerptJa" TEXT NOT NULL,
      "excerptEn" TEXT NOT NULL,
      "contentJa" TEXT NOT NULL,
      "contentEn" TEXT NOT NULL,
      published BOOLEAN NOT NULL DEFAULT true,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL
    )
  `;

  console.log("Migrating data to temporary table...");

  // Step 2: Copy data to temporary table (old data goes to Ja columns, placeholder for En)
  for (const post of posts) {
    await prisma.$executeRaw`
      INSERT INTO blog_posts_temp (
        id, slug, "titleJa", "titleEn", date, author,
        "excerptJa", "excerptEn", "contentJa", "contentEn",
        published, "createdAt", "updatedAt"
      ) VALUES (
        ${post.id}, ${post.slug}, ${post.title}, ${post.title}, ${post.date}, ${post.author},
        ${post.excerpt}, ${post.excerpt}, ${post.content}, ${post.content},
        ${post.published}, ${post.createdAt}, ${post.updatedAt}
      )
    `;
  }

  console.log("Dropping old table...");

  // Step 3: Drop old table
  await prisma.$executeRaw`DROP TABLE blog_posts`;

  console.log("Renaming temporary table...");

  // Step 4: Rename temp table
  await prisma.$executeRaw`ALTER TABLE blog_posts_temp RENAME TO blog_posts`;

  console.log("\n✅ Migration completed successfully!");
  console.log("Note: English content is currently set to Japanese content as placeholder.");
  console.log("You'll need to translate the content manually in the admin dashboard.");
}

main()
  .catch((e) => {
    console.error("❌ Error during migration:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
