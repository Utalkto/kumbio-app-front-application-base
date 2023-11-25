import { useState } from "react";
import { useRouter } from 'next/navigation';
import { IRegisterFormValues, User } from "@/interfaces/user";
import { useRegisterUserMutation } from "@/store/api/auth";
import { CookieService } from "@/services";


const registerFormInitialValues: IRegisterFormValues = {
	first_name: '',
	last_name: '',
	phone_number: '',
	email: '',
	password: ''
};


type ErrorResponse = {
	first_name?: 		string[];
	last_name?: 		string[];
	phone_number?: 		string[];	
	email?: 			string[];
	password?:			string[];
};

export const useRegisterForm = () => {

	const router = useRouter();

	const [ registerUser ] = useRegisterUserMutation();
	const [isLoading, setisLoanding] = useState(false);
	const [errs, setErrs] = useState<ErrorResponse>();
	const [success, setSuccess] = useState(false);


	const onRegisterUser = async (values: IRegisterFormValues) => {
		setisLoanding(true);

		registerUser(values)
		.unwrap()
		.then((resp)  => {
			
			setSuccess(true);
			CookieService.saveCookie('token', resp.access_token);
		
			setTimeout(() => {
				setSuccess(false);
				console.log('resp 2', resp);
				router.push('/dashboard');

			}, 1000);
			
		})
		.catch((err: { data: ErrorResponse, status: number }) => {
			
			setErrs(err.data);
			setisLoanding(false);
		});
	};

	return {
		registerFormInitialValues,
		isLoading,
		errs,
		success,
		onRegisterUser,
	};
};
