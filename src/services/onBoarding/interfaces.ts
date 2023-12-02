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
}

export interface IOnboardingProfessionalServicePayload {
	professional_schedule: IProfessionalSchedule[];
	sede_pk: number;
}

interface IProfessionalSchedule {
	day: IDayWorks;
	startHour: Date;
	endHour: Date;
}

type IDayWorks =
	| 'Lunes'
	| 'Martes'
	| 'Miércoles'
	| 'Jueves'
	| 'Viernes'
	| 'Sábado'
	| 'Domingo';

export interface IOnboardingServiceServicePayload {
	professionalId: number;
	service: IService;
	sedePK: number;
}

interface IService {
	name: string;
	price: string;
	duration: number;
}
