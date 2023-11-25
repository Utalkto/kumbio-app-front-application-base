'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Alert, Checkbox, Collapse, IconButton, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { useLoginForm } from '../../hooks';
import { loginSchema } from '@/models';
import { Button, CheckboxInput, TextInput } from '@/components';



export const LoginForm = () => {
	const { loginFormInitialValues, onLoginUser, errs, resetErrs } = useLoginForm();

	return (
		<>
			<Collapse in={errs ? true : false} sx={{marginBottom: 4}}>
				<Alert  severity='error' sx={{ width: '100%' }}
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={resetErrs}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
				>
					{
						errs?.non_field_errors && errs.non_field_errors[0]
					}
				</Alert>
			</Collapse>
			<Formik
				initialValues={loginFormInitialValues}
				onSubmit={onLoginUser}
				validationSchema={loginSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur }) => (
					<Form style={{ width: '100%' }}>
						<Stack gap="16px" width={'100%'} component={'section'}>
							<Stack
								direction={'row'}
								gap={'10px'}
								alignItems={'center'}
								justifyContent={{ xs: 'center', sm: 'flex-start' }}
							>
								<Image
									src="/solo-cubo.png"
									alt="Kumbio Logo"
									width={40}
									height={40}
								/>
								<Typography
									color={'primary'}
									component={'h1'}
									variant={'h4'}
									fontSize={{ xs: '1.2rem', sm: '1.5rem' }}
									fontWeight={500}
									lineHeight={'1.2'}
									textAlign={{ xs: 'center', sm: 'left' }}
								>
									Bienvenido a Kumbio
								</Typography>
							</Stack>

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
							<Stack
								direction={'row'}
								justifyContent={'space-between'}
								alignItems={'center'}
								flexWrap={'wrap'}
							>
								<CheckboxInput
									label="Recuérdame"
									name="rememberMe"
									value={values.rememberMe}
									onChange={handleChange}
									onBlur={handleBlur}
									control={<Checkbox size="small" />}
									sx={{ '& .MuiTypography-body1': { fontSize: '14px' } }}
								/>
								<Link href="/forgot-password" style={{ fontSize: '14px' }}>
									¿Olvidaste tu contraseña?
								</Link>
							</Stack>
							<Button type="submit" variant="contained" fullWidth>
								Ingresar
							</Button>
							<Typography variant="body2" align="center">
								¿No tienes una cuenta?{' '}
								<Link href="/register" style={{ fontSize: '14px' }}>
									Regístrate
								</Link>
							</Typography>
						</Stack>
					</Form>
				)}
			</Formik>
		</>
	);
};
