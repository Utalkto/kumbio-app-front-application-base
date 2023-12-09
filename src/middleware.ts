export { default } from 'next-auth/middleware';

export const config = {
	// Match all dashboard routes

	matcher: [
		'/',
		'/dashboard/:path*',
		'/settings/:path*',
		'/organization/:path*',
	],
};
