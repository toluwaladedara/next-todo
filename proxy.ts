import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  let token = request.cookies.get("auth_token")?.value;
  if (token) {
    jwt.verify(token, "your_secret_key", (err, decoded) => {
      if (err) {
        console.log("Token verification failed:", err);
        return NextResponse.redirect(new URL("/auth", request.url));
      }
    });
  } else{
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    {
        source:"/((?!_next|api|static|favicon.ico|auth|.*\\..*).*)",
     // regexp: "/^((?!api/auth/login|home|favicon.ico).*)",
    },
  ],
};
