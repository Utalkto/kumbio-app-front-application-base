import { auth } from '@/auth';
import { ISession } from '@/interfaces';
import { ILocation } from '@/models';
import { baseUrl } from '@/services/config';

export const getLocationsServices = async () => {
	const session = (await auth()) as unknown as ISession;

	console.log({ session });

	try {
		const response = await fetch(
			`${baseUrl}/api/organizations/${session?.organizationPk}/sedes/`,
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

		const responseJson: ILocation[] = await response.json();

		return responseJson;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getLocationService = async (
	locationId: string
): Promise<ILocation> => {
	const session = (await auth()) as unknown as ISession;

	const response = await fetch(`${baseUrl}/api/sedes/${locationId}/`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${session?.id}`,
		},
	});

	const responseJson: ILocation = await response.json();

	return responseJson;
};
