import { baseUrl } from '@/services/config';
import { ILoginPayload, ILoginResponse } from './interfaces';

export const loginUserService = async (credentials: ILoginPayload) => {
	try {
		const authResponse = await fetch(encodeURI(baseUrl + '/api/users/login/'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		if (!authResponse.ok) {
			return null;
		}

		const responseJson: ILoginResponse = await authResponse.json();

		return responseJson;
	} catch (error) {
		return null;
	}
};
