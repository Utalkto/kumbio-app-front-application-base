import { useState } from 'react';

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

	return {
		steps,
		activeStep,
		completed,
	};
};
