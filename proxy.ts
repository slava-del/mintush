import { NextResponse, type NextRequest } from "next/server";

const ALLOWED_PATHS = new Set([
  "/",
  "/board",
  "/business-management",
  "/education",
  "/education/business-management",
  "/education/business-strategy",
  "/maintenance",
]);

function normalizePathname(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function proxy(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);

  if (ALLOWED_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
