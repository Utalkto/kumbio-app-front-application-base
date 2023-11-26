import { useRouter } from 'next/navigation';
import { CookieService, loginUserService, ILoginPayload } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { ILoginFormValues } from './interfaces';
import { signIn } from 'next-auth/react';

const loginFormInitialValues: ILoginFormValues = {
	email: '',
	password: '',
	rememberMe: false,
};
export const useLoginForm = () => {
	const router = useRouter();

	const { mutateAsync, isPending, isError } = useMutation({
		mutationFn: (loginPayload: ILoginPayload) => loginUserService(loginPayload),
	});

	const onLoginUser = async (values: ILoginFormValues) => {
		const response = await signIn('credentials', {
			email: values.email,
			password: values.password,
			callbackUrl: `${window.location.origin}/dashboard`,
		});

		console.log({ response });

		if (!response?.error) {
			router.push('/dashboard');
		}
		// try {
		// 	const response = await mutateAsync({
		// 		email: values.email,
		// 		password: values.password,
		// 	});

		// 	if (response) {
		// 		CookieService.saveCookie('token', response.access_token);
		// 		router.push('/dashboard');
		// 	}
		// } catch (error) {}
	};

	return {
		loginFormInitialValues,
		isPending,
		isError,
		onLoginUser,
	};
};
