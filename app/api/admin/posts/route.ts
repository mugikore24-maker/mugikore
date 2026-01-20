import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const session = await verifySession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { titleJa, titleEn, slug, author, date, excerptJa, excerptEn, contentJa, contentEn, heroImage, published } = body;

    if (!titleJa || !titleEn || !slug || !author || !date || !excerptJa || !excerptEn || !contentJa || !contentEn) {
      return NextResponse.json(
        { error: "All fields are required (both Japanese and English)" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (existing) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      );
    }

    const post = await prisma.blogPost.create({
      data: {
        titleJa,
        titleEn,
        slug,
        author,
        date: new Date(date),
        excerptJa,
        excerptEn,
        contentJa,
        contentEn,
        heroImage: heroImage || null,
        published: published ?? true,
        // legacy columns kept non-null in DB; populate with JA defaults
        title: titleJa,
        excerpt: excerptJa,
        content: contentJa,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
