import { LoginInput, RegisterInput } from "@/validation/auth";

export interface LoginFormProps {
	onSubmit: (data: LoginInput) => void;
	isLoading: boolean;
}

export interface RegisterFormProps {
	onSubmit: (data: RegisterInput) => void;
	isLoading: boolean;
}
