import { IRegisterUserPayload, registerUserService } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { IRegisterFormValues } from './interfaces';
import { FormikHelpers } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const registerFormInitialValues: IRegisterFormValues = {
	first_name: '',
	last_name: '',
	phone_number: '',
	email: '',
	password: '',
};

export const useRegisterForm = () => {
	const { mutateAsync, isPending, isError } = useMutation({
		mutationFn: (payload: IRegisterUserPayload) => registerUserService(payload),
	});
	const router = useRouter();

	const onRegisterUser = async (
		values: IRegisterFormValues,
		formikHelpers: FormikHelpers<IRegisterFormValues>
	) => {
		try {
			const response = await mutateAsync(values);
			if (response.ok && response.data) {
				const response = await signIn('credentials', {
					email: values.email,
					password: values.password,
				});

				if (!response?.error) {
					router.replace('/dashboard', { scroll: false });

					return;
				}
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
