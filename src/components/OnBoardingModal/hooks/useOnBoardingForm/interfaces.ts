export interface IOnboardingForm {
	bussines: IOnboardingFormBussines;
	dayWorks: IOnboardingFormDayWorks[];
	service: IOnboardingFormService;
}

export interface IOnboardingFormBussines {
	name: string;
	sector: number;
	howDidYouKnow: number;
	country: number;
}

export interface IOnboardingFormDayWorks {
	day: string;
	startHour: string;
	endHour: string;
}

export interface IOnboardingFormService {
	name: string;
	duration: string;
	price: number;
}
