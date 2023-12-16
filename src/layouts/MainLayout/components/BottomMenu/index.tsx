'use client';

import { BRAND_COLORS } from '@/constants/brandColors';
import { useBottomMenu } from '@/hooks';
import {
	AccountBalance,
	Business,
	CalendarToday,
	Dashboard,
	Favorite,
	LocationCity,
	People,
} from '@mui/icons-material';
import {
	BottomNavigation,
	BottomNavigationAction,
	Menu,
	MenuItem,
	Paper,
} from '@mui/material';
import React from 'react';

export const BottomMenu = () => {
	const {
		value,
		open,
		anchorEl,
		handleClose,
		pathname,
		handleClick,
		onClickMenuItem,
	} = useBottomMenu();

	return (
		<Paper
			sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation showLabels value={value}>
				<BottomNavigationAction
					label="Resumen"
					icon={<Dashboard />}
					value={'dashboard'}
					onClick={() => onClickMenuItem('/dashboard')}
					sx={{
						padding: '0 4px',
						minWidth: 'auto',
						'& .MuiBottomNavigationAction-label': {
							fontSize: '0.7rem',
						},
					}}
				/>
				<BottomNavigationAction
					label="Calendario"
					icon={<CalendarToday />}
					value={'calendar'}
					onClick={() => onClickMenuItem('/calendar')}
					sx={{
						padding: '0 4px',
						minWidth: 'auto',
						'& .MuiBottomNavigationAction-label': {
							fontSize: '0.7rem',
						},
					}}
				/>
				<BottomNavigationAction
					label="Clientes"
					icon={<People />}
					onClick={() => onClickMenuItem('/clients')}
					value={'clients'}
					sx={{
						padding: '0 4px',
						minWidth: 'auto',
						'& .MuiBottomNavigationAction-label': {
							fontSize: '0.7rem',
						},
					}}
				/>
				<BottomNavigationAction
					label="Transacciones"
					icon={<AccountBalance />}
					onClick={() => onClickMenuItem('/transactions')}
					value={'transactions'}
					sx={{
						padding: '0 4px',
						minWidth: 'auto',
						'& .MuiBottomNavigationAction-label': {
							fontSize: '0.7rem',
						},
					}}
				/>
				<BottomNavigationAction
					label="Organización"
					icon={<Business />}
					value={'organization'}
					onClick={handleClick}
					sx={{
						padding: '0 4px',
						minWidth: 'auto',
						'& .MuiBottomNavigationAction-label': {
							fontSize: '0.7rem',
						},
					}}
				/>
			</BottomNavigation>

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem
					onClick={() => onClickMenuItem('/organization/general')}
					sx={{
						minWidth: 'auto',
						fontSize: '0.9rem',
						color:
							pathname === '/organization/general'
								? BRAND_COLORS.primary
								: 'inherit',
					}}
				>
					General
				</MenuItem>
				<MenuItem
					onClick={() => onClickMenuItem('/organization/locations')}
					sx={{
						minWidth: 'auto',
						fontSize: '0.9rem',

						color:
							pathname === '/organization/locations'
								? BRAND_COLORS.primary
								: 'inherit',
					}}
				>
					Sedes
				</MenuItem>
				<MenuItem
					onClick={() => onClickMenuItem('/organization/services')}
					sx={{
						minWidth: 'auto',
						fontSize: '0.9rem',

						color:
							pathname === '/organization/services'
								? BRAND_COLORS.primary
								: 'inherit',
					}}
				>
					Servicios
				</MenuItem>
				<MenuItem
					onClick={() => onClickMenuItem('/organization/professionals')}
					sx={{
						minWidth: 'auto',
						fontSize: '0.9rem',

						color:
							pathname === '/organization/professionals'
								? BRAND_COLORS.primary
								: 'inherit',
					}}
				>
					Profesionales
				</MenuItem>
			</Menu>
		</Paper>
	);
};
