import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_key";

export async function POST(req) {
  try {
    const { userEmail, password } = await req.json();

    if (!userEmail || !password) {
      return Response.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    // Find user
    const [rows] = await db.query("SELECT * FROM users WHERE userEmail = ?", [
      userEmail,
    ]);
    if (rows.length === 0) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const user = rows[0];

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        usesId: user.usesId,
        userEmail: user.userEmail,
        userName: user.userName,
      },
      JWT_SECRET,
      { expiresIn: "1d" },
    );

    // Set HTTP-Only Cookie
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 1 day
      path: "/",
    });

    return Response.json(
      {
        message: "Login successful",
        user: {
          usesId: user.usesId,
          userName: user.userName,
          userEmail: user.userEmail,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 },
    );
  }
}
