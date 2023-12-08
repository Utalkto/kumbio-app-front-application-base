'use client';

import React, { useContext } from 'react';
import { Props } from './interfaces';
import { FC } from 'react';
import { LayoutContext } from '@/context/LayoutContext';
import { Sidebar } from './components';

export const MainLayout: FC<Props> = ({ children }) => {
	const { toggleIsOpenDrawer } = useContext(LayoutContext);

	return (
		<>
			<Sidebar />
			<button onClick={toggleIsOpenDrawer}>Toggle Drawer</button>
			{children}
		</>
	);
};
