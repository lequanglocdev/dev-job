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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import {
  forgotPasswordUser,
  verifyEmaildUser,
} from "@/features/auth/authSlice";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const ForgotPassword = () => {
  const FormSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    verificationCode: z
      .string()
      .regex(/^\d{6}$/, "OTP must be 6 digits")
      .or(z.literal("")),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      verificationCode: "",
    },
  });

  const navigate = useNavigate();
  const [otpEnabled, setOtpEnabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSwitchAuth = () => {
    navigate("/sign-in");
  };

  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleSendMail = form.handleSubmit(async (data) => {
    try {
      await dispatch(forgotPasswordUser({ email: data.email })).unwrap();
      setOtpEnabled(true); // Bật ô nhập OTP sau khi gửi thành công
      setCountdown(60);
      toast.success("OTP sent to your email.");
    } catch (err) {
      const errorMessage = typeof err === "string" ? err : "Failed to send OTP";
      toast.error(errorMessage);
    }
  });

  const handleVerifyOtp = form.handleSubmit(async (data) => {
    try {
      await dispatch(
        verifyEmaildUser({
          email: data.email,
          verificationCode: data.verificationCode,
        })
      ).unwrap();
      toast.success("OTP verified successfully!");
      navigate("/reset-password");
    } catch (err) {
      const errorMessage =
        typeof err === "string" ? err : "Invalid OTP, please try again.";
      toast.error(errorMessage);
    }
  });

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="w-full h-screen bg-[#98D2C0] flex flex-col md:flex-row justify-center items-center p-4">
      <img
        src={forgotPasswordImage}
        className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto"
        alt="imgSignIn"
      />
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[523px] h-auto bg-[#007074] rounded-lg shadow-md">
        <h4 className="flex justify-center items-center text-lg text-white font-semibold ">
          Forgot password
        </h4>
        <p className="flex justify-center items-center text-base text-white mt-[12px] mb-2">
          Enter your email, and we will send you a password recovery code.
        </p>
        <Form {...form}>
          <form className="w-full space-y-4 p-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-white font-medium">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="verificationCode"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter otp"
                      {...field}
                      disabled={!otpEnabled}
                      className={`${
                        !otpEnabled
                          ? "bg-gray-500 text-white"
                          : "bg-white text-black"
                      }`}
                    />
                  </FormControl>
                  <Button
                    variant="destructive"
                    className={`absolute right-0 h-[40px] ${
                      countdown > 0
                        ? "bg-gray-400 text-white"
                        : "bg-[#009196] text-white"
                    }`}
                    disabled={countdown > 0 || !form.watch("email")}
                    onClick={handleSendMail}
                  >
                    {countdown > 0 ? `Gửi lại mã ${countdown}` : "Gửi mã"}
                  </Button>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <Button type="submit" variant={"default"} onClick={handleVerifyOtp}>
              {loading ? "Loading..." : "Send request"}
            </Button>
          </form>
        </Form>
        <p className="text-white text-center mb-4">
          Remembered It
          <span
            className="underline cursor-pointer ml-2 "
            onClick={handleSwitchAuth}
          >
            Go to Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
