import { useGetCountries } from '@/hooks';
import { useGetSectors } from '@/hooks/sectors/useGetSectors';
import { useOnBoardingFormContext } from '..';

const HOW_DID_YOU_FIND_US = [
	{
		label: 'Facebook',
		value: 'Facebook',
	},
	{
		label: 'Instagram',
		value: 'Instagram',
	},
	{
		label: 'Twitter',
		value: 'Twitter',
	},
	{
		label: 'Recomendación',
		value: 'Recommendation',
	},
	{
		label: 'Otro',
		value: 'Other',
	},
];

export const useOrganizationInfoForm = () => {
	const { values, handleChange, handleBlur, touched, errors } =
		useOnBoardingFormContext();

	const { data: countries, status: countriesStatus } = useGetCountries();

	const { data: sectors, status: sectorEstatus } = useGetSectors();

	return {
		values,
		handleChange,
		handleBlur,
		touched,
		errors,
		countries,
		countriesStatus,
		sectors,
		sectorEstatus,
		HOW_DID_YOU_FIND_US,
	};
};
