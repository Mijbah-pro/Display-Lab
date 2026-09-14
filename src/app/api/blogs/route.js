import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET: Fetch all blogs
export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM blogs ORDER BY createdAt DESC');
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST: Add a new blog
export async function POST(request) {
  try {
    const { blogName, blogDescription, blogImage } = await request.json();

    if (!blogName || !blogDescription) {
      return NextResponse.json(
        { message: 'blogName and blogDescription are required.' },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      'INSERT INTO blogs (blogName, blogDescription, blogImage) VALUES (?, ?, ?)',
      [blogName, blogDescription, blogImage || null]
    );

    return NextResponse.json(
      { message: 'Blog created successfully', blogId: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}