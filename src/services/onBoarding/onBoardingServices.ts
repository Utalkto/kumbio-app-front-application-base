import { getSession } from 'next-auth/react';
import { baseUrl } from '../config';
import {
	IOnboardingOrganizationServicePayload,
	IOnboardingOrganizationServiceResponse,
	IOnboardingProfessionalServicePayload,
	IOnboardingProfessionalServiceResponse,
	IOnboardingServiceServicePayload,
} from './interfaces';
import { ISession } from '@/interfaces';

export const onBoardingOrganizationService = async (
	payload: IOnboardingOrganizationServicePayload
) => {
	const session = (await getSession()) as unknown as ISession | null;

	try {
		const response = await fetch(`${baseUrl}/api/organizations/?tutorial=1`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${session?.id}`,
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			throw new Error('Error al crear la organización');
		}

		const responseJson: IOnboardingOrganizationServiceResponse =
			await response.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};

export const onBoardingProfessionalService = async (
	payload: IOnboardingProfessionalServicePayload
) => {
	const session = (await getSession()) as unknown as ISession | null;

	try {
		const response = await fetch(
			`${baseUrl}/api/professionals/schedule-onboarding/?tutorial=True`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${session?.id}`,
				},
				body: JSON.stringify(payload),
			}
		);

		if (!response.ok) {
			throw new Error('Error al crear el profesional');
		}

		const responseJson: IOnboardingProfessionalServiceResponse =
			await response.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};

export const onBoardingServiceService = async (
	payload: IOnboardingServiceServicePayload
) => {
	const session = (await getSession()) as unknown as ISession | null;

	try {
		const response = await fetch(
			`${baseUrl}/api/professionals/${payload.professionalId}/service/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${session?.id}`,
				},
				body: JSON.stringify(payload),
			}
		);

		if (!response.ok) {
			throw new Error('Error al crear el servicio');
		}

		const responseJson = await response.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};
