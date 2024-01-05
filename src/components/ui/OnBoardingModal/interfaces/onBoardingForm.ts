export interface IOnboardingForm {
	step: number;
	completedSteps: {
		[k: number]: boolean;
	};
	bussines: IOnboardingFormBussines;
	dayWorks: IOnboardingFormDayWorks[];
	service: IOnboardingFormService;
}

export interface IOnboardingFormBussines {
	name: string;
	sector: number;
	howDidYouKnow: string;
	country: number;
}

export interface IOnboardingFormDayWorks {
	day: IDayWorks;
	startHour: Date;
	endHour: Date;
	is_working: boolean;
}

export type IDayWorks =
	| 'MONDAY'
	| 'TUESDAY'
	| 'WEDNESDAY'
	| 'THURSDAY'
	| 'FRIDAY'
	| 'SATURDAY'
	| 'SUNDAY';

export interface IOnboardingFormService {
	name: string;
	duration: number;
	price: number;
}
