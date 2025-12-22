import type { FormFieldConfig } from '@/types/auth';

export const loginFields: FormFieldConfig[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    autoComplete: 'current-password',
  },
];

export const registerFields: FormFieldConfig[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
  },
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
    autoComplete: 'name',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    autoComplete: 'new-password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    placeholder: '••••••••',
    autoComplete: 'new-password',
  },
];