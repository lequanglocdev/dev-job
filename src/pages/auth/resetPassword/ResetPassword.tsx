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

const ResetPassword = () => {
  const FormSchema = z.object({
    password:z.string().regex(/^\d+$/).max(6),
    passwordAgain: z.string().regex(/^\d+$/).max(6),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password:"",
      passwordAgain:""
    },
  });
  return (
    <div className="w-full h-screen bg-[#98D2C0] flex flex-col md:flex-row justify-center items-center p-4">
      <img
        src={forgotPasswordImage}
        className="w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto"
        alt="imgSignIn"
      />
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[523px] h-auto bg-[#007074] rounded-lg shadow-md">
        <h4 className="flex justify-center items-center text-lg text-white font-semibold ">
          Reset Passwor
        </h4>
        <p className="flex justify-center items-center text-base text-white mt-[12px] mb-2">
          Set a new password for your account to keep looking for jobs.
        </p>
        <Form {...form}>
          <form
            className="w-full space-y-4 p-6"
            //  onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel className="text-white font-medium">
                    Old Password
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

            <FormField
              control={form.control}
              name="passwordAgain"
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel className="text-white font-medium">
                    New Password
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

            <Button type="submit" variant={"default"}>
              {/* {loading ? "Loading..." : ""} */} Reset Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
