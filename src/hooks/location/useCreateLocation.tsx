'use client';

import { ICreateLocation } from '@/models';
import dayjs from 'dayjs';
import { FormikHelpers } from 'formik';

const createLocationInitialForm: ICreateLocation = {
	step: 0,
	completedSteps: {},
	location: {
		name: '',
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
	},
};

const steps = [
	{ title: 'Sede' },
	{ title: 'Profesional' },
	{ title: 'Servicio' },
];

export const useCreateLocation = () => {
	const onSubmit = (
		values: ICreateLocation,
		formikHelpers: FormikHelpers<ICreateLocation>
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
	};

	return { createLocationInitialForm, steps, onSubmit };
};
