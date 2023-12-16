import { useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const useLocationTabs = () => {
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const router = useRouter();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index: number) => {
		setValue(index);
	};
	return { value, theme, router, handleChange, handleChangeIndex };
};
