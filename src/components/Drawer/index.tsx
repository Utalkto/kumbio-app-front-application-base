import { Box, SwipeableDrawer } from '@mui/material';
import React from 'react';
import { FC, PropsWithChildren } from 'react';
import { Props } from './interfaces';

export const Drawer: FC<PropsWithChildren<Props>> = ({
	children,
	...props
}) => {
	return (
		<SwipeableDrawer {...props}>
			<Box
				sx={{
					width:
						props.anchor === 'top' || props.anchor === 'bottom' ? 'auto' : 250,
				}}
				role="presentation"
				onKeyDown={props.onClose}
			>
				{children}
			</Box>
		</SwipeableDrawer>
	);
};
