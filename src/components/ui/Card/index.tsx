import React, { FC, PropsWithChildren } from 'react';
import { CardProps, Card as MuiCard } from '@mui/material';

export const Card: FC<PropsWithChildren<CardProps>> = ({
	children,
	...props
}) => {
	return (
		<MuiCard
			{...props}
			sx={{
				borderRadius: '1rem',
			}}
		>
			{children}
		</MuiCard>
	);
};
