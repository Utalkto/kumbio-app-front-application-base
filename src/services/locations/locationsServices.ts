import { ISession } from '@/interfaces';
import { ILocation } from '@/models';
import { baseUrl } from '@/services/config';
import { getSession } from 'next-auth/react';
import { IGetLocationsPayload } from './interfaces';

export const getLocationsServices = async (payload: IGetLocationsPayload) => {
	const session = (await getSession()) as unknown as ISession | null;

	try {
		const response = await fetch(
			`${baseUrl}/api/organizations/${payload.organizationId}/sedes/`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${session?.id}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error('Error al obtener las ubicaciones');
		}

		const responseJson: ILocation = await response.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};
