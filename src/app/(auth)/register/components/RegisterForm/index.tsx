'use client';

import { registerSchema } from '@/models';
import { Formik, Form } from 'formik';
import React from 'react';
import { useRegisterForm } from '../../hooks';
import { Stack, Typography, Grid } from '@mui/material';
import { Button, CircularBar, TextInput } from '@/components';
import Link from 'next/link';

export const RegisterForm = () => {
	const { registerFormInitialValues, isPending, onRegisterUser } =
		useRegisterForm();

	return (
		<>
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
										error={touched.first_name && Boolean(errors.first_name)}
										helperText={touched.first_name && errors.first_name}
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
										error={touched.last_name && Boolean(errors.last_name)}
										helperText={touched.last_name && errors.last_name}
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
								error={touched.phone_number && Boolean(errors.phone_number)}
								helperText={touched.phone_number && errors.phone_number}
								fullWidth
							/>
							<TextInput
								type="email"
								label="Correo electrónico"
								name="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								error={touched.email && Boolean(errors.email)}
								helperText={touched.email && errors.email}
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
							{isPending && <CircularBar size={20} />}

							{!isPending && (
								<Stack direction="row" justifyContent="center" width={'100%'}>
									<Button
										type="submit"
										variant="contained"
										disabled={isPending}
									>
										Crear Cuenta
									</Button>
								</Stack>
							)}

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
