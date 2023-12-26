import { ILoginPayload } from '@/services';
import { ILoginFormValues } from './interfaces';
import { useStatus } from '@/hooks';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

const loginFormInitialValues: ILoginFormValues = {
	email: '',
	password: '',
	rememberMe: false,
};
export const useLoginForm = () => {
	// Get error param
	const searchParams = useSearchParams();
	const error = searchParams.get('error');

	const { status, onChangeStatus } = useStatus(
		error === 'CredentialsSignin' ? 'error' : 'idle'
	);
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

			onChangeStatus('error');
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
