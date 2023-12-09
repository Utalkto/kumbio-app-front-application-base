import React from 'react';
import { Hero, LocationsTable } from './_components';
import { Container } from '@mui/material';

const LocationsPage = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
		>
			<Hero />
			<LocationsTable />
		</Container>
	);
};

export default LocationsPage;
