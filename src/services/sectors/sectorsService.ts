import { baseUrl } from '../config';
import { IGetSectorsResponse } from './interfaces';

export const getSectorsService = async () => {
	try {
		const sectorsResponse = await fetch(baseUrl + '/api/sectors/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!sectorsResponse.ok) {
			throw new Error('Error al obtener los sectores');
		}

		const responseJson: IGetSectorsResponse[] = await sectorsResponse.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};
