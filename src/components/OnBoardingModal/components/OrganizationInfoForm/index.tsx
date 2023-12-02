import { Grid, MenuItem } from '@mui/material';
import { SelectInput, TextInput } from '@/components';
import { useOrganizationInfoForm } from '../../hooks';
import { StyledOptGroup } from './styles';

export const OrganizationInfoForm = () => {
	const {
		values,
		handleChange,
		handleBlur,
		touched,
		errors,
		sectors,
		countries,
		countriesStatus,
		sectorEstatus,
		HOW_DID_YOU_FIND_US,
	} = useOrganizationInfoForm();

	return (
		<Grid container spacing={1} rowSpacing={3} mb={2}>
			<Grid item xs={12} sm={6}>
				<TextInput
					type="text"
					label="Nombre de tu negocio"
					name="bussines.name"
					value={values.bussines.name ?? ''}
					onChange={handleChange}
					onBlur={handleBlur}
					error={touched?.bussines?.name && Boolean(errors?.bussines?.name)}
					helperText={touched?.bussines?.name && errors?.bussines?.name}
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				{sectors && sectorEstatus === 'success' && (
					<SelectInput
						native
						label="Sector"
						name="bussines.sector"
						value={values.bussines.sector}
						onChange={handleChange}
						onBlur={handleBlur}
						error={
							touched?.bussines?.sector && Boolean(errors?.bussines?.sector)
						}
						helpertext={
							touched?.bussines?.sector && errors?.bussines?.sector
								? errors?.bussines?.sector
								: ''
						}
					>
						<option value={0} hidden>
							Selecciona un sector
						</option>
						{sectors?.map((sector) => (
							<StyledOptGroup label={sector.name} key={sector.name}>
								{sector.sub_sectors.map((subsector) => (
									<option key={subsector.name} value={subsector.pk}>
										{subsector.name}
									</option>
								))}
							</StyledOptGroup>
						))}
					</SelectInput>
				)}
			</Grid>
			<Grid item xs={12} sm={6}>
				{countries && countriesStatus === 'success' && (
					<SelectInput
						label="País"
						name="bussines.country"
						value={values.bussines.country}
						onChange={handleChange}
						onBlur={handleBlur}
						error={
							touched?.bussines?.country && Boolean(errors?.bussines?.country)
						}
						helpertext={
							touched?.bussines?.country && errors?.bussines?.country
								? errors?.bussines?.country
								: ''
						}
					>
						<MenuItem
							value={0}
							hidden
							sx={{
								display: 'none',
							}}
						>
							Selecciona un país
						</MenuItem>
						{countries?.map((country) => (
							<MenuItem key={country.name} value={country.id}>
								{country.name}
							</MenuItem>
						))}
					</SelectInput>
				)}
			</Grid>
			<Grid item xs={12} sm={6}>
				<SelectInput
					label="¿Cómo nos encontraste?"
					name="bussines.howDidYouKnow"
					value={values.bussines.howDidYouKnow ?? ''}
					onChange={handleChange}
					onBlur={handleBlur}
					error={
						touched?.bussines?.howDidYouKnow &&
						Boolean(errors?.bussines?.howDidYouKnow)
					}
					helpertext={
						touched?.bussines?.howDidYouKnow && errors?.bussines?.howDidYouKnow
							? errors?.bussines?.howDidYouKnow
							: ''
					}
				>
					<MenuItem value={'-1'} hidden sx={{ display: 'none' }}>
						Selecciona una opción
					</MenuItem>
					{HOW_DID_YOU_FIND_US.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</SelectInput>
			</Grid>
		</Grid>
	);
};
