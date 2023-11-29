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
		title: 'Servicios',
	},
];

export const useOnBoarding = () => {
	const [activeStep] = useState<number>(0);
	const [completed] = useState<{
		[k: number]: boolean;
	}>({});

	const { onBoardingFormInitialValues } = useOnBoardingForm();

	return {
		steps,
		activeStep,
		completed,
	};
};
