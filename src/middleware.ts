export { default } from 'next-auth/middleware';

export const config = {
	// Match all dashboard routes

	matcher: ['/', '/settings/:path*'],
};
