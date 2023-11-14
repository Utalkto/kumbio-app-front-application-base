import { ILoginFormValues } from './interfaces';

const loginFormInitialValues: ILoginFormValues = {
	email: '',
	password: '',
	rememberMe: false,
};

export const useLoginForm = () => {
	const onLoginUser = async (values: ILoginFormValues) => {};

	return {
		loginFormInitialValues,

		onLoginUser,
	};
};
