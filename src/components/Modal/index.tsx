import { Box, ModalProps, Modal as MuiModal } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { style } from './styles';

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	children,
	...props
}) => {
	return (
		<MuiModal {...props}>
			<Box sx={style}>{children}</Box>
		</MuiModal>
	);
};
