import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthTabs } from '@/components/auth/AuthTabs';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { useAuthStore } from '@/stores/auth.store';
import { useToast } from '@/hooks/useToast';
import { api } from '@/lib/axios';
import type { LoginInput, RegisterInput } from '@/validation/auth';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();
  const { toast } = useToast();
  const setTokens = useAuthStore((state) => state.setTokens);
  const setUser = useAuthStore((state) => state.setUser);

  const loginMutation = useMutation({
    mutationFn: async (data: LoginInput) => {
      const response = await api.post('/auth/login', data);
      return response.data;
    },
    onSuccess: (data) => {
      setTokens(data.access_token, data.refresh_token);
      setUser(data.user);
      
      toast({
        title: 'Success',
        description: 'Logged in successfully!',
      });
      
      navigate('/');
    },
    onError: (error: any) => {
			toast({
				type: 'error',
				title: 'Error',
				description: error.response?.data?.message || 'Login failed',
			});
		},
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async (data: RegisterInput) => {
      const response = await api.post('/users/register', {
        email: data.email,
        name: data.name,
        password: data.password,
      });
      return response.data;
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Account created successfully! Please login.',
      });
      
      setActiveTab('login');

    },
    onError: (error: any) => {
			toast({
				type: 'error',
				title: 'Error',
				description: error.response?.data?.message || 'Login failed',
			});
		},
  });

  const handleLogin = (data: LoginInput) => {
    loginMutation.mutate(data);
  };

  const handleRegister = (data: RegisterInput) => {
    registerMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Food Store</CardTitle>
          <CardDescription>
            {activeTab === 'login' 
              ? 'Sign in to your account' 
              : 'Create a new account'}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <AuthTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            loginComponent={
              <LoginForm 
                onSubmit={handleLogin} 
                isLoading={loginMutation.isPending}
              />
            }
            registerComponent={
              <RegisterForm 
                onSubmit={handleRegister} 
                isLoading={registerMutation.isPending}
              />
            }
          />
          
          <div className="mt-6 text-center text-sm text-gray-600">
            {activeTab === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('register')}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}