import { NextResponse } from 'next/server';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ message: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure upload folder exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    // Generate safe unique filename
    const uniqueName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = path.join(uploadDir, uniqueName);

    await writeFile(filePath, buffer);

    return NextResponse.json({ url: `/uploads/${uniqueName}` }, { status: 200 });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ message: error.message || 'Server upload failed' }, { status: 500 });
  }
}