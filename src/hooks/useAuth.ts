import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/auth.store';
import { useToast } from '@/hooks/useToast';
import { authService } from '@/services/auth.service';

export function useAuth() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const setTokens = useAuthStore((state) => state.setTokens);
  const setUser = useAuthStore((state) => state.setUser);
  const clearAuth = useAuthStore((state) => state.clearAuth);

	const handleAuthError = (error: any) => {
    if (error?.message?.includes('No refresh token') || 
        error?.message?.includes('Refresh token expired') ||
        error?.response?.status === 401) {
      authService.clearTokens();
      clearAuth();
      navigate('/auth', { replace: true });
    }
  };

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setTokens(data.access_token, data.refresh_token);
      setUser(data.user);
      
      toast.success('Success', 'Logged in successfully!');
      navigate('/', { replace: true });
    },
    onError: (error: any) => {
      handleAuthError(error);
      toast.error(
        'Login Failed', 
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    },
  });

  const registerMutation = useMutation({
    mutationFn: authService.register,
    onSuccess: () => {
      toast.success('Success', 'Account created successfully! Please login.');
    },
    onError: (error: any) => {
      toast.error(
        'Registration Failed',
        error.response?.data?.message || 'Registration failed. Please try again.'
      );
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => {
      const refreshToken = localStorage.getItem('refresh_token') || undefined;
      return authService.logout(refreshToken);
    },
    onSuccess: (data) => {
      authService.clearTokens();
      clearAuth();
      navigate('/auth', { replace: true });
      toast.success('Success', data.message || 'Logged out successfully!');
    },
    onError: (_error: any) => {
      authService.clearTokens();
      clearAuth();
      navigate('/auth', { replace: true });
      toast.info('Logged Out', 'You have been logged out.');
    },
  });

  const refreshTokenMutation = useMutation({
    mutationFn: (refreshToken: string) => authService.refreshToken(refreshToken),
    onSuccess: (data) => {
      setTokens(data.access_token, data.refresh_token);
      setUser(data.user);
    },
    onError: (error) => {
      handleAuthError(error);
      toast.error('Session Expired', 'Your session has expired. Please login again.');
    },
  });

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    refreshToken: refreshTokenMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isRegisterLoading: registerMutation.isPending,
    loginMutation,
    registerMutation,
    logoutMutation,
  };
}