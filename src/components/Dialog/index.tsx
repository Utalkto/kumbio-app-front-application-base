import { DialogProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Dialog as MuiDialog } from '@mui/material';

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
	children,
	...props
}) => {
	return (
		<MuiDialog
			{...props}
			fullWidth
			sx={{
				'& .MuiDialog-container': {
					alignItems: 'flex-start',
				},
				'& .MuiDialog-paper': {
					borderRadius: '1rem',
				},
			}}
		>
			{children}
		</MuiDialog>
	);
};
