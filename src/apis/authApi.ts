import { ForgotPassword, LoginData, LoginGoogle, RegisterData, ResetPassword, User, VerifyEmailData } from "@/pages/auth/types/authTypes";
import api from "./api";

export const login = async (data: LoginData): Promise<User> => {
  const response = await api.post("/auth/login", data, {
    headers: { Authorization: "" }, 
  });
  return response.data;
};

export const loginGoogle = async (data: LoginGoogle): Promise<User> => {
  const response = await api.post("/auth/google", data, {
    headers: { Authorization: "" }, 
  });
  return response.data;
};

export const register = async (data: RegisterData): Promise<User> => {
  const response = await api.post("/auth/register", data, {
    headers: { Authorization: "" }, 
  });
  return response.data;
};

export const forgotPassword = async (data: ForgotPassword): Promise<any> => {
  const response = await api.post("/auth/forgot-password", data, {
    headers: { Authorization: "" }, 
  });
  return response.data;
};

export const verifyEmail = async (data: VerifyEmailData): Promise<any> => {
  const response = await api.post("/auth/forgot-password/verify-code", data, {
    headers: { Authorization: "" }, 
  });
  return response.data;
};

export const resetPassword = async (data: ResetPassword) : Promise<any> =>{
     const response = await api.post("auth/forgot-password/reset-password", data, {
    headers: { Authorization: "" }, 
  });
  return response.data;
}
