import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as fs from "fs";
import * as path from "path";

console.log("DATABASE_URL loaded:", process.env.DATABASE_URL ? "✓" : "✗");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Starting bilingual migration...\n");

  const migrationSQL = fs.readFileSync(
    path.join(__dirname, "../prisma/migrations/20260120_add_bilingual_support/migration.sql"),
    "utf-8"
  );

  const statements = migrationSQL
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith("--"));

  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];
    console.log(`Executing statement ${i + 1}/${statements.length}...`);
    try {
      await prisma.$executeRawUnsafe(statement);
      console.log("✓ Success\n");
    } catch (error: any) {
      console.error(`✗ Error: ${error.message}\n`);
      throw error;
    }
  }

  console.log("✅ Migration completed successfully!");
  console.log("\nVerifying data...");

  const posts = await prisma.$queryRaw<any[]>`
    SELECT id, slug, "titleJa", "titleEn", "excerptJa", "excerptEn"
    FROM blog_posts
    LIMIT 3
  `;

  console.log(`\nFound ${posts.length} posts:`);
  posts.forEach((post, i) => {
    console.log(`\n${i + 1}. ${post.slug}`);
    console.log(`   Japanese: ${post.titleJa}`);
    console.log(`   English: ${post.titleEn}`);
  });
}

main()
  .catch((e) => {
    console.error("❌ Migration failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
