import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { onIsProtectedRoute } from './routes';

export async function middleware(request: NextRequest) {
	const isToken = request.cookies.get('token') ? true : false;
	const { pathname } = request.nextUrl;

	const isProtectedRoute = onIsProtectedRoute(pathname);

	if (isProtectedRoute && !isToken) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
};
