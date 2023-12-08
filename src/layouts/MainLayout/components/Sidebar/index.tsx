'use client';

import React, { useContext } from 'react';
import { Drawer } from '@/components';
import {
	Collapse,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
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
	People,
	Settings,
	Work,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutContext } from '@/context/LayoutContext';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
	const {
		isOpenDrawer,
		isOpenOrganization,
		toggleIsOpenDrawer,
		toggleIsOpenOrganization,
	} = useContext(LayoutContext);
	const pathname = usePathname();
	return (
		<Drawer
			open={isOpenDrawer}
			onClose={toggleIsOpenDrawer}
			onOpen={toggleIsOpenDrawer}
		>
			<List>
				<Stack width={'100%'} alignItems={'center'}>
					<Image
						src={'/kumbio-logo.png'}
						width={100}
						height={50}
						alt="Logo"
						loading="lazy"
						style={{
							objectFit: 'contain',
						}}
					/>
				</Stack>
				<Link href={'/dashboard'}>
					<ListItem disablePadding>
						<ListItemButton selected={pathname === '/dashboard'}>
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
						<ListItemButton selected={pathname === '/calendar'}>
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
						<ListItemButton selected={pathname === '/clients'}>
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
						<ListItemButton selected={pathname === '/transactions'}>
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
						<ListItemButton>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary={'Ajustes'} />
						</ListItemButton>
					</ListItem>
				</Link>
			</List>
		</Drawer>
	);
};
