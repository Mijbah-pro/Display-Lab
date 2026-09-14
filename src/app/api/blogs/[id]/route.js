import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// READ: Fetch a single blog by blogId
export async function GET(request, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const [blogs] = await db.query('SELECT * FROM blogs WHERE blogId = ?', [id]);

    if (blogs.length === 0) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blogs[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// UPDATE: Modify an existing blog
export async function PUT(request, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { blogName, blogDescription, blogImage } = await request.json();

    const [result] = await db.query(
      'UPDATE blogs SET blogName = ?, blogDescription = ?, blogImage = ? WHERE blogId = ?',
      [blogName, blogDescription, blogImage || null, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// DELETE: Remove a blog and its associated image file
export async function DELETE(request, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    // 1. Fetch the blog first to get the blogImage path
    const [blogs] = await db.query('SELECT blogImage FROM blogs WHERE blogId = ?', [id]);

    if (blogs.length === 0) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    const blogImage = blogs[0].blogImage;

    // 2. Delete record from MySQL database
    const [result] = await db.query('DELETE FROM blogs WHERE blogId = ?', [id]);

    // 3. If database delete succeeds and an image exists locally, remove it from disk
    if (result.affectedRows > 0 && blogImage && blogImage.startsWith('/uploads/')) {
      try {
        // Resolve absolute path to public/uploads/filename
        const filePath = path.join(process.cwd(), 'public', blogImage);
        await unlink(filePath);
      } catch (fileError) {
        // Log file error without failing the API response if the file was already missing
        console.warn('Failed to delete image file from disk:', fileError.message);
      }
    }

    return NextResponse.json({ message: 'Blog and associated image deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}