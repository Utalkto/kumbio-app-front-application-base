'use client';

import { IRowService } from '@/interfaces';
import { IService } from '@/models';
import { getOrganizationServices } from '@/services/services';
import { GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useServicesTable = (services: IService[]) => {
	const { data: servicesData } = useQuery({
		queryKey: ['services'],
		queryFn: getOrganizationServices,
		initialData: services,
	});

	const router = useRouter();

	const rows: IRowService[] = servicesData?.map((service) => {
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
		router.push(`/organization/services/${id}`);
	};

	return { servicesData, rows, servicesColumns, onClickService };
};
