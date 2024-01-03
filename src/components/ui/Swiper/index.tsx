'use client';

import React, { FC } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Props, TabPanelProps } from './interfaces';
import { Stack, useTheme } from '@mui/material';

export const Swiper: FC<Props> = ({
	tabPanels,
	activeIndex,
	onChangeIndex,
}) => {
	const theme = useTheme();

	return (
		<SwipeableViews
			axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
			index={activeIndex}
			onChangeIndex={onChangeIndex}
		>
			{tabPanels.map((tabPanel, index) => (
				<TabPanel
					key={index}
					value={activeIndex}
					index={index}
					dir={theme.direction}
				>
					{tabPanel}
				</TabPanel>
			))}
		</SwipeableViews>
	);
};

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Stack>{children}</Stack>}
		</div>
	);
};
