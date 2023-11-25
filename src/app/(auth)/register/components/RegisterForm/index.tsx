'use client';

import { registerSchema } from '@/models';
import { Formik, Form } from 'formik';
import React from 'react';
import { useRegisterForm } from '../../hooks';
import { Stack, Typography, Grid, Snackbar, Alert } from '@mui/material';
import { Button, SelectInput, TextInput } from '@/components';
import Link from 'next/link';

export const RegisterForm = () => {
	const { registerFormInitialValues, onRegisterUser, isLoading, errs, success } = useRegisterForm();

	return (
		<>
			<Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={success} autoHideDuration={6000} >
				<Alert  severity="success" sx={{ width: '100%' }}>
					¡Éxito! Haz creado tu cuenta. Redireccionando….
				</Alert>
			</Snackbar>
			<Formik
				initialValues={registerFormInitialValues}
				onSubmit={onRegisterUser}
				validationSchema={registerSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur }) => (
					<Form style={{ width: '100%' }}>
						<Stack gap="16px" width={'100%'} component={'section'}>
							
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextInput
										type="text"
										label="Nombre"
										name="first_name"
										value={values.first_name}
										onChange={handleChange}
										onBlur={handleBlur}
										error={(touched.first_name && Boolean(errors.first_name)) ? true : (errs && errs.first_name != undefined) ? true : false}
										helperText={
											(touched.first_name && errors.first_name) ? errors.first_name 
											: (errs && errs.first_name != undefined) ? errs.first_name[0] : ''
										}
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextInput
										type="text"
										label="Apellido"
										name="last_name"
										value={values.last_name}
										onChange={handleChange}
										onBlur={handleBlur}
										error={(touched.last_name && Boolean(errors.last_name)) ? true : (errs && errs.last_name != undefined) ? true : false}
										helperText={
											(touched.last_name && errors.last_name) ? errors.last_name 
											: (errs && errs.last_name != undefined) ? errs.last_name[0] : ''
										}
										fullWidth
									/>
								</Grid>
							</Grid>
							<TextInput
								type="text"
								label="Número de teléfono"
								name="phone_number"
								value={values.phone_number}
								onChange={handleChange}
								onBlur={handleBlur}
								error={(touched.phone_number && Boolean(errors.phone_number)) ? true : (errs && errs.phone_number != undefined) ? true : false}
								helperText={
									(touched.phone_number && errors.phone_number) ? errors.phone_number 
									: (errs && errs.phone_number != undefined) ? errs.phone_number[0] : ''
								}
								fullWidth
							/>
							<TextInput
								type="email"
								label="Correo electrónico"
								name="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								error={(touched.email && Boolean(errors.email)) ? true : (errs && errs.email != undefined) ? true : false}
								helperText={
									(touched.email && errors.email) ? errors.email 
									: (errs && errs.email != undefined) ? errs.email[0] : ''
								}
								fullWidth
							/>
							<TextInput
								type="password"
								label="Contraseña"
								name="password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								error={touched.password && Boolean(errors.password)}
								helperText={touched.password && errors.password}
								fullWidth
							/>
							<Stack direction="row" justifyContent='center' width={'100%'}>
								<Button type="submit" variant="contained" size='large'  sx={{minWidth: '166px', borderRadius: '80px'}}>
									Crear Cuenta
								</Button>
							</Stack>
							<Typography variant="body2" align="center">
								¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
							</Typography>
						</Stack>
					</Form>
				)}
			</Formik>
		</>
	);
};
