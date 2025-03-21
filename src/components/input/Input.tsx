"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
const FormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }).optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type FormMode = "sign-in" | "sign-up";

export function InputForm({ mode }: { mode: FormMode }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast(
      <div>
        <strong>You submitted the following values:</strong>
        <pre className="w-[340px] rounded-md bg-red-500 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage className="text-red-500 font-medium text-base" />
            </FormItem>
          )}
        />

        {mode === "sign-up" && (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 font-medium text-base" />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-medium">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 font-medium text-base" />
            </FormItem>
          )}
        />

        {mode === "sign-in" && (
          <p className="text-right text-white cursor-pointer underline">
            Forgot password?
          </p>
        )}

        <Button variant={"default"}>
          {mode === "sign-in" ? "Sign In" : "Sign Up"}
        </Button>

        <Button
          type="button"
          variant={"default"}
          className="flex justify-center items-center"
        >
          <FcGoogle />
          Google
        </Button>
      </form>
    </Form>
  );
}
