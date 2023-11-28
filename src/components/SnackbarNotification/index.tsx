import { Snackbar, SnackbarProps } from '@mui/material';

import { FC, PropsWithChildren } from 'react';
export const SnackbarNotification: FC<PropsWithChildren<SnackbarProps>> = ({
	children,
	...props
}) => {
	return <Snackbar {...props}>{children}</Snackbar>;
};
