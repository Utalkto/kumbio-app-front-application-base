'use client';

import { Button } from '@/components/ui';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';

export const Hero = () => {
	const router = useRouter();

	return (
		<>
			<Stack width={'100%'} direction={'row'} justifyContent={'space-between'}>
				<Typography
					variant="h4"
					component="h1"
					fontWeight={600}
					color="primary"
				>
					Sedes
				</Typography>
				<Button
					variant="contained"
					onClick={() => router.push('/organization/locations/create')}
				>
					+ Agregar Sede
				</Button>
			</Stack>
		</>
	);
};
