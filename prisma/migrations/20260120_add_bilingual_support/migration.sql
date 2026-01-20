-- Step 1: Add new bilingual columns with defaults
ALTER TABLE "blog_posts" ADD COLUMN "titleJa" TEXT;
ALTER TABLE "blog_posts" ADD COLUMN "titleEn" TEXT DEFAULT '';
ALTER TABLE "blog_posts" ADD COLUMN "excerptJa" TEXT;
ALTER TABLE "blog_posts" ADD COLUMN "excerptEn" TEXT DEFAULT '';
ALTER TABLE "blog_posts" ADD COLUMN "contentJa" TEXT;
ALTER TABLE "blog_posts" ADD COLUMN "contentEn" TEXT DEFAULT '';

-- Step 2: Copy existing data to Japanese columns
UPDATE "blog_posts" SET "titleJa" = title WHERE title IS NOT NULL;
UPDATE "blog_posts" SET "excerptJa" = excerpt WHERE excerpt IS NOT NULL;
UPDATE "blog_posts" SET "contentJa" = content WHERE content IS NOT NULL;

-- Step 3: Set English columns to same content as placeholder
UPDATE "blog_posts" SET "titleEn" = title WHERE title IS NOT NULL;
UPDATE "blog_posts" SET "excerptEn" = excerpt WHERE excerpt IS NOT NULL;
UPDATE "blog_posts" SET "contentEn" = content WHERE content IS NOT NULL;

-- Step 4: Make new columns NOT NULL now that they have data
ALTER TABLE "blog_posts" ALTER COLUMN "titleJa" SET NOT NULL;
ALTER TABLE "blog_posts" ALTER COLUMN "excerptJa" SET NOT NULL;
ALTER TABLE "blog_posts" ALTER COLUMN "contentJa" SET NOT NULL;

-- Note: Keep old columns for now for safety
-- They can be dropped later after verifying the migration worked
