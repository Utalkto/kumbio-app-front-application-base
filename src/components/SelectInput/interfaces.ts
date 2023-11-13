import { SelectProps } from '@mui/material/Select';

export interface SelectInputProps extends SelectProps {
	children: React.ReactNode;
	helpertext?: string;
}
