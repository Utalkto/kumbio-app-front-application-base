import { Stack, styled } from '@mui/material';

export const StyledDesktopContainer = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

export const StyledMobileContainer = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		display: 'none',
	},
}));
