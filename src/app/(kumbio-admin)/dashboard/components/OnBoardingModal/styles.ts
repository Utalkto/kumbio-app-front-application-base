import { BRAND_COLORS } from '@/constants/brandColors';
import { StepConnector, stepConnectorClasses, styled } from '@mui/material';

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: BRAND_COLORS.primary,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: BRAND_COLORS.primary,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor:
			theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		borderRadius: 1,
	},
}));
