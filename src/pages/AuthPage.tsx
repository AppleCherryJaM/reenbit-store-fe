import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthTabs } from '@/components/auth/base/AuthTabs';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { useAuth } from '@/hooks/useAuth';
import type { LoginInput, RegisterInput } from '@/validation/auth';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const { login, register, isLoginLoading, isRegisterLoading } = useAuth();

  const handleLogin = (data: LoginInput) => {
    login(data);
  };

  const handleRegister = (data: RegisterInput) => {
    register(data, {
      onSuccess: () => {
        setActiveTab('login');
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Reenbit Store</CardTitle>
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
                isLoading={isLoginLoading}
              />
            }
            registerComponent={
              <RegisterForm 
                onSubmit={handleRegister} 
                isLoading={isRegisterLoading}
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