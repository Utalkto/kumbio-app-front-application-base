import { FC } from 'react';
import { FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import { SelectInputProps } from './interfaces';

export const SelectInput: FC<SelectInputProps> = ({ children, ...props }) => {
	return (
		<FormControl fullWidth>
			<InputLabel>{props.label}</InputLabel>
			<Select {...props} label={props.label}>
				{children}
			</Select>
			{props.error && <FormHelperText error>{props.helpertext}</FormHelperText>}
		</FormControl>
	);
};
