import { Container } from '@mui/material';
import { Location } from './_components';

import { getLocationService } from '@/services';

const LocationPage = async ({ params }: { params: { id: string } }) => {
	const location = await getLocationService(params.id);

	return (
		<Container
			maxWidth="lg"
			sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
		>
			<Location location={location} />
		</Container>
	);
};

export default LocationPage;
