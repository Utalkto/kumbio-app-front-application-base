import { ILocation } from '@/models';
import { useFormikContext } from 'formik';

export const useLocationForm = (location: ILocation) => {
	const locationForm = useFormikContext<ILocation>();

	return {
		locationForm,
	};
};
