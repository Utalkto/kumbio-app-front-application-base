import { SelectInput, TextInput } from '@/components';
import { useServiceForm } from '../../hooks';
import { Grid, MenuItem } from '@mui/material';

export const ServiceForm = () => {
	const {
		values,
		handleChange,
		handleBlur,
		errors,
		touched,
		serviceDurationOptions,
	} = useServiceForm();

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextInput
						fullWidth
						label="Nombre de tu servicio mas popular"
						value={values.service.name}
						name="service.name"
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched?.service?.name && Boolean(errors.service?.name)}
						helperText={touched?.service?.name && errors.service?.name}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextInput
						type="number"
						label="Precio del servicio"
						value={values.service.price}
						name="service.price"
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched?.service?.price && Boolean(errors.service?.price)}
						helperText={touched?.service?.price && errors.service?.price}
						InputProps={{
							startAdornment: '$',
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<SelectInput
						label="Duración del servicio"
						value={values.service.duration}
						name="service.duration"
						onChange={handleChange}
						onBlur={handleBlur}
						error={
							touched?.service?.duration && Boolean(errors.service?.duration)
						}
						helpertext={
							touched?.service?.duration && errors?.service?.duration
								? errors?.service?.duration
								: ''
						}
					>
						{serviceDurationOptions.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</SelectInput>
				</Grid>
			</Grid>
		</>
	);
};
