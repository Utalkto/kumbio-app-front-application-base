import { ISession } from '@/interfaces';
import { baseUrl } from '../config';
import { auth } from '@/auth';
import { IService } from '@/models';

export const getOrganizationServices = async (organizationPk: number) => {
	const session = (await auth()) as unknown as ISession;

	try {
		const response = await fetch(`${baseUrl}/api/services/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${session?.id}`,
			},
		});

		if (!response.ok) {
			return [];
		}

		const responseJson: IService[] = await response.json();

		return responseJson;
	} catch (error) {
		console.error(error);
		return [];
	}
};
