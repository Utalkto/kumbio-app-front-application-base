'use client';

import { Button, TextInput } from '@/components';
import { Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

export const Hero = () => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('sm')
	);

	return (
		<>
			<Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
				<Typography variant="h4" component="h1" fontWeight={600}>
					Sedes
				</Typography>
				<Button variant="contained">+ Agregar Sede</Button>
			</Stack>
			<Stack width={isMobile ? '100%' : 'fit-content'}>
				<TextInput type="search" label="Buscar sede" />
			</Stack>
		</>
	);
};
