import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  const protectedRoutes = ["/booking", "/my-bookings", "/dashboard"];

  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
