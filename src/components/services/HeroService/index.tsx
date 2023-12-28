'use client';

import { Button } from '@/components/ui/Button';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export const HeroService = () => {
	const router = useRouter();

	return (
		<Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
			<Typography variant="h4" component="h1" fontWeight={600} color="primary">
				Servicios
			</Typography>
			<Button
				variant="contained"
				onClick={() => router.push('/organization/services/create')}
			>
				+ Agregar Servicio
			</Button>
		</Stack>
	);
};
