# Prisma Blog Database Setup

This project uses Prisma ORM with a Neon PostgreSQL database to manage blog posts.

## Database Schema

The blog posts are stored in the `blog_posts` table with the following fields:

- `id`: Unique identifier (cuid)
- `slug`: URL-friendly slug (unique)
- `title`: Post title
- `date`: Publication date
- `author`: Author name
- `excerpt`: Short summary
- `content`: Full markdown content
- `published`: Boolean flag
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## Available Scripts

### Migrate Markdown Files to Database
```bash
npm run migrate-blog
```
This script reads markdown files from `content/blog/` and imports them into the database.

### Database Migrations
```bash
npx prisma migrate dev    # Create and apply new migration
npx prisma migrate deploy  # Deploy migrations to production
```

### Generate Prisma Client
```bash
npx prisma generate
```

### Open Prisma Studio (Database GUI)
```bash
npx prisma studio
```

## Blog API Usage

### Get All Posts
```typescript
import { getAllPosts } from "@/lib/blog-db";

const posts = await getAllPosts();
```

### Get Single Post by Slug
```typescript
import { getPostBySlug } from "@/lib/blog-db";

const post = await getPostBySlug("welcome");
```

## Environment Variables

Make sure your `.env` file contains:

```
DATABASE_URL="postgresql://[username]:[password]@[host]/[database]?sslmode=require"
```

## Migration from File-Based to Database

The original file-based blog system (`lib/blog.ts`) is still available. To switch between systems:

- **File-based**: Import from `@/lib/blog`
- **Database-based**: Import from `@/lib/blog-db`

Both provide the same interface:
- `getAllPosts()`
- `getPostBySlug(slug)`
- `formatDate(dateString)`
