import React, { FC } from 'react';
import { Props } from './interfaces';
import { Grid } from '@mui/material';
import { TextInput } from '@/components';
import { useLocationForm } from '../../hooks';

export const LocationDetails: FC<Props> = ({ location }) => {
	const {
		locationForm: { handleBlur, handleChange, errors, touched },
	} = useLocationForm(location);

	return (
		<Grid container my={1} spacing={2}>
			<Grid item xs={6} sm={6} md={4} lg={3}>
				<TextInput
					name="name"
					label="Nombre de la sede"
					value={location.name}
					onBlur={handleBlur}
					onChange={handleChange}
					error={touched.name && Boolean(errors.name)}
					helperText={touched.name && errors.name}
					fullWidth
				/>
			</Grid>
			<Grid item xs={6} sm={6} md={4} lg={3}>
				<TextInput
					name="description"
					label="Descripción"
					value={location.description ?? ''}
					onBlur={handleBlur}
					onChange={handleChange}
					error={touched.description && Boolean(errors.description)}
					helperText={touched.description && errors.description}
					fullWidth
				/>
			</Grid>
			<Grid item xs={6} sm={6} md={4} lg={3}>
				<TextInput
					name="address"
					label="Dirección"
					value={location.address}
					onBlur={handleBlur}
					onChange={handleChange}
					error={touched.address && Boolean(errors.address)}
					helperText={touched.address && errors.address}
					fullWidth
				/>
			</Grid>
			<Grid item xs={6} sm={6} md={4} lg={3}>
				<TextInput
					name="maps_url"
					label="Link de ubicación"
					value={location.maps_url ?? ''}
					onBlur={handleBlur}
					onChange={handleChange}
					error={touched.maps_url && Boolean(errors.maps_url)}
					helperText={touched.maps_url && errors.maps_url}
					fullWidth
				/>
			</Grid>
			<Grid item xs={6} sm={6} md={4} lg={3}>
				<TextInput
					name="phone"
					label="Número de teléfono"
					value={location.phone ?? ''}
					onBlur={handleBlur}
					onChange={handleChange}
					error={touched.phone && Boolean(errors.phone)}
					helperText={touched.phone && errors.phone}
					fullWidth
				/>
			</Grid>
			<Grid item xs={6} sm={6} md={4} lg={3}>
				<TextInput
					name="phone_aux"
					label="Número fuera de oficina"
					value={location.phone_aux ?? ''}
					onBlur={handleBlur}
					onChange={handleChange}
					error={touched.phone_aux && Boolean(errors.phone_aux)}
					helperText={touched.phone_aux && errors.phone_aux}
					fullWidth
				/>
			</Grid>
		</Grid>
	);
};
