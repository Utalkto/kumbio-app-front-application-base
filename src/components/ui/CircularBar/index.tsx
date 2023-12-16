import { CircularProgress, Stack } from '@mui/material';
import { FC } from 'react';
import { Props } from './interfaces';

export const CircularBar: FC<Props> = ({ size }) => {
	return (
		<Stack justifyContent={'center'} alignItems={'center'}>
			<CircularProgress size={size} />
		</Stack>
	);
};
