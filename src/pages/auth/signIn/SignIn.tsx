import imgSignIn from "@/assets/sign-in.png";
import logo from "@/assets/logoBg.png";
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
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { loginUser, loginUserGoogle } from "@/features/auth/authSlice";
import { toast } from "sonner";
import { useGoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const FormSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const handleSwitchAuth = () => {
    navigate("/sign-up");
  };

  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      const errorMessage = typeof err === "string" ? err : "Login failed!";
      toast.error(errorMessage);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (response) => {
      if (!response.code) {
        console.error("Không nhận được code từ Google.");
        return;
      }

      console.log("Google Auth Code:", response);

      try {
        const user = await dispatch(
          loginUserGoogle({ code: response.code })
        ).unwrap();

        if (user?.token) {
          localStorage.setItem("token", user.token);
          toast.success("Login successful!");
          navigate("/");
        } else {
          console.error("Không tìm thấy token trong response.");
        }
      } catch (err) {
        const errorMessage =
          typeof err === "string" ? err : "Google login failed!";
        toast.error(errorMessage);
      }
    },
    onError: (error) => {
      console.error("Google login failed", error);
      toast.error("Google login failed!");
    },
  });

  return (
    <div className="w-full h-screen bg-[#98D2C0] flex flex-col md:flex-row justify-center items-center p-4">
      <img
        src={imgSignIn}
        className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto"
        alt="imgSignIn"
      />
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[523px] h-auto bg-[#007074] rounded-lg shadow-md">
        <img src={logo} alt="logo" className="w-full h-20 object-cover" />
        <Form {...form}>
          <form
            className="w-full space-y-4 p-6"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
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
              name="password"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel className="text-white font-medium">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <span
              className="flex justify-end text-white cursor-pointer underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </span>
            <Button type="submit" variant={"default"} disabled={loading}>
              {loading ? "Loading..." : "Sign In"}
            </Button>
            <span className="text-center flex justify-center text-white  ">
              Or continue with
            </span>
            <Button
              type="button"
              variant={"default"}
              className="flex justify-center items-center"
              onClick={() => handleGoogleLogin()}
            >
              <FcGoogle />
              Google
            </Button>
          </form>
        </Form>
        <p className="text-white text-center mb-4">
          Don't have an account?
          <span
            className="underline cursor-pointer ml-2 "
            onClick={handleSwitchAuth}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
