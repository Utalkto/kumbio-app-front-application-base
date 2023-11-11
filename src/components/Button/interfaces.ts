import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface Props extends ButtonProps {
	children: ReactNode;
}
