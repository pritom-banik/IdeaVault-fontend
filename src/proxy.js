import { NextResponse } from 'next/server'
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
    console.log("Proxy middleware triggered for:", request.url);
     const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        const url = new URL("/login", request.url);
        url.searchParams.set("callbackUrl", request.nextUrl.pathname);

        return NextResponse.redirect(url);
    }

   return NextResponse.next();
}
 

 
export const config = {
  matcher: [
  '/bookmarks/:path*',
  '/ideas/:path',
  '/interactions/:path*',
  '/myideas/:path*',
  '/profile/:path*',
  '/shareideas/:path*'
  ]
}