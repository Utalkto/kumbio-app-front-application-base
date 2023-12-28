import NextAuth from 'next-auth';
import { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginUserService } from './services';

const ProtectedRoutes = [
	'/dashboard',
	'/calendar',
	'/clients',
	'/transactions',
	'/organization',
	'/settings',
];

export const { handlers, auth } = NextAuth({
	trustHost: true,
	pages: {
		signIn: '/login',
	},
	providers: [
		GitHub,
		CredentialsProvider({
			async authorize(credentials) {
				if (credentials) {
					const res = await loginUserService({
						email: credentials.email as string,
						password: credentials.password as string,
					});

					if (res)
						return {
							id: res.access_token,
							name: res.user.full_name,
							email: res.user.email,
							accessToken: res.access_token,
							organizationPk: res.organization_pk,
						};

					if (!res) return null;
				}

				return null;
			},
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
		}),
	],
	session: {
		strategy: 'jwt',

		maxAge: 60 * 60, // 1 hour
	},
	callbacks: {
		async jwt({ token, user }: { token: any; user: any }) {
			if (user) {
				token.id = user.id;
				token.name = user.name;
				token.email = user.email;
				token.accessToken = user.accessToken;
				token.organizationPk = user.organizationPk;
			}

			return token;
		},
		async session({ session, token }: { session: any; token: any }) {
			session.id = token.id;
			session.name = token.name;
			session.email = token.email;
			session.accessToken = token.accessToken;
			session.organizationPk = token.organizationPk;

			return session;
		},
		authorized({ auth, request }) {
			const isLoggedIn = !!auth?.user;
			const isProtectedRoute = ProtectedRoutes.some((url) =>
				request.nextUrl.pathname.includes(url)
			);
			if (isProtectedRoute || request.nextUrl.pathname === '/') {
				if (isLoggedIn) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/dashboard', request.nextUrl));
			}
			return true;
		},
	},
});
