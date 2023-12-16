import { BRAND_COLORS } from '@/constants/brandColors';
import { createTheme } from '@mui/material/styles';
import { esES as pickerEsES } from '@mui/x-date-pickers';
import { esES as dataGridEsES } from '@mui/x-data-grid/locales';

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
	dataGridEsES,
	pickerEsES
);
