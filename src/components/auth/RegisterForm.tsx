import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthForm } from './base/AuthForm';
import { DynamicFormFields } from './base/FormFields';
import { registerFields } from './config/form.config';
import { type RegisterInput, registerSchema } from '@/validation/auth';
import type { RegisterFormProps } from './types/types';

export function RegisterForm({ onSubmit, isLoading }: RegisterFormProps) {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <AuthForm form={form} onSubmit={onSubmit} isLoading={isLoading}>
      <DynamicFormFields form={form} fields={registerFields} />
    </AuthForm>
  );
}