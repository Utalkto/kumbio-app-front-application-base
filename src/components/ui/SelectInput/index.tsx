import { FC } from 'react';
import { FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import { SelectInputProps } from './interfaces';

export const SelectInput: FC<SelectInputProps> = ({ children, ...props }) => {
	return (
		<FormControl fullWidth size="small">
			<InputLabel>{props.label}</InputLabel>

			<Select
				{...props}
				label={props.label}
				size="small"
				sx={{
					borderRadius: '1rem',
				}}
			>
				{children}
			</Select>
			{props.error && <FormHelperText error>{props.helpertext}</FormHelperText>}
		</FormControl>
	);
};
