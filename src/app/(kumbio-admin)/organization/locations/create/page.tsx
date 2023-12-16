import { CreateLocation } from '@/components/location/CreateLocation';
import { Container } from '@mui/material';
import React from 'react';

const CreateLocationPage = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{ py: 2, display: 'flex', flexDirection: 'row', gap: 2 }}
		>
			<CreateLocation />
		</Container>
	);
};

export default CreateLocationPage;
