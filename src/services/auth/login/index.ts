export const loginUserService = async (
	credentials: Partial<Record<string, unknown>>
) => {
	const authResponse = await fetch('/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});

	if (!authResponse.ok) {
		return null;
	}

	const user = await authResponse.json();

	return user;
};
