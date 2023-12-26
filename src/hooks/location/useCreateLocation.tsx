'use client';

import { ICreateLocation } from '@/models';
import dayjs from 'dayjs';
import { FormikHelpers } from 'formik';
import { professionalsMock } from '../../mocks/professionals/index';

const createLocationInitialForm: ICreateLocation = {
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
	professionals: [],
	isAddingNewProfessional: false,
	professionalToAdd: {
		user_data: {
			first_name: '',
			last_name: '',
			email: '',
			phone_number: '',
			user_pk: Math.floor(Math.random() * 1000),
		},
		sede_pk: -1,
		service_pk: -1,
		description: '',
		how_you_know_us: '',
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
	) => {};

	return {
		createLocationInitialForm,
		steps,

		onSubmit,
		professionalsMock,
	};
};
