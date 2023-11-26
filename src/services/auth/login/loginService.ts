import { baseUrl } from '@/services/config';
import { ILoginPayload, ILoginResponse } from './interfaces';

export const loginUserService = async (credentials: ILoginPayload) => {
	try {
		const authResponse = await fetch(baseUrl + '/api/users/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		if (!authResponse.ok) {
			console.log({ authResponse });
			throw new Error('Error al iniciar sesión');
		}

		const responseJson: ILoginResponse = await authResponse.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};
