import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import AuthPage from '@/pages/AuthPage';
import MainPage from '@/pages/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth',
    element: (
      <PublicRoute>
        <AuthPage />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);