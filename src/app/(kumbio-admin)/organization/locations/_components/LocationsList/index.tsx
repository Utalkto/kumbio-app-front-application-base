'use client';

import { LOCATIONS_MOCK } from '@/mocks';
import { Grid } from '@mui/material';
import React from 'react';
import { LocationCard } from './components';

export const LocationsList = () => {
	return (
		<Grid container spacing={2}>
			{LOCATIONS_MOCK.map((location) => {
				return (
					<Grid item xs={12} sm={6} md={4} lg={4} key={location.id}>
						<LocationCard location={location} />
					</Grid>
				);
			})}
		</Grid>
	);
};
