import { NextResponse, type NextRequest } from "next/server";
import { getSessionToken } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // La página de login queda afuera de la protección (si no, no se podría
  // entrar nunca).
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const cookie = request.cookies.get("admin_session")?.value;

    let expected: string | null = null;
    try {
      expected = await getSessionToken();
    } catch {
      // Falta ADMIN_SESSION_SECRET: tratamos como no autenticado.
      expected = null;
    }

    if (!expected || cookie !== expected) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
