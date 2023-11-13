import React, { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const TextInput: FC<TextFieldProps> = (props) => {
	return <TextField {...props} />;
};

export default TextInput;
