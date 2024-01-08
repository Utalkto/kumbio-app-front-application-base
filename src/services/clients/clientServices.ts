import { ISession } from '@/interfaces';
import { IClient, ICreateClientPayload } from '@/models';
import { baseUrl } from '@/services/config';
import { getOrganizationIdFromLocalStorage } from '@/utils';
import { getSession } from 'next-auth/react';

export const createClientService = async (
	payload: ICreateClientPayload
): Promise<IClient | null> => {
	const session = (await getSession()) as unknown as ISession;

	if (!session) {
		return null;
	}

	try {
		const response = await fetch(`${baseUrl}/api/clients/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${session?.id}`,
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			return null;
		}

		const responseJson: IClient = await response.json();

		return responseJson;
	} catch (error) {
		console.error(error);
		return null;
	}
};
