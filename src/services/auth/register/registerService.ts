import { baseUrl } from '@/services/config';
import {
	IRegisterUserPayload,
	IRegisterUserResponse,
	IRegisterUserResponseErrors,
} from './interfaces';

export const registerUserService = async (payload: IRegisterUserPayload) => {
	try {
		const authResponse = await fetch(baseUrl + '/api/users/signup/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		if (!authResponse.ok) {
			const errorResponse: IRegisterUserResponseErrors =
				await authResponse.json();

			return {
				ok: false,
				error: errorResponse,
				data: null,
			};
		}

		const responseJson: IRegisterUserResponse = await authResponse.json();

		return {
			ok: true,
			error: null,
			data: responseJson,
		};
	} catch (error) {
		throw error;
	}
};
