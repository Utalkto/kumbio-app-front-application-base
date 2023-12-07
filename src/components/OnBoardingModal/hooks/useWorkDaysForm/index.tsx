import { useOnBoardingFormContext } from '..';

const DAY_WORKS = {
	MONDAY: 'Lunes',
	TUESDAY: 'Martes',
	WEDNESDAY: 'Miércoles',
	THURSDAY: 'Jueves',
	FRIDAY: 'Viernes',
	SATURDAY: 'Sábado',
	SUNDAY: 'Domingo',
};

export const useWorkDaysForm = () => {
	const {
		values,
		handleChange,
		handleBlur,
		touched,
		errors,
		setFieldError,
		setErrors,
	} = useOnBoardingFormContext();

	return {
		values,
		handleChange,
		handleBlur,
		touched,
		errors,
		setFieldError,
		setErrors,
		DAY_WORKS,
	};
};
