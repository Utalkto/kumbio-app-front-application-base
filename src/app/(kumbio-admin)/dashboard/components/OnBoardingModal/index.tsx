'use client';
import {
	Box,
	DialogContent,
	DialogTitle,
	IconButton,
	Step,
	StepLabel,
	Stepper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ColorlibStepIcon, OrganizationForm } from './components';
import { Dialog } from '@/components';
import { useOnBoarding } from './hooks';
import { ColorlibConnector } from './styles';

export const OnBoardingModal = () => {
	const { steps, activeStep, completed } = useOnBoarding();

	return (
		<Dialog open={true} onClose={() => {}}>
			<DialogTitle sx={{ m: 0, p: 1 }} color="primary">
				Bienvenido a Kumbio
			</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={() => {}}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers>
				<Box mb={2} paddingY={3}>
					<Stepper
						alternativeLabel
						activeStep={activeStep}
						connector={<ColorlibConnector />}
					>
						{steps.map((step, index) => (
							<Step key={step.title} completed={completed[index]}>
								<StepLabel
									StepIconComponent={ColorlibStepIcon}
									color="inherit"
									// onClick={() =>
									// 	setActiveStep((prevActiveStep) => prevActiveStep - 1)
									// }
								>
									{step.title}
								</StepLabel>
							</Step>
						))}
					</Stepper>
				</Box>
				{activeStep == 0 && <OrganizationForm />}
			</DialogContent>
		</Dialog>
	);
};
