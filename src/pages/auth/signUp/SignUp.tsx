import imgSignUp from "@/assets/sign-up.png";
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
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { registerUser } from "@/features/auth/authSlice";
import { toast } from "sonner";

const SignUp = () => {
  const FormSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    name: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    address: z
      .string()
      .min(6, { message: "Address must be at least 6 characters." }),
    age: z.number().int().min(1).max(99),
    phone: z.string().regex(/^\d+$/).max(10),
    gender: z.enum(["FEMALE", "MALE", "OTHER"], {
      message: "Gender must be 'nam' or 'nu'.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      address: "",
    },
  });

  const navigate = useNavigate();

  const handleSwitchAuth = () => {
     navigate("/sign-in");
   };

   const dispatch = useDispatch<AppDispatch>();
    const { loading } = useSelector((state: RootState) => state.auth);
  
    const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
      try {
        await dispatch(registerUser(data)).unwrap();
        toast.success("Register successful!");
        navigate("/sign-in");
      } catch (err) {
        const errorMessage = typeof err === "string" ? err : "Login failed!";
        toast.error(errorMessage);
      }
    };
  return (
    <div className="w-full h-screen bg-[#98D2C0] flex flex-col md:flex-row justify-center items-center p-4">
      <img
        src={imgSignUp}
        className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto"
        alt="imgSignIn"
      />
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[700px] h-auto bg-[#007074] p-6 rounded-lg shadow-md">
        <h4 className="flex justify-center items-center text-lg text-white font-semibold ">
          Welcome Back
        </h4>
        <p className="flex justify-center items-center text-base text-white mt-[12px] mb-2">
          Sign in to continue
        </p>

        <Form {...form}>
          <form
            className="w-full grid grid-cols-4 gap-2 space-y-2"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel className="text-white font-medium">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel className="text-white font-medium">
                    Gender
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full bg-white px-3 py-2 rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500">
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MALE">MALE</SelectItem>
                      <SelectItem value="FEMALE">FEMALE</SelectItem>
                      <SelectItem value="OTHER">OTHER</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel className="text-white font-medium">
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your gender"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel className="text-white font-medium">Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value) || "")
                      } // Chuyển về số
                    />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-white font-medium">
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#F38C79] font-medium text-base" />
                </FormItem>
              )}
            />
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
                <FormItem className="col-span-4">
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

            <Button type="submit" className="col-span-4" variant={"default"}>
              {loading ? "Loading..." : "Sign Up"}
            </Button>
          </form>
        </Form>
        <p className="text-white text-center mt-2">
          Already a member?
          <span
            className="underline cursor-pointer ml-1"
            onClick={handleSwitchAuth}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp
