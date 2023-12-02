import { getCountriesService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useGetCountries = () => {
	const query = useQuery({
		queryKey: ['countries'],
		queryFn: getCountriesService,
	});

	return query;
};
