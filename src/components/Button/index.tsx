'use client';

import { Button as MuiButton } from '@mui/material';

import { FC } from 'react';
import { Props } from './interfaces';

export const Button: FC<Props> = ({ children, ...props }) => {
	return <MuiButton {...props}>{children}</MuiButton>;
};
