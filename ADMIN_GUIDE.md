# Admin Dashboard Guide

## Access

- **URL**: `/admin/login`
- **Username**: `admin`
- **Password**: `test`

## Features

### Blog Post Management

The admin dashboard allows you to:
- View all blog posts
- Create new posts
- Edit existing posts
- Delete posts
- Toggle publish status (published/draft)

### Security

- Password-protected authentication
- Session-based login (7-day expiry)
- Passwords hashed with bcrypt
- JWT tokens for session management

## Creating a New Blog Post

1. Go to `/admin/dashboard`
2. Click "New Post" button
3. Fill in the form:
   - **Title**: Post title (will auto-generate slug)
   - **Slug**: URL-friendly identifier (e.g., `my-post-title`)
   - **Author**: Author name
   - **Date**: Publication date
   - **Excerpt**: Short summary for listing pages
   - **Content**: Full post content in Markdown format
   - **Published**: Check to publish immediately

4. Click "Create Post"

## Editing a Post

1. From the dashboard, click "Edit" next to the post
2. Update any fields
3. Click "Save Changes"

## Deleting a Post

1. From the edit page, click "Delete Post"
2. Click again to confirm deletion

## Markdown Support

Blog posts support standard Markdown formatting:

- `**bold**` → **bold**
- `*italic*` → *italic*
- `## Heading 2` → Heading 2
- `### Heading 3` → Heading 3
- `- List item` → Bullet list
- `1. List item` → Numbered list
- `> Quote` → Blockquote
- `[Link text](https://url.com)` → Hyperlink
- `---` → Horizontal rule

## Database

All blog posts are stored in a Neon PostgreSQL database. The database includes:

- `blog_posts` table: All blog post data
- `admins` table: Admin user credentials

## Changing Admin Password

To create a new admin user or change the password:

1. Edit `scripts/seed-admin.ts`
2. Update the `username` and `password` values
3. Run: `npx tsx scripts/seed-admin.ts`

## Session Management

- Sessions last 7 days
- Click "Logout" to end session immediately
- If not logged in, you'll be redirected to the login page

## API Endpoints

Admin API routes (require authentication):

- `POST /api/admin/login` - Login
- `POST /api/admin/logout` - Logout
- `POST /api/admin/posts` - Create post
- `GET /api/admin/posts/[id]` - Get post
- `PUT /api/admin/posts/[id]` - Update post
- `DELETE /api/admin/posts/[id]` - Delete post

## Troubleshooting

### Cannot Login
- Check that admin user was seeded: `npx tsx scripts/seed-admin.ts`
- Verify DATABASE_URL in `.env`
- Check browser console for errors

### Posts Not Showing
- Verify database connection
- Check that posts are marked as "Published"
- Run `npx tsx scripts/test-prisma.ts` to test database

### Session Expired
- Sessions expire after 7 days
- Simply log in again at `/admin/login`
