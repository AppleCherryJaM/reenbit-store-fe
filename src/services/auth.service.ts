import { api } from '@/lib/index';
import type { LoginInput, RegisterInput, AuthResponse } from '@/types/auth';

export const authService = {
  async login(data: LoginInput): Promise<AuthResponse> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async register(data: RegisterInput): Promise<{ message: string; user?: any }> {
    const response = await api.post('/auth/register', {
      email: data.email,
      name: data.name,
      password: data.password,
    });
    return response.data;
  },

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    const response = await api.post('/auth/refresh', {
      refresh_token: refreshToken,
    });
    return response.data;
  },

  async logout(refreshToken?: string): Promise<{ message: string }> {
    try {
      const response = await api.post('/auth/logout', { 
        refresh_token: refreshToken 
      });
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
      return { message: 'Logged out locally' };
    }
  },

  async getCurrentUser(): Promise<any> {
    const response = await api.post('/auth/me');
    return response.data;
  },

  clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },
};