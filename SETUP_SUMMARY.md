# Setup Summary - UTokyo Bakers' Lab Website

## What Was Built

### 1. Database-Backed Blog System
- **Database**: Neon PostgreSQL (cloud-hosted)
- **ORM**: Prisma 7
- **Features**: Full CRUD operations for blog posts

### 2. Admin Dashboard
- **URL**: `/admin/login`
- **Credentials**:
  - Username: `admin`
  - Password: `test`
- **Features**:
  - Secure login with bcrypt password hashing
  - JWT-based session management (7-day sessions)
  - Create, edit, delete blog posts
  - Markdown editor for content
  - Publish/draft toggle
  - Auto-generated slugs

### 3. Blog System
- Database-backed blog posts
- Markdown content rendering
- Published/draft status
- Author attribution
- Publication dates

## File Structure

```
app/
├── admin/
│   ├── login/page.tsx          # Admin login page
│   └── dashboard/
│       ├── layout.tsx           # Admin layout with auth
│       ├── page.tsx             # Blog post list
│       └── posts/
│           ├── new/page.tsx     # Create new post
│           └── [id]/page.tsx    # Edit/delete post
├── api/
│   └── admin/
│       ├── login/route.ts       # Login API
│       ├── logout/route.ts      # Logout API
│       └── posts/
│           ├── route.ts         # Create post API
│           └── [id]/route.ts    # Get/update/delete post API
├── blog/
│   ├── page.tsx                 # Blog listing (now uses database)
│   └── [slug]/page.tsx          # Individual post (now uses database)

lib/
├── auth.ts                      # Authentication utilities
├── prisma.ts                    # Prisma client
├── blog-db.ts                   # Database blog functions
└── blog.ts                      # File-based blog (legacy)

prisma/
├── schema.prisma                # Database schema
└── migrations/                  # Database migrations

scripts/
├── seed-admin.ts                # Seed admin user
├── migrate-blog-to-db.ts        # Import markdown to database
└── test-prisma.ts               # Test database connection
```

## Database Schema

### BlogPost
- `id` (String, cuid)
- `slug` (String, unique)
- `title` (String)
- `date` (DateTime)
- `author` (String)
- `excerpt` (Text)
- `content` (Text)
- `published` (Boolean)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Admin
- `id` (String, cuid)
- `username` (String, unique)
- `passwordHash` (String)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

## Environment Variables

```.env
DATABASE_URL="postgresql://neondb_owner:...@ep-aged-boat...neon.tech/neondb?sslmode=require"
JWT_SECRET="utokyo-bakers-lab-admin-secret-key-2025"
```

## NPM Scripts

```bash
# Development
npm run dev                 # Start dev server

# Blog Management
npm run migrate-blog       # Import markdown files to database

# Database
npx prisma migrate dev     # Create and apply migrations
npx prisma migrate deploy  # Deploy to production
npx prisma generate        # Generate Prisma Client
npx prisma studio          # Open database GUI

# Admin
npx tsx scripts/seed-admin.ts    # Create/update admin user
npx tsx scripts/test-prisma.ts   # Test database connection
```

## How to Use

### Admin Dashboard

1. Visit: `http://localhost:3000/admin/login`
2. Login with `admin` / `test`
3. Create, edit, or delete blog posts
4. Posts marked as "Published" appear on the site

### Creating Blog Posts

**Option 1: Admin Dashboard (Recommended)**
1. Login to admin dashboard
2. Click "New Post"
3. Fill in the form and click "Create Post"

**Option 2: Markdown Files**
1. Create `.md` file in `content/blog/`
2. Add frontmatter:
```markdown
---
title: "Post Title"
date: "2025-01-20"
author: "Author Name"
excerpt: "Short summary"
---

Post content here...
```
3. Run: `npm run migrate-blog`

### Viewing Blog Posts

- Blog listing: `/blog`
- Individual post: `/blog/[slug]`
- All published posts are automatically displayed

## Security Notes

- Passwords are hashed with bcrypt (10 rounds)
- Sessions use JWT with 7-day expiry
- HTTP-only cookies prevent XSS attacks
- Admin routes protected by session verification
- Change default password in production!

## Migration from File-Based to Database

The system now uses the database by default:
- Blog pages import from `@/lib/blog-db`
- Original file-based system still available at `@/lib/blog`
- All 3 existing posts migrated to database

## Next Steps

1. **Change admin password** (see ADMIN_GUIDE.md)
2. **Add more blog posts** via admin dashboard
3. **Customize styling** if needed
4. **Deploy to production** (Vercel recommended)
5. **Set up backups** for Neon database

## Documentation

- [ADMIN_GUIDE.md](ADMIN_GUIDE.md) - Admin dashboard usage
- [PRISMA_SETUP.md](PRISMA_SETUP.md) - Prisma and database info
- [README.md](README.md) - General project info

## Production Checklist

- [ ] Change admin password
- [ ] Update JWT_SECRET to secure random value
- [ ] Set up database backups
- [ ] Configure environment variables on hosting
- [ ] Test admin dashboard on production
- [ ] Verify SSL/HTTPS is enabled
- [ ] Set up monitoring/logging
