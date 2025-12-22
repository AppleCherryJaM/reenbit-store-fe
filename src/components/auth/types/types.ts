import { LoginInput, RegisterInput } from "@/validation/auth";
import { UseFormReturn } from "react-hook-form";

export interface LoginFormProps {
	onSubmit: (data: LoginInput) => void;
	isLoading: boolean;
}

export interface RegisterFormProps {
	onSubmit: (data: RegisterInput) => void;
	isLoading: boolean;
}

export interface FieldConfig {
	name: string;
	label: string;
	type?: string;
	placeholder?: string;
	autoComplete?: string;
}

export interface DynamicFormFieldsProps {
	form: UseFormReturn<any>;
	fields: FieldConfig[];
}

export interface AuthTabsProps {
  activeTab: 'login' | 'register';
  onTabChange: (tab: 'login' | 'register') => void;
  loginComponent: React.ReactNode;
  registerComponent: React.ReactNode;
}