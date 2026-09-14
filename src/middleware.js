import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Define protected routes that require authentication
  const protectedRoutes = ["/admin"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // If trying to access a protected route without a token, redirect to /login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If already logged in and trying to access /login or /register, redirect to /admin
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/blog/:path*", "/login", "/register"],
};
