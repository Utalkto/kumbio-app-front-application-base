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
	const { onBoardingFormInitialValues, onBoardingFormYupSchema, onSubmit } =
		useOnBoardingForm();

	return {
		steps,
		onBoardingFormInitialValues,
		onSubmit,
		onBoardingFormYupSchema,
	};
};
