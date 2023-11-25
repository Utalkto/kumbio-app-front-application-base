export const protectedRoutes = [
	{
		path: '/',
	},
	{
		path: '/settings',
	},
];

export const publicRoutes = [
	{
		path: '/login',
	},
	{
		path: '/register',
	},
];

export const onIsProtectedRoute = (path: string) =>
	protectedRoutes.find((item) => item.path.includes(path));

export const onIsPublicRoute = (path: string) =>
	publicRoutes.find((item) => item.path.includes(path));
