'use client';

import { LayoutContext } from '@/context/LayoutContext';
import { Menu } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import React, { useContext } from 'react';

export const Navbar = () => {
	const { toggleIsOpenDrawer } = useContext(LayoutContext);

	return (
		<Stack width={'100%'}>
			<AppBar position="static">
				<Toolbar>
					<IconButton onClick={toggleIsOpenDrawer}>
						<Menu
							sx={{
								color: 'white',
							}}
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Stack>
	);
};
