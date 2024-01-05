import { Checkbox, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { useWorkDaysForm } from '../../hooks';
import { CheckboxInput, TimeInput } from '@/components';
import dayjs from 'dayjs';
import { ErrorMessage } from 'formik';

export const WorkDaysForm = () => {
	const { values, handleChange, handleBlur, DAY_WORKS } = useWorkDaysForm();

	return (
		<>
			<Grid container spacing={1}>
				{values.dayWorks.map((workDay, index) => (
					<Fragment key={DAY_WORKS[workDay.day]}>
						<Grid
							item
							xs={workDay.is_working ? 4 : 12}
							sm={workDay.is_working ? 4 : 12}
						>
							<CheckboxInput
								name={`dayWorks[${index}].is_working`}
								id={`dayWorks[${index}].is_working`}
								onChange={handleChange}
								onBlur={handleBlur}
								checked={workDay.is_working}
								control={<Checkbox size="small" />}
								label={DAY_WORKS[workDay.day]}
								sx={{
									'& .MuiFormControlLabel-label': { fontSize: '0.8rem' },
								}}
							/>
						</Grid>

						{workDay.is_working && (
							<>
								<Grid item xs={4} sm={4} md={4}>
									<TimeInput
										value={dayjs(workDay.startHour)}
										onChange={(value) => {
											if (value) {
												handleChange({
													target: {
														name: `dayWorks[${index}].startHour`,
														value: value.toDate(),
													},
												});
											}
										}}
									/>
									<ErrorMessage name={`dayWorks[${index}].startHour`}>
										{(msg) => (
											<Typography variant="caption" color="red">
												{msg}
											</Typography>
										)}
									</ErrorMessage>
								</Grid>
								<Grid item xs={4} sm={4} md={4}>
									<TimeInput
										value={dayjs(workDay.endHour)}
										onChange={(value) => {
											if (value) {
												handleChange({
													target: {
														name: `dayWorks[${index}].endHour`,
														value: value.toDate(),
													},
												});
											}
										}}
									/>
									<ErrorMessage name={`dayWorks[${index}].endHour`}>
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
		</>
	);
};
