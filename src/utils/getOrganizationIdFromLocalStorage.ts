export const getOrganizationIdFromLocalStorage = () => {
	const organizationId = localStorage.getItem('organization');

	if (!organizationId) return '';

	return organizationId;
};
