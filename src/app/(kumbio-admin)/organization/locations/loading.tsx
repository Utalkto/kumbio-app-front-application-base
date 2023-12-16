import { CircularProgress, Stack } from '@mui/material';

export default function Loading() {
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
}
