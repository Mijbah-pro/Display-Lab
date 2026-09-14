import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { userName, userEmail, password } = await req.json();

    if (!userName || !userEmail || !password) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    // Check if email already exists
    const [existing] = await db.query(
      "SELECT * FROM users WHERE userEmail = ?",
      [userEmail],
    );
    if (existing.length > 0) {
      return Response.json(
        { message: "Email already registered" },
        { status: 409 },
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const [result] = await db.query(
      "INSERT INTO users (userName, userEmail, password) VALUES (?, ?, ?)",
      [userName, userEmail, hashedPassword],
    );

    return Response.json(
      {
        message: "User registered successfully",
        usesId: result.insertId,
      },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 },
    );
  }
}
