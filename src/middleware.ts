import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { IsRoute } from './routes';

export async function middleware (request: NextRequest) {

    const isToken = request.cookies.get('token') ? true : false;
    const { pathname } = request.nextUrl

    const currentRoute = IsRoute(pathname);

    if( currentRoute ) {
        
        if( currentRoute.protected && currentRoute.protected && !isToken){
            return NextResponse.redirect(new URL('/', request.url));
        }

    }

    return NextResponse.next()
  
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
}