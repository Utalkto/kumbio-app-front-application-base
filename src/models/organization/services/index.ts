export interface IService {
	id: number;
	professionals: IServiceProfessional[];
	created: Date;
	modified: Date;
	name: string;
	duration: number;
	price: string;
	description: string | null;
	terms_and_conditions: string | null;
	sedes: number[];
}

export interface IServiceProfessional {
	id: number;
	full_name: string;
	created: Date;
	modified: Date;
	description: null;
	user: number;
	sede: number;
}
