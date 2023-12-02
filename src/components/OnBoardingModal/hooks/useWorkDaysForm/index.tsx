import { useOnBoardingFormContext } from '..';

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
	};
};
