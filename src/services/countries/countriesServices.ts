import { baseUrl } from '../config';
import { ICountryResponse } from './interfaces';

export const getCountriesService = async () => {
	try {
		const countriesResponse = await fetch(baseUrl + '/api/countries/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!countriesResponse.ok) {
			throw new Error('Error al iniciar sesión');
		}

		const responseJson: ICountryResponse[] = await countriesResponse.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};
