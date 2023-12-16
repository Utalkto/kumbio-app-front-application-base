import {
	FormControlLabel,
	FormControlLabelProps,
	FormGroup,
} from '@mui/material';
import { FC } from 'react';

export const CheckboxInput: FC<FormControlLabelProps> = (props) => {
	return (
		<FormGroup>
			<FormControlLabel {...props} />
		</FormGroup>
	);
};
