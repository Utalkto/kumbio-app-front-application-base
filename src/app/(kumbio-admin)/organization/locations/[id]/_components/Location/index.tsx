'use client';

import React, { FC, } from 'react';
import { LocationDetails, LocationTabs } from './components';
import SwipeableViews from 'react-swipeable-views';
import { IconButton, Stack, Typography, } from '@mui/material';
import { Props } from './interfaces';
import { ArrowBack } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { getLocationService } from '@/services';
import { useLocationForm, useLocationTabs } from './hooks';
import { Form, Formik } from 'formik';

export const Location: FC<Props> = ({ location }) => {
	const { data: locationData } = useQuery({
		queryKey: ['location', location?.id],
		queryFn: () => getLocationService(String(location?.id)),
		initialData: location,
	});

	const { value, theme, router, handleChange, handleChangeIndex } =
		useLocationTabs();

	return (
		<>
			<Stack direction="row" gap={1} alignItems="center">
				<IconButton onClick={() => router.back()}>
					<ArrowBack />
				</IconButton>

				<Typography variant="body1">{locationData?.name}</Typography>
			</Stack>
			<LocationTabs activeTab={value} handleChange={handleChange} />

			<Formik initialValues={location} onSubmit={() => {}}>
				{({ values }) => (
					<Form>
						<SwipeableViews
							axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
							index={value}
							onChangeIndex={handleChangeIndex}
						>
							<TabPanel value={value} index={0} dir={theme.direction}>
								<LocationDetails location={values} />
							</TabPanel>
							<TabPanel value={value} index={1} dir={theme.direction}>
								<Typography variant="body1">Horario de trabajo</Typography>
							</TabPanel>
							<TabPanel value={value} index={2} dir={theme.direction}>
								<Typography variant="body1">Servicios</Typography>
							</TabPanel>
							<TabPanel value={value} index={3} dir={theme.direction}>
								<Typography variant="body1">Profesionales</Typography>
							</TabPanel>
						</SwipeableViews>
					</Form>
				)}
			</Formik>
		</>
	);
};

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

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
