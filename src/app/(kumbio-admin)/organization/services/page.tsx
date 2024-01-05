import { HeroService, ServicesTable } from '@/components';
import { getOrganizationServices } from '@/services/services';
import { Stack } from '@mui/material';
import React from 'react';

const ServicesPage = async () => {
	const services = await getOrganizationServices();

	return (
		<Stack width={'100%'} gap={2}>
			<HeroService />
			<ServicesTable services={services} />
		</Stack>
	);
};

export default ServicesPage;
