import { IOnboardingForm } from './interfaces';

const onBoardingFormInitialValues: IOnboardingForm = {
	bussines: {
		name: '',
		sector: 0,
		howDidYouKnow: 0,
		country: 0,
	},
	dayWorks: [],
	service: {
		name: '',
		duration: '',
		price: 0,
	},
};

export const useOnBoardingForm = () => {
	return { onBoardingFormInitialValues };
};
