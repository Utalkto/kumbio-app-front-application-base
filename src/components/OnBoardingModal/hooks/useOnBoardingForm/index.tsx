import { onBoardingFormYupSchema } from '@/models';
import { IOnboardingForm } from '../../interfaces';
import { FormikHelpers } from 'formik';
import dayjs from 'dayjs';

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
			day: 'Lunes',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'Martes',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'Miércoles',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'Jueves',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'Viernes',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: true,
		},
		{
			day: 'Sábado',
			// Start hour at 8:00
			startHour: dayjs().hour(8).minute(0).second(0).millisecond(0).toDate(),
			// End hour at 17:00
			endHour: dayjs().hour(17).minute(0).second(0).millisecond(0).toDate(),
			active: false,
		},
		{
			day: 'Domingo',
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

			// const organizationResponse = await onBoardingOrganizationService({
			// 	name: values.bussines.name,
			// 	sub_sector: values.bussines.sector,
			// 	how_you_know_us: values.bussines.howDidYouKnow,
			// 	country: values.bussines.country,
			// });

			// const professionalResponse = await onBoardingProfessionalService({
			// 	organization_id: organizationResponse,
			// 	working_days: values.dayWorks.map((day) => ({
			// 		day: day.day,
			// 		start_hour: day.startHour,
			// 		end_hour: day.endHour,
			// 		active: day.active,
			// 	})),
			// 	service: {
			// 		name: values.service.name,
			// 		duration: values.service.duration,
			// 		price: values.service.price,
			// 	},
			// });
		}
	};

	return { onBoardingFormInitialValues, onBoardingFormYupSchema, onSubmit };
};
