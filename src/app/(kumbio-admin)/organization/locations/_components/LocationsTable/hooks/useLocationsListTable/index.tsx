import { LOCATIONS_MOCK } from '@/mocks';
import { Theme, useMediaQuery } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { IRowLocation } from './interfaces';

const rows: IRowLocation[] = LOCATIONS_MOCK.map((location) => {
	return {
		id: location.id,
		name: location.name,
		address: location.address,
		phone: location.phone,
		description: location.description,
		actions: 'actions',
	};
});

export const useLocationsListTable = () => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('sm')
	);

	const router = useRouter();

	const locatiosColumns: GridColDef[] = [
		{ field: 'name', headerName: 'Nombre', flex: !isMobile ? 1 : undefined },
		{
			field: 'address',
			headerName: 'Dirección',
			flex: !isMobile ? 1 : undefined,
		},
		{ field: 'phone', headerName: 'Teléfono', flex: !isMobile ? 1 : undefined },
		{
			field: 'description',
			headerName: 'Descripción',
			flex: !isMobile ? 1 : undefined,
		},
		{
			field: 'actions',
			headerName: 'Acciones',
			flex: !isMobile ? 1 : undefined,
		},
	];

	const onClickLocation = (id: string) => {
		router.push(`/organization/locations/${id}`);
	};

	return { rows, locatiosColumns, onClickLocation };
};
