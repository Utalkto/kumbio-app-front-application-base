import { getOrganizationService } from '@/services/services';
import React from 'react';

const ServicePage = async ({ params }: { params: { id: string } }) => {
	const service = await getOrganizationService(Number(params.id));

	return <div>ServicePage</div>;
};

export default ServicePage;
