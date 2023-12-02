import { getSectorsService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useGetSectors = () => {
	const query = useQuery({
		queryKey: ['sectors'],
		queryFn: getSectorsService,
	});

	return query;
};
