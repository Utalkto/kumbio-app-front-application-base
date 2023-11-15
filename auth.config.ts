import type { NextAuthOptions } from 'next-auth';

export const authConfig = {
	providers: [],
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, user }: { token: any; user: any }) {
			if (user) token.role = user.role as any;

			return token;
		},

		async session({ session, token }: { session: any; token: any }) {
			if (session.user) session.user.role = token?.role as any;

			return session;
		},
		// authorized({ auth, request: { nextUrl } }) {
		//   const isLoggedIn = !!auth?.user;
		//   const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
		//   if (isOnDashboard) {
		//     if (isLoggedIn) return true;
		//     return false; // Redirect unauthenticated users to login page
		//   } else if (isLoggedIn) {
		//     return Response.redirect(new URL('/dashboard', nextUrl));
		//   }
		//   return true;
		// },
	},
} satisfies NextAuthOptions;
