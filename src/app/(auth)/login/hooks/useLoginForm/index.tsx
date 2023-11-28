import { useRouter } from 'next/navigation';
import { ILoginPayload } from '@/services';
import { ILoginFormValues } from './interfaces';
import { signIn } from 'next-auth/react';
import { useStatus } from '@/hooks';

const loginFormInitialValues: ILoginFormValues = {
	email: '',
	password: '',
	rememberMe: false,
};
export const useLoginForm = () => {
	const router = useRouter();
	const { status, onChangeStatus } = useStatus();

	const onLoginUser = async (values: ILoginPayload) => {
		onChangeStatus('pending');

		try {
			const response = await signIn('credentials', {
				email: values.email,
				password: values.password,
				callbackUrl: `${window.location.origin}/dashboard`,
			});

			if (!response?.error) {
				onChangeStatus('success');

				router.push('/dashboard');
			}
		} catch (error) {
			onChangeStatus('error');
		}
	};

	return {
		loginFormInitialValues,
		status,
		onLoginUser,
	};
};
