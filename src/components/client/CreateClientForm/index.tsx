'use client';

import { TextInput } from '@/components/ui';
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import { ICreateClient } from '@/models';

export const ClientForm = () => {
	const { values, handleChange, handleBlur, touched, errors } =
		useFormikContext<ICreateClient>();

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={12}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						{/* name - Nombre del cliente  */}
						<TextInput
							sx={{ mb: 2 }}
							name="name"
							label="Nombre del cliente"
							value={values.name}
							onBlur={handleBlur}
							onChange={handleChange}
							error={touched?.name && Boolean(errors?.name)}
							helperText={touched?.name && errors?.name}
							fullWidth
						/>
						{/* last_name - apellido */}
						<TextInput
							sx={{ mb: 2 }}
							name="last_name"
							label="Apellido"
							value={values.last_name}
							onBlur={handleBlur}
							onChange={handleChange}
							error={touched?.last_name && Boolean(errors?.last_name)}
							helperText={touched?.last_name && errors?.last_name}
							fullWidth
						/>

						{/* email */}
						<TextInput
							sx={{ mb: 2 }}
							name="email"
							label="Email"
							value={values.email}
							onBlur={handleBlur}
							onChange={handleChange}
							error={touched?.email && Boolean(errors?.email)}
							helperText={touched?.email && errors?.email}
							fullWidth
						/>
						{/* phone_number */}
						<TextInput
							sx={{ mb: 2 }}
							name="phone_number"
							label="Teléfono"
							value={values.phone_number}
							onBlur={handleBlur}
							onChange={handleChange}
							error={touched?.phone_number && Boolean(errors?.phone_number)}
							helperText={touched?.phone_number && errors?.phone_number}
							fullWidth
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
