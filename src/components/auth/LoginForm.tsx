import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthForm } from './base/AuthForm';
import { DynamicFormFields } from './base/FormFields';
import { loginFields } from './config/form.config';
import { type LoginInput, loginSchema } from '@/validation/auth';
import type { LoginFormProps } from './types/types';

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <AuthForm form={form} onSubmit={onSubmit} isLoading={isLoading}>
      <DynamicFormFields form={form} fields={loginFields} />
    </AuthForm>
  );
}