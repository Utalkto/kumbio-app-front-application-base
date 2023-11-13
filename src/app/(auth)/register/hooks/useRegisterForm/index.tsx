import { IRegisterFormValues } from './interfaces';

const registerFormInitialValues: IRegisterFormValues = {
	organizationName: '',
	sector: 0,
	email: '',
	password: '',
	country: '',
};

export const useRegisterForm = () => {
	const onRegisterUser = async (values: IRegisterFormValues) => {};

	return {
		registerFormInitialValues,

		onRegisterUser,
	};
};
