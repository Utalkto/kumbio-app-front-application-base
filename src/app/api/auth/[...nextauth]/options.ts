import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { loginUserService } from '@/services';

export const authConfig: NextAuthOptions = {
	pages: {
		signIn: '/login',
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				if (credentials) {
					const res = await loginUserService({
						email: credentials.email,
						password: credentials.password,
					});

					if (res) {
						console.log(res);
						return {
							email: res.user.email,
							name: res.user.first_name,
							id: res.access_token,
							role: res.access_token,
						};
					}

					return null;
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
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.name = user.name;
				token.email = user.email;
			}

			return token;
		},
		async session({ session, token }: { session: any; token: any }) {
			session.id = token.id;
			session.name = token.name;
			session.email = token.email;

			return session;
		},
	},
};
