'use client';

import {
	CheckboxInput,
	SelectInput,
	TextInput,
	TimeInput,
} from '@/components/ui';
import { Checkbox, Grid, MenuItem, Typography } from '@mui/material';
import { ErrorMessage, useFormikContext } from 'formik';
import React, { Fragment } from 'react';
import { DAY_WORKS } from '@/constants/daysName';
import dayjs from 'dayjs';
import { ICreateLocation } from '@/models';

export const LocationForm = () => {
	const { values, handleChange, handleBlur, touched, errors } =
		useFormikContext<ICreateLocation>();

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextInput
							name="location.name"
							label="Nombre de la sede"
							value={values.location.name}
							onBlur={handleBlur}
							onChange={handleChange}
							error={touched?.location?.name && Boolean(errors?.location?.name)}
							helperText={touched?.location?.name && errors?.location?.name}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<SelectInput
							name="location.department"
							label="Profesionales"
							// value={values.location.department}
							onBlur={handleBlur}
							onChange={handleChange}
							// error={touched?.location?.department && Boolean(errors?.location?.department)}
							// helperText={touched?.location?.department && errors?.location?.department}
							fullWidth
						>
							<MenuItem value={1}>Profesional 1</MenuItem>
							<MenuItem value={2}>Profesional 2</MenuItem>
							<MenuItem value={3}>Profesional 3</MenuItem>
						</SelectInput>
					</Grid>

					<Grid item xs={12}>
						<SelectInput
							name="location.department"
							label="Servicios"
							// value={values.location.department}
							onBlur={handleBlur}
							onChange={handleChange}
							// error={touched?.location?.department && Boolean(errors?.location?.department)}
							// helperText={touched?.location?.department && errors?.location?.department}
							fullWidth
						>
							<MenuItem value={1}>Servicio 1</MenuItem>
							<MenuItem value={2}>Servicio 2</MenuItem>
							<MenuItem value={3}>Servicio 3</MenuItem>
						</SelectInput>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={12} sm={6}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="subtitle2" color="text.primary">
							Horario de atención
						</Typography>
					</Grid>

					{values.location.dayWorks.map((dayWork, index) => (
						<Fragment key={DAY_WORKS[dayWork.day]}>
							<Grid
								item
								xs={dayWork.active ? 4 : 12}
								sm={dayWork.active ? 4 : 12}
							>
								<CheckboxInput
									name={`location.dayWorks[${index}].active`}
									id={`location.dayWorks[${index}].active`}
									onChange={handleChange}
									onBlur={handleBlur}
									checked={dayWork.active}
									control={<Checkbox size="small" />}
									label={DAY_WORKS[dayWork.day]}
									sx={{
										'& .MuiFormControlLabel-label': { fontSize: '0.8rem' },
									}}
								/>
							</Grid>
							{dayWork.active && (
								<>
									<Grid item xs={4} sm={4} md={4}>
										<TimeInput
											value={dayjs(dayWork.startHour)}
											onChange={(value) => {
												if (value) {
													handleChange({
														target: {
															name: `location.dayWorks[${index}].startHour`,
															value: value.toDate(),
														},
													});
												}
											}}
										/>
										<ErrorMessage
											name={`location.dayWorks[${index}].startHour`}
										>
											{(msg) => (
												<Typography variant="caption" color="red">
													{msg}
												</Typography>
											)}
										</ErrorMessage>
									</Grid>
									<Grid item xs={4} sm={4} md={4}>
										<TimeInput
											value={dayjs(dayWork.endHour)}
											onChange={(value) => {
												if (value) {
													handleChange({
														target: {
															name: `location.dayWorks[${index}].endHour`,
															value: value.toDate(),
														},
													});
												}
											}}
										/>
										<ErrorMessage name={`location.dayWorks[${index}].endHour`}>
											{(msg) => (
												<Typography variant="caption" color="red">
													{msg}
												</Typography>
											)}
										</ErrorMessage>
									</Grid>
								</>
							)}
						</Fragment>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};
