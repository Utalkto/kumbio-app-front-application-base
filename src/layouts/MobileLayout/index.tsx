'use client';

import React from 'react';
import { Props } from './interfaces';
import { FC } from 'react';

import { Navbar } from './components';
import { Stack } from '@mui/material';

export const MobileLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};
