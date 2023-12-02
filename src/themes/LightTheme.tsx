import { BRAND_COLORS } from '@/constants/brandColors';
import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/x-date-pickers';

export const lightTheme = createTheme(
	{
		palette: {
			primary: {
				main: BRAND_COLORS.primary,
			},
			secondary: {
				main: BRAND_COLORS.secondary,
			},
		},
		typography: {
			fontFamily: 'inherit',
		},
	},
	esES
);
