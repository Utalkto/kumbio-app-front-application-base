import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

export const LoadingPage = () => {
	return (
		<Stack
			width={'100%'}
			justifyContent="center"
			alignItems="center"
			minHeight={'calc(100vh - 64px)'}
		>
			<CircularProgress />
		</Stack>
	);
};
