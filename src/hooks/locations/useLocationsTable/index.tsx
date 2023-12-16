import { Theme, useMediaQuery } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { IRowLocation } from '@/interfaces';
import { useQuery } from '@tanstack/react-query';
import { getLocationsServices } from '@/services';
import { ILocation } from '@/models';

export const useLocationsListTable = (locations: ILocation[]) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('sm')
	);
	const { data: locationsData } = useQuery({
		queryKey: ['locations'],
		queryFn: getLocationsServices,
		initialData: locations,
	});

	const router = useRouter();

	const rows: IRowLocation[] = locationsData?.map((location) => {
		return {
			id: location.id,
			name: location.name,
			address: location.address,
			phone: location.phone,
			description: location.description,
		};
	});

	const locatiosColumns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'Nombre',
			flex: !isMobile ? 1 : undefined,
			editable: false,
		},
		{
			field: 'address',
			headerName: 'Dirección',
			flex: !isMobile ? 1 : undefined,
			editable: false,
		},
		{
			field: 'phone',
			headerName: 'Teléfono',
			flex: !isMobile ? 1 : undefined,
			editable: false,
		},
		{
			field: 'description',
			headerName: 'Descripción',
			flex: !isMobile ? 1 : undefined,
			editable: false,
		},
	];

	const onClickLocation = (id: string) => {
		router.push(`/organization/locations/${id}`);
	};

	return { rows, locatiosColumns, onClickLocation };
};
