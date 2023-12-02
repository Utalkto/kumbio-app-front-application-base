import { useFormikContext } from 'formik';
import { IOnboardingForm } from '../../interfaces';

export const useOnBoardingFormContext = () => {
	const onBoardingFormContext = useFormikContext<IOnboardingForm>();

	return onBoardingFormContext;
};
