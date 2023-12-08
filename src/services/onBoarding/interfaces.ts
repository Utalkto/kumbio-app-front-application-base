export interface IOnboardingOrganizationServicePayload {
	name: string;
	sub_sector: number;
	how_you_know_us: string;
	country: number;
}

export interface IOnboardingOrganizationServiceResponse {
	name: string;
	sub_sector: number;
	description: string;
	country: number;
	currency: string;
	how_you_know_us: string;
	id: number;
	organization_sedes: IOrganizationSedes[];
}

interface IOrganizationSedes {
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

export interface IOnboardingProfessionalServicePayload {
	professional_schedule: IProfessionalSchedule[];
	sede_pk: number;
}

export interface IOnboardingProfessionalServiceResponse {
	professional_schedule: IProfessionalSchedule[];
	sede_pk: number;
	professional_pk: number;
}
interface IProfessionalSchedule {
	day: IDayWorks;
	hour_init: string;
	hour_end: string;
}

type IDayWorks =
	| 'MONDAY'
	| 'TUESDAY'
	| 'WEDNESDAY'
	| 'THURSDAY'
	| 'FRIDAY'
	| 'SATURDAY'
	| 'SUNDAY';

export interface IOnboardingServiceServicePayload {
	professionalId: number;
	service: IService;
	sede_pk: number;
}

interface IService {
	name: string;
	price: string;
	duration: number;
}
