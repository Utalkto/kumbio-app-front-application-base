'use client';
import { Button, SelectInput, TextInput } from '@/components/ui';
import { Grid, MenuItem, Typography } from '@mui/material';
import { FieldArray } from 'formik';
import React, { Fragment } from 'react';
import { ICreateLocationProfessional } from '../../../models/organization/locations/index';
import { useCreateLocationProfessional } from '@/hooks';

export const CreateLocationProfessional = () => {
	const [open, setOpen] = React.useState(false);

	const {
		values,
		handleChange,
		handleBlur,
		touched,
		errors,
		professionals,
		onSelectProfessional,
		onAddNewProfessional,
	} = useCreateLocationProfessional();

	console.log({ values, errors, professionals });
	return (
		<Grid container spacing={2}>
			<FieldArray
				name="professionals"
				render={(arrayHelpers) => (
					<>
						<Grid item xs={12}>
							<SelectInput
								name="professionals"
								label="Profesionales"
								value={values.professionals.map(
									(professional: ICreateLocationProfessional) =>
										professional.user_data.user_pk
								)}
								disabled={values.isAddingNewProfessional}
								multiple
								open={open}
								onClick={() => {
									if (values.isAddingNewProfessional) return;

									setOpen(!open);
								}}
								onChange={(e, child) => {
									console.log({ e, child });
									onSelectProfessional(e, arrayHelpers);
									setOpen(false);
									// Close the menu
								}}
								// error={touched?.location?.department && Boolean(errors?.location?.department)}
								// helperText={touched?.location?.department && errors?.location?.department}
								fullWidth
								MenuProps={{
									onClose: () => setOpen(false),
								}}
							>
								{professionals.map((professional) => (
									<MenuItem
										key={professional.user_data.user_pk}
										value={professional.user_data.user_pk}
									>
										{professional.user_data.first_name}{' '}
										{professional.user_data.last_name}
									</MenuItem>
								))}
								<MenuItem
									value={-1}
									color="primary"
									sx={{
										color: 'primary.main',
									}}
								>
									+ Agregar Profesional
								</MenuItem>
							</SelectInput>
						</Grid>
						{values.isAddingNewProfessional && (
							<Fragment>
								<Grid item xs={6} alignSelf={'center'}>
									<Typography variant="body2" color="primary">
										Nuevo Profesional
									</Typography>
								</Grid>
								<Grid item xs={6} display={'flex'} justifyContent={'end'}>
									<Button
										variant="contained"
										type="button"
										onClick={() => onAddNewProfessional(arrayHelpers)}
									>
										Agregar
									</Button>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextInput
										value={values.professionalToAdd.user_data.first_name}
										name={`professionalToAdd.user_data.first_name`}
										label="Nombre"
										onBlur={handleBlur}
										onChange={handleChange}
										error={
											Boolean(
												errors.professionalToAdd?.user_data?.first_name
											) && touched.professionalToAdd?.user_data?.first_name
										}
										helperText={
											touched?.professionalToAdd?.user_data?.first_name &&
											errors.professionalToAdd?.user_data?.first_name
										}
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextInput
										name={`professionalToAdd.user_data.last_name`}
										label="Apellido"
										value={values.professionalToAdd.user_data.last_name}
										onBlur={handleBlur}
										onChange={handleChange}
										error={
											Boolean(errors.professionalToAdd?.user_data?.last_name) &&
											touched.professionalToAdd?.user_data?.last_name
										}
										helperText={
											touched?.professionalToAdd?.user_data?.last_name &&
											errors.professionalToAdd?.user_data?.last_name
										}
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextInput
										name={`professionalToAdd.user_data.email`}
										label="Correo electrónico"
										value={values.professionalToAdd.user_data.email}
										onBlur={handleBlur}
										onChange={handleChange}
										error={
											Boolean(errors.professionalToAdd?.user_data?.email) &&
											touched.professionalToAdd?.user_data?.email
										}
										helperText={
											touched?.professionalToAdd?.user_data?.email &&
											errors.professionalToAdd?.user_data?.email
										}
										fullWidth
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextInput
										label="Teléfono"
										value={values.professionalToAdd.user_data.phone_number}
										name={`professionalToAdd.user_data.phone_number`}
										onBlur={handleBlur}
										onChange={handleChange}
										error={
											Boolean(
												errors.professionalToAdd?.user_data?.phone_number
											) && touched.professionalToAdd?.user_data?.phone_number
										}
										helperText={
											touched?.professionalToAdd?.user_data?.phone_number &&
											errors.professionalToAdd?.user_data?.phone_number
										}
										fullWidth
									/>
								</Grid>
							</Fragment>
						)}
					</>
				)}
			></FieldArray>
		</Grid>
	);
};
