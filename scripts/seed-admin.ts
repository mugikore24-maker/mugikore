import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding admin user...");

  const username = "admin";
  const password = "test";

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 10);

  // Create or update admin user
  const admin = await prisma.admin.upsert({
    where: { username },
    update: {
      passwordHash,
    },
    create: {
      username,
      passwordHash,
    },
  });

  console.log(`✓ Admin user created/updated: ${admin.username}`);
  console.log(`  Username: admin`);
  console.log(`  Password: test`);
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
