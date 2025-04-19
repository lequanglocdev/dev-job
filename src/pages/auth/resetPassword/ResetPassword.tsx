import forgotPasswordImage from "@/assets/reset-password.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { resetPasswordUser } from "@/features/auth/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";

const FormSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const ResetPassword = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const forgotPasswordToken = location?.state?.forgotPasswordToken;

  console.log("Token nè:", forgotPasswordToken); // Check nếu cần
  useEffect(() => {
    if (!forgotPasswordToken) {
      toast.error("Invalid or missing token. Please try again.");
      navigate("/forgot-password");
    }
  }, [forgotPasswordToken, navigate]);

  const handleResetPassword = form.handleSubmit(async (data) => {
    if (!forgotPasswordToken) return; // tránh gọi dispatch nếu token null
    try {
      await dispatch(
        resetPasswordUser({
          forgotPasswordToken,
          newPassword: data.newPassword,
        })
      ).unwrap();
      toast.success("Password reset successfully!");
      navigate("/sign-in");
    } catch (error) {
      const message =
        typeof error === "string" ? error : "Failed to reset password";
      toast.error(message);
    }
  });

  return (
    <div className="w-full h-screen bg-[#98D2C0] flex flex-col md:flex-row justify-center items-center p-4">
      <img
        src={forgotPasswordImage}
        className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto"
        alt="reset-password"
      />
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[523px] h-auto bg-[#007074] rounded-lg shadow-md">
        <h4 className="flex justify-center items-center text-lg text-white font-semibold mt-6">
          Reset Password
        </h4>
        <p className="flex justify-center items-center text-base text-white mt-2 mb-4 px-4 text-center">
          Set a new password for your account to keep your account secure.
        </p>

        <Form {...form}>
          <form onSubmit={handleResetPassword} className="w-full space-y-4 p-6">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Re-enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <Button type="submit" variant="default" className="w-full">
              Reset Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
