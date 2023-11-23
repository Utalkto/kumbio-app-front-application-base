interface CustomRoute {
    path:           string;
    protected?:      boolean;
}


const routes : CustomRoute[] = [
    {
        path: '/',
    },
    {
        path: '/login',
    },
    {
        path: '/register',
    },
    {
        path: '/settings',
        protected: true
    }
];


export const IsRoute = (path: string) => routes.find(item => item.path.includes(path));