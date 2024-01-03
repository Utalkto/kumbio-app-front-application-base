'use client';

import { IRowService } from '@/interfaces';
import { IService } from '@/models';
import { Theme, useMediaQuery } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';

export const useServicesTable = (services: IService[]) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('sm')
	);

	// const { data: locationsData } = useQuery({
	// 	queryKey: ['locations'],
	// 	queryFn: getLocationsServices,
	// 	initialData: locations,
	// });

	const router = useRouter();

	const rows: IRowService[] = services?.map((service) => {
		return {
			id: service.id,
			name: service.name,
			price: service.price,
			duration: service.duration,
		};
	});

	const servicesColumns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'Nombre',
			flex: 1,
			editable: false,
		},
		{
			field: 'price',
			headerName: 'Precio',
			flex: 1,
			editable: false,
		},
		{
			field: 'duration',
			headerName: 'Duración',
			flex: 1,
			editable: false,
		},
	];

	const onClickService = (id: string) => {
		router.push(`/organization/locations/${id}`);
	};

	return { rows, servicesColumns, onClickService };
};
