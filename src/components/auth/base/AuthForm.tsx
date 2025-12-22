import React from 'react';
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import type { UseFormReturn } from 'react-hook-form';

interface AuthFormProps {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  isLoading: boolean;
  children?: React.ReactNode;
}

export function AuthForm({ form, onSubmit, isLoading, children }: AuthFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {children}
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}