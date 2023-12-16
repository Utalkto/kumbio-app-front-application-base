'use client'

import React, { FC } from 'react';
import { IconButton, TextField, TextFieldProps } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useBoolean } from '@/hooks';

export const TextInput: FC<TextFieldProps> = (props) => {
	const { value: showPassword, toggle: toggleShowPassword } = useBoolean();

	return (
		<TextField
			{...props}
			size="small"
			type={props.type === 'password' && showPassword ? 'text' : props.type}
			InputProps={{
				...props.InputProps,
				sx: { ...props.InputProps?.sx, borderRadius: '1rem' },
				endAdornment: props.type === 'password' && (
					<IconButton onClick={toggleShowPassword}>
						{showPassword ? (
							<VisibilityOff color="primary" />
						) : (
							<Visibility color="primary" />
						)}
					</IconButton>
				),
			}}
		/>
	);
};
