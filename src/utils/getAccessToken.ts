// Get Access Token from session of NextAuth

import { getServerSession } from 'next-auth/next';

export const getAccessToken = async (): Promise<string> => {
	const session: any = await getServerSession();
	if (!session) throw new Error('No session found');
	console.log(session);

	return session?.user.id;
};
