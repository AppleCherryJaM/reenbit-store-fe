export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  email: string;
  name: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface RefreshTokenDto {
  refresh_token: string;
}

export interface LogoutDto {
  refresh_token?: string;
}

export interface FormFieldConfig {
	name: string,
	label: string,
	type: string,
	placeholder: string,
	autoComplete: string,
}