import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useLoginUserMutation } from "@/store/api";
import { ILoginFormValues } from "@/interfaces/user";
import { CookieService } from "@/services";





const loginFormInitialValues: ILoginFormValues = {
	email: '',
	password: '',
	rememberMe: false,
};

type ErrorResponse = {
	non_field_errors?:  string[]
}

export const useLoginForm = () => {
	const router = useRouter();

	const [ onLogin ] = useLoginUserMutation();
	const [isLoading, setisLoanding] = useState(false);
	const [errs, setErrs] = useState<ErrorResponse>();


	const onLoginUser = async (values: ILoginFormValues) => {
		setisLoanding(true);

		onLogin(values)
		.unwrap()
		.then((resp)  => {
			CookieService.saveCookie('token', resp.access_token);
			router.push('/dashboard');
		})
		.catch((err: { data: ErrorResponse, status: number }) => {
			
			setErrs(err.data);
			setisLoanding(false);
		});
	};

	const resetErrs = () => {
		setErrs(undefined);
	}

	return {
		loginFormInitialValues,
		isLoading,
		errs,
		onLoginUser,
		resetErrs
	};
};
