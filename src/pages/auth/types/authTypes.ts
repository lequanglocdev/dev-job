export type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginGoogle = {
  code: string;
};

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  phone: string;
  address: string;
  gender: "MALE" | "FEMALE" | "OTHER";
};

export type ForgotPassword = {
  email: string;
};

export type VerifyEmailData ={
  email: string;
  verificationCode: string;
}

export type ResetPassword = {
  forgotPasswordToken: string;
  newPassword: string
}
