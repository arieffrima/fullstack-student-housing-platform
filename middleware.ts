import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("admin_logged_in")

  if (request.nextUrl.pathname.startsWith("/admin/dashboard") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}

