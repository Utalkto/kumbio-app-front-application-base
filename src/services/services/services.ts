import { ISession } from '@/interfaces';
import { baseUrl } from '../config';
import { auth } from '@/auth';
import { IService } from '@/models';

export const getOrganizationServices = async () => {
	const session = (await auth()) as unknown as ISession;

	try {
		const response = await fetch(
			`${baseUrl}/api/organization/${session.organizationPk}/services/`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${session?.id}`,
				},
			}
		);

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

export const getOrganizationService = async (servicePk: Number) => {
	const session = (await auth()) as unknown as ISession;

	try {
		const response = await fetch(`${baseUrl}/api/services/${servicePk}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${session?.id}`,
			},
		});

		if (!response.ok) {
			return [];
		}

		const responseJson: IService = await response.json();

		return responseJson;
	} catch (error) {
		console.error(error);
		return [];
	}
};
