import { IUser } from '@/interfaces';

export interface IRegisterUserPayload {
	first_name: string;
	last_name: string;
	phone_number: string;
	email: string;
	password: string;
}

export interface IRegisterUserResponse {
	user: IUser;
	access_token: string;
}

export interface IRegisterUserResponseErrors {
	firstName?: string[];
	lastName?: string[];
	phone_number?: string[];
	email?: string[];
	password?: string[];
}
