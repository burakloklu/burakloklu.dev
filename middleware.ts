import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const validPaths = ['/about', '/projects', '/skills', '/experience', '/contact'];

  if (!validPaths.includes(path) && path !== '/') {
    // Redirect to the main page if the path is not valid
    return NextResponse.redirect(new URL('/', request.url));
  }
  // Allow request to proceed if the path is valid
  return NextResponse.next();
}

// Specify the paths where this middleware should run
export const config = {
  matcher: ['/((?!_next|api|favicon.ico|assets|Burak_Loklu_Resume.pdf).*)'],
};
