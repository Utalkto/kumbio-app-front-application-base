import { getSession } from 'next-auth/react';
import { baseUrl } from '../config';
import {
	IOnboardingOrganizationServicePayload,
	IOnboardingOrganizationServiceResponse,
	IOnboardingProfessionalServicePayload,
	IOnboardingServiceServicePayload,
} from './interfaces';
import { ISession } from '@/interfaces';

export const onBoardingOrganizationService = async (
	payload: IOnboardingOrganizationServicePayload
) => {
	const session = (await getSession()) as unknown as ISession | null;

	try {
		const response = await fetch(
			`${baseUrl}/api/organizations/?tutorial=True`,
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
	try {
		const response = await fetch(
			`${baseUrl}/api/professionals/schedule-onboarding/?tutorial=True`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			}
		);

		if (!response.ok) {
			throw new Error('Error al crear el profesional');
		}

		const responseJson = await response.json();

		return responseJson;
	} catch (error) {
		throw error;
	}
};

export const onBoardingServiceService = async (
	payload: IOnboardingServiceServicePayload
) => {
	const { professionalId, service, sedePK } = payload;

	try {
		const response = await fetch(
			`${baseUrl}/api/professionals/${professionalId}/service/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...service,
					sede_pk: sedePK,
				}),
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
