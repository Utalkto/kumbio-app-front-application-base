'use client';

import React, { FC } from 'react';
import { LocationDetails, LocationTabs } from './components';
import { IconButton, Stack, Typography } from '@mui/material';
import { Props } from './interfaces';
import { ArrowBack } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { getLocationService } from '@/services';
import { useLocationTabs } from './hooks';
import { Form, Formik } from 'formik';
import { Swiper } from '@/components';

export const Location: FC<Props> = ({ location }) => {
	const { data: locationData } = useQuery({
		queryKey: ['locations', location?.id],
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
						<Swiper
							tabPanels={[
								<LocationDetails location={values} key={values.id} />,
							]}
							activeIndex={value}
							onChangeIndex={handleChangeIndex}
						/>
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
