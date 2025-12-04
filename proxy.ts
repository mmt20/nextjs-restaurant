// export { auth as proxy } from "@/auth";

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const session = await auth();

  const { pathname } = request.nextUrl;
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isLoggedIn = !!session?.user;

  // If on auth pages and logged in, redirect to home
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.nextUrl.origin));
  }

  // If not on auth pages and not logged in, redirect to login
  if (!isAuthPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
