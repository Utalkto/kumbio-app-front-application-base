'use client';

import {
	Box,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Stack,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from '@mui/material';
import { Dialog } from '../Dialog';
import { useOnBoarding } from './hooks';
import {
	ColorlibStepIcon,
	OrganizationInfoForm,
	ServiceForm,
	WorkDaysForm,
} from './components';
import { Close } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import { ColorlibConnector } from './styles';
import { Button } from '..';

export const OnBoardingModal = () => {
	const {
		steps,
		onBoardingFormInitialValues,
		onSubmit,
		onBoardingFormYupSchema,
	} = useOnBoarding();

	return (
		<Dialog open={true} onClose={() => {}}>
			<DialogTitle sx={{ m: 0, p: 1 }} color="primary">
				Bienvenido a Kumbio
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={() => {}}
				size="small"
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<Close fontSize="small" />
			</IconButton>
			<Formik
				initialValues={onBoardingFormInitialValues}
				onSubmit={onSubmit}
				validationSchema={onBoardingFormYupSchema}
			>
				{({ values, setFieldValue }) => (
					<Form>
						<DialogContent dividers>
							<Stack alignItems={'center'}>
								<Typography
									color="primary"
									fontWeight={700}
									textAlign={'center'}
									variant="caption"
									gutterBottom
								>
									¡Configura tu aplicación en 3 simples pasos!
								</Typography>
							</Stack>
							<Box mb={2}>
								<Stepper
									alternativeLabel
									activeStep={values.step}
									connector={<ColorlibConnector />}
								>
									{steps.map((step, index) => (
										<Step
											key={step.title}
											completed={values.completedSteps[index]}
										>
											<StepLabel
												StepIconComponent={ColorlibStepIcon}
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
							</Box>
							{values.step === 0 && <OrganizationInfoForm />}
							{values.step === 1 && <WorkDaysForm />}
							{values.step === 2 && <ServiceForm />}
						</DialogContent>
						<DialogActions>
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
						</DialogActions>
					</Form>
				)}
			</Formik>
		</Dialog>
	);
};
