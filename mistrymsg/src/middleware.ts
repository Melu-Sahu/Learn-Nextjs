import { NextRequest, NextResponse } from 'next/server'
import NextAuthMiddleware from 'next-auth/middleware'
import { getToken } from 'next-auth/jwt' 

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    console.log("middleware token", token);
    if (token) {
        if (request.nextUrl.pathname.startsWith('/') || request.nextUrl.pathname === '/sign-in' || request.nextUrl.pathname === '/sign-up') {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
        return NextResponse.next();
    }

    if (request.nextUrl.pathname === '/sign-in' || request.nextUrl.pathname === '/sign-up' || request.nextUrl.pathname === '/') {
        return NextResponse.next();
    }
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/sign-in', '/sign-up', '/', '/home', '/verify/:path*', ],
}