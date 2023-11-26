import { useRouter } from 'next/navigation';
import { CookieService, loginUserService, ILoginPayload } from '@/services';
import { useMutation } from '@tanstack/react-query';
import { ILoginFormValues } from './interfaces';

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
		try {
			const response = await mutateAsync({
				email: values.email,
				password: values.password,
			});

			if (response) {
				CookieService.saveCookie('token', response.access_token);
				router.push('/dashboard');
			}
		} catch (error) {}
	};

	return {
		loginFormInitialValues,
		isPending,
		isError,
		onLoginUser,
	};
};
