import { HeroService, ServicesTable } from '@/components';
import { Stack } from '@mui/material';
import React from 'react';

const ServicesPage = () => {
	return (
		<Stack width={'100%'} gap={2}>
			<HeroService />
			<ServicesTable />
		</Stack>
	);
};

export default ServicesPage;
