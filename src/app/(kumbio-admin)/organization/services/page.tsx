import { HeroService } from '@/components';
import { Stack } from '@mui/material';
import React from 'react';

const ServicesPage = () => {
	return (
		<Stack width={'100%'} gap={2}>
			<HeroService />
		</Stack>
	);
};

export default ServicesPage;
