import { useRouter } from 'next/navigation';
import {
	CookieService,
	IRegisterUserPayload,
	registerUserService,
} from '@/services';
import { useMutation } from '@tanstack/react-query';
import { IRegisterFormValues } from './interfaces';
import { FormikHelpers } from 'formik';

const registerFormInitialValues: IRegisterFormValues = {
	first_name: '',
	last_name: '',
	phone_number: '',
	email: '',
	password: '',
};

export const useRegisterForm = () => {
	const router = useRouter();

	const { mutateAsync, isPending, isError } = useMutation({
		mutationFn: (payload: IRegisterUserPayload) => registerUserService(payload),
	});

	const onRegisterUser = async (
		values: IRegisterFormValues,
		formikHelpers: FormikHelpers<IRegisterFormValues>
	) => {
		try {
			const response = await mutateAsync(values);
			if (response.ok && response.data) {
				CookieService.saveCookie('token', response.data.access_token);
				router.push('/dashboard');
			}

			if (!response.ok && response.error) {
				Object.entries(response.error).forEach(([key, value]) => {
					formikHelpers.setFieldError(key, value[0]);
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	return {
		registerFormInitialValues,
		onRegisterUser,
		isPending,
		isError,
	};
};
