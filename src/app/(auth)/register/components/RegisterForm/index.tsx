'use client';

import TextInput from '@/components/TextInput';
import { registerSchema } from '@/models';
import { Formik, Form } from 'formik';
import React from 'react';
import { useRegisterForm } from '../../hooks';
import { Stack, MenuItem, Typography, IconButton } from '@mui/material';
import { Button, SelectInput } from '@/components';
import Link from 'next/link';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export const RegisterForm = () => {
	const { registerFormInitialValues, onRegisterUser } = useRegisterForm();

	return (
		<Formik
			initialValues={registerFormInitialValues}
			onSubmit={onRegisterUser}
			validationSchema={registerSchema}
		>
			{({ values, errors, touched, handleChange, handleBlur }) => (
				<Form style={{ width: '100%' }}>
					<Stack gap="16px" width={'100%'} component={'section'}>
						<TextInput
							type="text"
							label="Nombre de tu Negocio u Organización"
							name="organizationName"
							value={values.organizationName}
							onChange={handleChange}
							onBlur={handleBlur}
							error={
								touched.organizationName && Boolean(errors.organizationName)
							}
							helperText={touched.organizationName && errors.organizationName}
							fullWidth
						/>
						<SelectInput
							label="Seleccione su sector"
							name="sector"
							value={values.sector}
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.sector && Boolean(errors.sector)}
							defaultValue={0}
							helpertext={errors.sector}
						>
							<MenuItem value={0}>Sector</MenuItem>
						</SelectInput>
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
						<SelectInput
							label="Zona Horaria"
							name="country"
							value={values.country}
							onChange={handleChange}
							onBlur={handleBlur}
							error={touched.country && Boolean(errors.country)}
							helpertext={errors.country}
						>
							<MenuItem value="1">One</MenuItem>
						</SelectInput>
						<Stack direction="row" justifyContent="end" width={'100%'}>
							<Button type="submit" variant="contained" fullWidth>
								Registrarme
							</Button>
						</Stack>
						<Typography variant="body2" align="center">
							¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
						</Typography>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};
