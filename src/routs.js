import MainContent from './maincontent/MainContent';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import AuthLayout from './layouts/AuthLayout';
import Single from './pages/Single';
import NotFound from './pages/NotFound';
import { fetchData } from './ultis/Healper';
import Cart from './pages/Cart';

export const routs = [
    {
        path: '/', element: <MainLayout />, children: [
            { path: '/', element: <MainContent />, loader: async () => fetchData(null, '/products') },
            { path: '/:id', element: <Single />, loader: async ({ params }) => await fetchData(params, '/products') },
            { path: '/cart', element: <Cart /> }
        ]
    },
    {
        path: '/auth', element: <AuthLayout />, children: [
            { path: '/auth/login', element: <Login /> },
        ]
    },
    { path: '*', element: <NotFound /> },
];