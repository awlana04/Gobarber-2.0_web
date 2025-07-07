import { NextRequest, NextResponse, type MiddlewareConfig } from 'next/server';

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/logon';

const privateRoutes = ['/signin/barber', '/dashboard/user'];

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const privateRoute = privateRoutes.find((route) => route === path);
  const authToken = request.cookies.get('@GoBarber-2.0:token');

  if (path.startsWith(privateRoute!) && !authToken) {
    const redirectURL = request.nextUrl.clone();

    redirectURL.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectURL);
  }
}

export const middlewareConfig: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
