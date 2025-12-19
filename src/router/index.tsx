import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import Layout from '@/components/layout/Layout';
import AuthPage from '@/pages/AuthPage';
import DashboardPage from '@/pages/DashboardPage';
// import ProductsPage from '@/pages/ProductsPage';
// import OrdersPage from '@/pages/OrdersPage';
// import CustomersPage from '@/pages/CustomersPage';
// import SettingsPage from '@/pages/SettingsPage';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: (
      <PublicRoute>
        <AuthPage />
      </PublicRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      // {
      //   path: 'products',
      //   element: <ProductsPage />,
      // },
      // {
      //   path: 'orders',
      //   element: <OrdersPage />,
      // },
      // {
      //   path: 'customers',
      //   element: <CustomersPage />,
      // },
      // {
      //   path: 'settings',
      //   element: <SettingsPage />,
      // },
    ],
  },
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
]);