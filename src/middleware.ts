import { NextRequest, NextResponse, type MiddlewareConfig } from 'next/server';

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/logon';

const routeSegments = [
  { path: '/signin', isPrivate: false },
  { path: '/logon', isPrivate: false },
  { path: '/signin/barber', isPrivate: true },
  { path: '/user/dashboard', isPrivate: true },
  { path: '/barber/dashboard', isPrivate: true },
];

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const privateRoutes = routeSegments.find(
    (route) => route.path === path
  )?.isPrivate;

  const authToken = request.cookies.get('@GoBarber-2.0:token');
  const barberCookie = request.cookies.get('@GoBarber-2.0:barber');

  const redirectURL = request.nextUrl.clone();

  if (privateRoutes === true && !authToken) {
    redirectURL.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectURL);
  }

  if (privateRoutes === false && authToken) {
    redirectURL.pathname =
      barberCookie !== undefined ? '/barber/dashboard' : '/user/dashboard';

    return NextResponse.redirect(redirectURL);
  }

  return NextResponse.next();
}

export const middlewareConfig: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
