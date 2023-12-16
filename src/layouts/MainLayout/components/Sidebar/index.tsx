'use client';

import React, { useContext } from 'react';
import {
	Box,
	Collapse,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
	Stack,
} from '@mui/material';
import {
	AccountBalance,
	Business,
	CalendarToday,
	Dashboard,
	ExpandLess,
	ExpandMore,
	Group,
	LocationCity,
	Logout,
	People,
	Settings,
	Work,
} from '@mui/icons-material';
import Link from 'next/link';
import { LayoutContext } from '@/context/LayoutContext';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

export const Sidebar = () => {
	const { isOpenOrganization, toggleIsOpenDrawer, toggleIsOpenOrganization } =
		useContext(LayoutContext);
	const pathname = usePathname();

	return (
		<Box component={Paper} elevation={2} minHeight={'calc(100vh - 64px)'}>
			<List>
				<Link href={'/dashboard'}>
					<ListItem disablePadding>
						<ListItemButton
							selected={pathname === '/dashboard'}
							onClick={toggleIsOpenDrawer}
						>
							<ListItemIcon>
								<Dashboard
									color={pathname === '/dashboard' ? 'primary' : 'inherit'}
								/>
							</ListItemIcon>
							<ListItemText primary={'Resumen'} />
						</ListItemButton>
					</ListItem>
				</Link>
				<Link href={'/calendar'}>
					<ListItem disablePadding>
						<ListItemButton
							selected={pathname === '/calendar'}
							onClick={toggleIsOpenDrawer}
						>
							<ListItemIcon>
								<CalendarToday
									color={pathname === '/calendar' ? 'primary' : 'inherit'}
								/>
							</ListItemIcon>
							<ListItemText primary={'Calendario'} />
						</ListItemButton>
					</ListItem>
				</Link>
				<Link href={'/clients'}>
					<ListItem disablePadding>
						<ListItemButton
							selected={pathname === '/clients'}
							onClick={toggleIsOpenDrawer}
						>
							<ListItemIcon>
								<People
									color={pathname === '/clients' ? 'primary' : 'inherit'}
								/>
							</ListItemIcon>
							<ListItemText primary={'Clientes'} />
						</ListItemButton>
					</ListItem>
				</Link>

				<Link href={'/transactions'}>
					<ListItem disablePadding>
						<ListItemButton
							selected={pathname === '/transactions'}
							onClick={toggleIsOpenDrawer}
						>
							<ListItemIcon>
								<AccountBalance
									color={pathname === '/transactions' ? 'primary' : 'inherit'}
								/>
							</ListItemIcon>
							<ListItemText primary={'Transacciones'} />
						</ListItemButton>
					</ListItem>
				</Link>
				<ListItem disablePadding color={'primary'}>
					<ListItemButton
						selected={pathname.includes('/organzation')}
						onClick={toggleIsOpenOrganization}
					>
						<ListItemIcon>
							<Business
								color={
									pathname.includes('/organzation') ? 'primary' : 'inherit'
								}
							/>
						</ListItemIcon>
						<ListItemText
							primary={'Organización'}
							color={'primary'}
							sx={{
								color: 'primary',
							}}
						/>
						{isOpenOrganization ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
				</ListItem>

				<Collapse in={isOpenOrganization} timeout="auto" unmountOnExit>
					<Link href={'/organization'}>
						<List disablePadding>
							<ListItemButton
								selected={pathname === '/organization'}
								sx={{ pl: 4 }}
								onClick={toggleIsOpenDrawer}
							>
								<ListItemIcon>
									<Business
										color={pathname === '/organization' ? 'primary' : 'inherit'}
									/>
								</ListItemIcon>
								<ListItemText primary="General" />
							</ListItemButton>
						</List>
					</Link>
					<Link href={'/organization/locations'}>
						<List disablePadding>
							<ListItemButton
								selected={pathname === '/organization/locations'}
								sx={{ pl: 4 }}
								onClick={toggleIsOpenDrawer}
							>
								<ListItemIcon>
									<LocationCity
										color={
											pathname === '/organization/locations'
												? 'primary'
												: 'inherit'
										}
									/>
								</ListItemIcon>
								<ListItemText primary="Sedes" />
							</ListItemButton>
						</List>
					</Link>
					<Link href={'/organization/services'}>
						<List disablePadding>
							<ListItemButton
								selected={pathname === '/organization/services'}
								sx={{ pl: 4 }}
								onClick={toggleIsOpenDrawer}
							>
								<ListItemIcon>
									<Work
										color={
											pathname === '/organization/services'
												? 'primary'
												: 'inherit'
										}
									/>
								</ListItemIcon>
								<ListItemText primary="Servicios" />
							</ListItemButton>
						</List>
					</Link>

					<Link href={'/organization/professionals'}>
						<List disablePadding>
							<ListItemButton
								selected={pathname === '/organization/professionals'}
								sx={{ pl: 4 }}
								onClick={toggleIsOpenDrawer}
							>
								<ListItemIcon>
									<Group
										color={
											pathname === '/organization/professionals'
												? 'primary'
												: 'inherit'
										}
									/>
								</ListItemIcon>
								<ListItemText primary="Profesionales" />
							</ListItemButton>
						</List>
					</Link>
				</Collapse>
				<Link href={'/settings'}>
					<ListItem disablePadding>
						<ListItemButton
							selected={pathname === '/settings'}
							onClick={toggleIsOpenDrawer}
						>
							<ListItemIcon>
								<Settings
									color={pathname === '/settings' ? 'primary' : 'inherit'}
								/>
							</ListItemIcon>
							<ListItemText primary={'Ajustes'} />
						</ListItemButton>
					</ListItem>
				</Link>
				<ListItem disablePadding>
					<ListItemButton onClick={() => signOut()}>
						<ListItemIcon>
							<Logout color={pathname === '/logout' ? 'primary' : 'inherit'} />
						</ListItemIcon>
						<ListItemText primary={'Cerrar sesión'} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
};
