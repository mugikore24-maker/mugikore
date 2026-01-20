import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as fs from "fs";
import * as path from "path";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🚀 Adding heroImage field to blog_posts...\n");

  const migrationSQL = fs.readFileSync(
    path.join(__dirname, "../prisma/migrations/20260120_add_hero_image/migration.sql"),
    "utf-8"
  );

  try {
    await prisma.$executeRawUnsafe(migrationSQL.trim());
    console.log("✅ Migration completed successfully!");
  } catch (error: any) {
    if (error.message.includes("already exists")) {
      console.log("✓ Column already exists, skipping...");
    } else {
      throw error;
    }
  }
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
