// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { loginUserService } from '@/services';

// export const { auth, signIn, signOut } = NextAuth({
// 	...authConfig,
// 	providers: [
// 		Credentials({
// 			async authorize(credentials) {
// 				const user = loginUserService(credentials);

// 				console.log({ user, credentials });

// 				return user;
// 			},
// 		}),
// 	],
// });

import type {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from 'next';
import { getServerSession } from 'next-auth';
import { authConfig } from './auth.config';

// // You'll need to import and pass this
// // to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
// export const config = {
// 	providers: [], // rest of your config
// } satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
	...args:
		| [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, authConfig);
}
