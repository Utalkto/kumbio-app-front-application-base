import { onBoardingFormYupSchema } from '@/models';
import { IOnboardingForm } from '../../interfaces';
import { FormikHelpers } from 'formik';
import dayjs from 'dayjs';
import {
	onBoardingOrganizationService,
	onBoardingProfessionalService,
	onBoardingServiceService,
} from '@/services';
import { useState } from 'react';

const onBoardingFormInitialValues: IOnboardingForm = {
	step: 0,
	completedSteps: {},
	bussines: {
		name: '',
		sector: 0,
		howDidYouKnow: '-1',
		country: 0,
	},
	dayWorks: [
		{
			day: 'MONDAY',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'TUESDAY',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'WEDNESDAY',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'THURSDAY',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'FRIDAY',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'SATURDAY',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: false,
		},
		{
			day: 'SUNDAY',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: false,
		},
	],
	service: {
		name: '',
		duration: 15,
		price: 0,
	},
};

export const useOnBoardingForm = () => {
	const [open, setOpen] = useState(true);
	const onSubmit = async (
		values: IOnboardingForm,
		formikHelpers: FormikHelpers<IOnboardingForm>
	) => {
		if (values.step === 0) {
			formikHelpers.setFieldValue('step', 1);
			formikHelpers.setFieldValue('completedSteps.0', true);

			return;
		}

		if (values.step === 1) {
			formikHelpers.setFieldValue('step', 2);
			formikHelpers.setFieldValue('completedSteps.1', true);

			return;
		}

		if (values.step === 2) {
			formikHelpers.setFieldValue('step', 3);
			formikHelpers.setFieldValue('completedSteps.2', true);

			const organizationResponse = await onBoardingOrganizationService({
				name: values.bussines.name,
				sub_sector: values.bussines.sector,
				how_you_know_us: values.bussines.howDidYouKnow,
				country: values.bussines.country,
			});

			const professionalResponse = await onBoardingProfessionalService({
				sede_pk: organizationResponse.organization_sedes[0].id,
				professional_schedule: values.dayWorks.map((day) => ({
					day: day.day,
					hour_init: dayjs(day.startHour).format('HH:mm'),
					hour_end: dayjs(day.endHour).format('HH:mm'),
				})),
			});

			await onBoardingServiceService({
				service: {
					name: values.service.name,
					price: String(values.service.price),
					duration: values.service.duration,
				},
				sede_pk: organizationResponse.organization_sedes[0].id,
				professionalId: professionalResponse.professional_pk,
			});

			setOpen(false);
		}
	};

	return {
		onBoardingFormInitialValues,
		onBoardingFormYupSchema,
		onSubmit,
		open,
		setOpen,
	};
};
