import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';

interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

interface DynamicFormFieldsProps {
  form: UseFormReturn<any>;
  fields: FieldConfig[];
}

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