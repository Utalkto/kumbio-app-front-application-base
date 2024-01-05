'use client';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import {
	Box,
	CardContent,
	Container,
	Grid,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tabs,
	TextField,
	Typography,
	Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextInput } from '@/components/ui/TextInput';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Swiper } from '@/components/ui/Swiper';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from '@/components';

import { CreateClient } from '@/components/client/CreateClient';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} {...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function createDataT(
	id,
	fecha,
	serv_suministrados,
	profesional,
	estado_cita,
	estado_pago,
	pendiente_pagar,
	monto_adecuado,
	pagado
) {
	return {
		id,
		fecha,
		serv_suministrados,
		profesional,
		estado_cita,
		estado_pago,
		pendiente_pagar,
		monto_adecuado,
		pagado,
	};
}

const rows = [
	createDataT(
		'1',
		'10/10/2021',
		'cita medica',
		'Si',
		'Por realizar',
		'Pendiente',
		'100$',
		'100.99',
		'0'
	),
	createDataT(
		'2',
		'11/11/2021',
		'cita dental',
		'No',
		'Realizado',
		'Completado',
		'200$',
		'200.99',
		'1'
	),
	createDataT(
		'3',
		'12/12/2021',
		'examen fisico',
		'Si',
		'Por realizar',
		'Pendiente',
		'300$',
		'300.99',
		'0'
	),
];

const rowsdocuments = [
	{ nombre: 'Cedula de identidad', fecha_modificacion: '10/10/2021' },
	{ nombre: 'Cuentas legales', fecha_modificacion: '10/10/2022' },
	{ nombre: 'CPasaporte', fecha_modificacion: '10/10/2023' },
];

const ClientsPage = () => {
	const [numTab, setnumTab] = useState(0);
	const router = useRouter();

	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Container>
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="space-between"
					margin={1}
				>
					<Typography variant="h4" align="center">
						Clientes
					</Typography>

					<Box display="flex" justifyContent="center" paddingBottom={2}>
						<Button
							variant="contained"
							endIcon={<AddIcon />}
							color="primary"
							// onClick={() => router.push("/clients/create")}
							onClick={handleOpen}
						>
							Nuevo
						</Button>
					</Box>
				</Box>

				<CreateClient open={open} handleClose={handleClose} />

				<Grid container spacing={5}>
					{/* Sidebar 2  */}
					<Grid item md={3}>
						<Card>
							<CardContent>
								<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
									<SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
									<TextField label="Buscar" variant="standard" />
								</Box>
								<Button variant="text" sx={{ display: 'block', m: 0 }}>
									Cliente 1
								</Button>{' '}
								<Button variant="text" sx={{ display: 'block', m: 0 }}>
									Cliente 2
								</Button>{' '}
								<Button variant="text" sx={{ display: 'block', m: 0 }}>
									Cliente 3
								</Button>{' '}
								<Button variant="text" sx={{ display: 'block', m: 0 }}>
									Cliente 4
								</Button>{' '}
							</CardContent>
						</Card>
					</Grid>
					{/* Contenido principal */}
					<Grid item md={9}>
						<Card>
							<CardContent>
								<Box sx={{ width: '100%' }}>
									<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
										<Tabs
											value={numTab}
											// onChange={handleChange}
											aria-label="basic tabs example"
										>
											<Tab
												label="Informacion General"
												{...a11yProps(0)}
												onClick={() => setnumTab(0)}
											/>
											<Tab
												label="Registro de citas"
												{...a11yProps(1)}
												onClick={() => setnumTab(1)}
											/>
											<Tab
												label="Perfil de cliente"
												{...a11yProps(2)}
												onClick={() => setnumTab(2)}
											/>
											<Tab
												label="Documentos"
												{...a11yProps(3)}
												onClick={() => setnumTab(3)}
											/>
										</Tabs>
									</Box>
									{/* Informacion general */}
									<CustomTabPanel value={numTab} index={0}>
										<Grid container spacing={3}>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Id cliente" fullWidth></TextInput>
											</Grid>
											<Grid item md={5} mb={2}>
												<TextInput
													label="direccion de correo"
													fullWidth
												></TextInput>
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Comentarios adicionales" fullWidth />
											</Grid>
											<Grid item md={5} mb={2}>
												<TextInput label="Nombre" fullWidth />
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Apellido" fullWidth />
											</Grid>
											<Grid item md={5} mb={2}>
												<TextInput label="Cumpleaños" fullWidth />
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Genero" fullWidth />
											</Grid>
											<Grid item md={5} mb={2}>
												<TextInput
													label="Características del cliente"
													fullWidth
												/>
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="condiciones" fullWidth />
											</Grid>
											<Grid item md={5} mb={2}>
												<TextInput label="Tomando medicamentos" fullWidth />
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Emergencia" fullWidth />
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Telefono" fullWidth />
											</Grid>
											<Grid item md={5} mb={2}>
												<TextInput
													label="Nombre de contacto de emergencia"
													fullWidth
												/>
											</Grid>
										</Grid>
									</CustomTabPanel>

									<CustomTabPanel value={numTab} index={1}>
										<Grid container>
											<Grid item md={12}>
												<TableContainer component={Paper}>
													<Table
														sx={{ minWidth: 650 }}
														aria-label="simple table"
													>
														<TableHead>
															<TableRow>
																<TableCell>Id</TableCell>
																<TableCell align="left">Fecha</TableCell>
																<TableCell align="left" sx={{ m: 0 }}>
																	Serv. Suministrados
																</TableCell>
																<TableCell align="left">Profesional</TableCell>
																<TableCell align="left">Estado</TableCell>
																<TableCell align="left">Pago</TableCell>
																<TableCell align="left">
																	Pendiente/Pagar
																</TableCell>
																<TableCell align="left">
																	Monto adecuado
																</TableCell>
																<TableCell align="left">Pagado</TableCell>
															</TableRow>
														</TableHead>
														<TableBody>
															{rows.map((row) => (
																<TableRow
																	key={row.id}
																	sx={{
																		'&:last-child td, &:last-child th': {
																			border: 0,
																		},
																	}}
																>
																	<TableCell component="th" scope="row">
																		{row.id}
																	</TableCell>
																	<TableCell component="th" scope="row">
																		{row.fecha}
																	</TableCell>
																	<TableCell align="center">
																		{row.serv_suministrados}
																	</TableCell>
																	<TableCell align="center">
																		{row.profesional}
																	</TableCell>
																	<TableCell align="center">
																		{row.estado_cita}
																	</TableCell>
																	<TableCell align="center">
																		{row.estado_pago}
																	</TableCell>
																	<TableCell align="center">
																		{row.pendiente_pagar}
																	</TableCell>
																	<TableCell align="center">
																		{row.monto_adecuado}
																	</TableCell>
																	<TableCell align="center">
																		{row.pagado}
																	</TableCell>
																</TableRow>
															))}
														</TableBody>
													</Table>
												</TableContainer>
											</Grid>
										</Grid>
									</CustomTabPanel>

									<CustomTabPanel value={numTab} index={2}>
										<Grid container spacing={3}>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Nombre" fullWidth></TextInput>
											</Grid>

											<Grid item md={5} mb={2}>
												<TextInput label="Apellido" fullWidth></TextInput>
											</Grid>

											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Cumpleaños" fullWidth></TextInput>
											</Grid>

											<Grid item md={5} mb={2}>
												<TextInput label="Genero" fullWidth></TextInput>
											</Grid>

											<Grid item md={5} mb={2} mr={2}>
												<TextInput
													label="Características del cliente"
													fullWidth
												></TextInput>
											</Grid>

											<Grid item md={5} mb={2}>
												<TextInput label="Condiciones" fullWidth></TextInput>
											</Grid>

											<Grid item md={5} mb={2} mr={2}>
												<TextInput
													label="Tomando medicamentos"
													fullWidth
												></TextInput>
											</Grid>

											<Grid item md={5} mb={2}>
												<TextInput label="Emergencia" fullWidth></TextInput>
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput label="Objetivos" fullWidth></TextInput>
											</Grid>
											<Grid item md={5} mb={2} mr={2}>
												<TextInput
													label="Observaciones / Diagnóstico"
													multiline
													rows={4}
													fullWidth
												></TextInput>
											</Grid>

											<Grid item md={5} mb={2} mr={2}>
												<TextInput
													label="Acciones / Tratamiento"
													multiline
													rows={4}
													fullWidth
												></TextInput>
											</Grid>

											<Grid item md={5} mb={2} mr={2}>
												<TextInput
													label="Pasos a seguir"
													multiline
													rows={4}
													fullWidth
												></TextInput>
											</Grid>

											<Grid item md={5} mb={2} mr={2}>
												<TextInput
													label="Comentarios / Preferencias"
													multiline
													rows={4}
													fullWidth
												></TextInput>
											</Grid>
										</Grid>
									</CustomTabPanel>

									<CustomTabPanel value={numTab} index={3}>
										<Grid container spacing={3}>
											<Grid item md={5}>
												<Button
													variant="contained"
													endIcon={<AddIcon />}
													color="primary"
													sx={{ mb: 1 }}
												>
													Subir
												</Button>{' '}
											</Grid>

											<Grid item md={12}>
												<TableContainer component={Paper}>
													<Table
														sx={{ minWidth: 650 }}
														aria-label="simple table"
													>
														<TableHead>
															<TableRow
															// sx={{
															//   "&:last-child td, &:last-child th": {
															//     border: 0,
															//   },
															// }}
															>
																<TableCell>Nombre</TableCell>
																<TableCell align="center">
																	Fecha de modificacion{' '}
																</TableCell>
																<TableCell align="center" sx={{ m: 0 }}>
																	Accion{' '}
																</TableCell>
															</TableRow>
														</TableHead>
														<TableBody>
															{rowsdocuments.map((row) => (
																<TableRow
																	key={row.nombre}
																	sx={{
																		'&:last-child td, &:last-child th': {
																			border: 0,
																		},
																	}}
																>
																	<TableCell component="th" scope="row">
																		{row.nombre}
																	</TableCell>
																	<TableCell
																		component="th"
																		scope="row"
																		align="center"
																	>
																		{row.fecha_modificacion}
																	</TableCell>
																	<TableCell
																		component="th"
																		scope="row"
																		align="center"
																	>
																		<Button>Descargar </Button>
																	</TableCell>
																</TableRow>
															))}
														</TableBody>
													</Table>
												</TableContainer>
											</Grid>
										</Grid>
									</CustomTabPanel>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default ClientsPage;
