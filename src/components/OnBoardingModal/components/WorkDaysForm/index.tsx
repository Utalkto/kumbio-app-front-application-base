import { Checkbox, Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { useWorkDaysForm } from '../../hooks';
import { CheckboxInput, TimeInput } from '@/components';
import dayjs from 'dayjs';
import { ErrorMessage } from 'formik';

export const WorkDaysForm = () => {
	const { values, handleChange, handleBlur } = useWorkDaysForm();

	return (
		<>
			<Grid container spacing={1}>
				{values.dayWorks.map((workDay, index) => (
					<Fragment key={workDay.day}>
						<Grid
							item
							xs={workDay.active ? 4 : 12}
							sm={workDay.active ? 4 : 12}
						>
							<CheckboxInput
								name={`dayWorks[${index}].active`}
								id={`dayWorks[${index}].active`}
								onChange={handleChange}
								onBlur={handleBlur}
								checked={workDay.active}
								control={<Checkbox size="small" />}
								label={workDay.day}
								sx={{
									'& .MuiFormControlLabel-label': { fontSize: '0.8rem' },
								}}
							/>
						</Grid>

						{workDay.active && (
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
