import { baseUrl } from '../config';

export const getOrganizationServices = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/organizations/id`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Error al obtener la organización');
		}
		const responseJson = await response.json();
		return responseJson;
	} catch (error) {
		throw error;
	}
};
