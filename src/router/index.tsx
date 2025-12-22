import { createBrowserRouter, Navigate } from 'react-router-dom';
// import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import AuthPage from '@/pages/AuthPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth" replace />,
  },
  {
    path: '/auth',
    element: (
      <PublicRoute>
        <AuthPage />
      </PublicRoute>
    ),
  },
  // {
  //   path: '/',
  //   element: (
  //     <ProtectedRoute>
  //       <Layout />
  //     </ProtectedRoute>
  //   ),
  //   children: [
      
  //   ],
  // },
]);