import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DynamicFormFieldsProps } from '../types/types';

export function DynamicFormFields({ form, fields }: DynamicFormFieldsProps) {
  return (
    <>
      {fields.map((field) => (
        <FormField
          key={field.name}
          control={form.control}
          name={field.name}
          render={({ field: fieldProps }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Input
                  placeholder={field.placeholder}
                  type={field.type || 'text'}
                  autoComplete={field.autoComplete}
                  {...fieldProps}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
}