'use client';

import { StepIconProps } from '@mui/material';
import React from 'react';
import { ColorlibStepIconRoot } from './styles';
import { Business, Engineering, Group } from '@mui/icons-material';

export const ColorlibStepIconLocation = (props: StepIconProps) => {
	const icons: { [index: string]: React.ReactElement } = {
		1: <Business />,
		2: <Group />,
		3: <Engineering />,
	};

	const { active, completed, className } = props;

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}
		>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
};
