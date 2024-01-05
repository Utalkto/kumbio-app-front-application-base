import { useState } from 'react';
import { useOnBoardingForm } from '..';

const steps = [
	{
		title: 'Negocio',
	},
	{
		title: 'Horario',
	},
	{
		title: 'Servicio',
	},
];

export const useOnBoarding = () => {
	const {
		onBoardingFormInitialValues,
		onBoardingFormYupSchema,
		onSubmit,
		open,
		setOpen,
	} = useOnBoardingForm();

	return {
		steps,
		onBoardingFormInitialValues,
		onSubmit,
		onBoardingFormYupSchema,
		open,
		setOpen,
	};
};
