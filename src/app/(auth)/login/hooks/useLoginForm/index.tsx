import { ILoginPayload } from '@/services';
import { ILoginFormValues } from './interfaces';
import { useStatus } from '@/hooks';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const loginFormInitialValues: ILoginFormValues = {
	email: '',
	password: '',
	rememberMe: false,
};
export const useLoginForm = () => {
	const { status, onChangeStatus } = useStatus();
	const router = useRouter();

	const onLoginUser = async (values: ILoginPayload) => {
		onChangeStatus('pending');

		try {
			const response = await signIn('credentials', {
				email: values.email,
				password: values.password,
			});

			if (!response?.error) {
				onChangeStatus('success');

				router.replace('/dashboard', { scroll: false });

				return;
			}
		} catch (error) {
			onChangeStatus('error');
		} finally {
			onChangeStatus('idle');
		}
	};

	return {
		loginFormInitialValues,
		status,
		onLoginUser,
	};
};
