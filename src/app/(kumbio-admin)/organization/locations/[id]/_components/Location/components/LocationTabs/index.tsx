'use client';

import { Stack, Tab, Tabs } from '@mui/material';
import { FC } from 'react';
import { Props } from './interfaces';

export const LocationTabs: FC<Props> = ({ activeTab, handleChange }) => {
	return (
		<Stack sx={{ borderBottom: 1, borderColor: 'divider' }}>
			<Tabs
				value={activeTab}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons="auto"
			>
				<Tab label="Detalles" />
				<Tab label="Horarios" />
				<Tab label="Servicios" />
				<Tab label="Profesionales" />
			</Tabs>
		</Stack>
	);
};
