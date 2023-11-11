import { BRAND_COLORS } from '@/constants/brandColors';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		primary: {
			main: BRAND_COLORS.primary,
		},
		secondary: {
			main: BRAND_COLORS.secondary,
		},
	},
});
