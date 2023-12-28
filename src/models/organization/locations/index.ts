import { IDayWorks } from '..';

export interface ILocation {
	id: number;
	created: Date;
	modified: Date;
	name: string;
	description: string | null;
	sede_type: string;
	address: string;
	maps_url: string | null;
	phone: string | null;
	phone_aux: string | null;
	organization: number;
}

export interface ICreateLocation {
	location: ICreateLocationLocation;

	professionals: ICreateLocationProfessional[];
	isAddingNewProfessional: boolean;
	professionalToAdd: ICreateLocationProfessional;
}

interface ICreateLocationLocation {
	name: string;
	dayWorks: IDayWorks[];
}

export interface ICreateLocationProfessional {
	user_data: {
		first_name: string;
		last_name: string;
		email: string;
		phone_number: string;
		user_pk: number;
	};
	sede_pk: number;
	service_pk: number;
	description: string;
	how_you_know_us: string;
}
