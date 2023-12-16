'use client';

import { FC } from 'react';
import { Form, Formik } from 'formik';
import { createLocationSchema } from '@/models';
import { useCreateLocation } from '@/hooks';
import { ColorlibStepIconLocation } from '@/components/location/ColorlibStepIconLocation';
import { Stack, Step, StepLabel, Stepper } from '@mui/material';
import { ColorlibConnector } from './styles';
import { LocationForm } from '@/components/location/CreateLocationForm';
import { Button } from '@/components/ui';

export const CreateLocation: FC = () => {
	const { createLocationInitialForm, steps, onSubmit } = useCreateLocation();

	return (
		<Formik
			initialValues={createLocationInitialForm}
			onSubmit={onSubmit}
			validationSchema={createLocationSchema}
		>
			{({ values, setFieldValue }) => (
				<Form
					style={{
						width: '100%',
					}}
				>
					<Stepper
						alternativeLabel
						activeStep={values.step}
						connector={<ColorlibConnector />}
						sx={{ mb: 1 }}
					>
						{steps.map((step, index) => (
							<Step key={step.title} completed={values.completedSteps[index]}>
								<StepLabel
									StepIconComponent={ColorlibStepIconLocation}
									onClick={() => {
										if (values.completedSteps[index]) {
											setFieldValue('step', index);
										}
									}}
									sx={{
										cursor: values.completedSteps[index]
											? 'pointer'
											: 'default',
									}}
								>
									{step.title}
								</StepLabel>
							</Step>
						))}
					</Stepper>

					{values.step === 0 && <LocationForm />}

					<Stack width="100%" direction="row" gap={1} justifyContent={'end'}>
						{values.step > 0 && (
							<Button
								variant="outlined"
								onClick={() => {
									if (values.step > 0) {
										setFieldValue('step', values.step - 1);
									}
								}}
							>
								Regresar
							</Button>
						)}

						<Button variant="contained" type="submit">
							Continuar
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};
