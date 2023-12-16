import { IUser } from '@/interfaces';

export interface ILoginPayload {
	email: string;
	password: string;
}

export interface ILoginResponse {
	user: IUser;
	access_token: string;
	organization_pk: number;
}
