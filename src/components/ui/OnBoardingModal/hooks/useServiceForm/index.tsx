import { useOnBoardingFormContext } from '..';

// Service Duration Options up to 3 hours in 15 minute increments starting at 15 minutes
const serviceDurationOptions = [
	{
		value: 15,
		label: '15 minutos',
	},
	{
		value: 30,
		label: '30 minutos',
	},
	{
		value: 45,
		label: '45 minutos',
	},
	{
		value: 60,
		label: '1 hora',
	},
	{
		value: 75,
		label: '1 hora 15 minutos',
	},
	{
		value: 90,
		label: '1 hora 30 minutos',
	},
	{
		value: 105,
		label: '1 hora 45 minutos',
	},
	{
		value: 120,
		label: '2 horas',
	},
	{
		value: 135,
		label: '2 horas 15 minutos',
	},
	{
		value: 150,
		label: '2 horas 30 minutos',
	},
	{
		value: 165,
		label: '2 horas 45 minutos',
	},
	{
		value: 180,
		label: '3 horas',
	},
];

export const useServiceForm = () => {
	const { values, handleChange, handleBlur, errors, touched } =
		useOnBoardingFormContext();

	return {
		values,
		handleChange,
		handleBlur,
		errors,
		touched,
		serviceDurationOptions,
	};
};
