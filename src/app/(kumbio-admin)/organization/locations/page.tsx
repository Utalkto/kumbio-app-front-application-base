import React from 'react';
import { getLocationsServices } from '@/services';
import { Hero, LocationsTable } from '@/components/locations';
import { Stack } from '@mui/material';

export default async function LocationsPag() {
	const locations = await getLocationsServices();

	return (
		<Stack width={'100%'} gap={2}>
			<Hero />

			<LocationsTable locations={locations} />
		</Stack>
	);
}
