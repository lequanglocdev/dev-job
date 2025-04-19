import imageAvatar from "@/assets/avarta.jpg";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Textarea } from "@/components/ui/textarea";

const Profile = () => {
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
      message: "You have not selected a gender",
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

  return (
    <div>
      <div className="flex justify-center items-center gap-4 h-[200px] w-full bg-[#2c3e50] ">
        <h4 className="text-center text-2xl font-bold text-white">
          My Profile
        </h4>
      </div>

      <div className="max-w-[1250px] mx-auto flex justify-center gap-4">
        <div className="flex flex-col items-center flex-1 h-[500px] p-6 ">
          <div className="w-[100px] h-[100px] mt-4 rounded-full flex flex-col justify-center items-center">
            <img
              src={imageAvatar}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full border-2 border-gray-200"
            />
            <h4 className="mt-4">Jansh Dickens</h4>
            <p>Developer</p>
          </div>
          <div className="w-full flex flex-col flex-1 mt-10 ">
            <h3>Document</h3>
            <div className="w-full flex justify-center items-center py-2">
              <FaRegFileAlt className="flex flex-1" />
              <div className="flex flex-2 flex-col">
                <h4>name</h4>
                <p>GB</p>
              </div>
              <FiDownload className="flex-1" />
            </div>
            <div className="w-full  flex justify-center items-center py-2">
              <FaRegFileAlt className="flex flex-1" />
              <div className="flex flex-2 flex-col">
                <h4>name</h4>
                <p>GB</p>
              </div>
              <FiDownload className="flex-1" />
            </div>
          </div>
          <div className="w-full flex flex-col flex-1 mt-10">
            <h3>Contact</h3>
            <div className="flex justify-start items-center gap-4 mt-4">
              <div>
                <h4>name</h4>
                <h4>phone number</h4>
                <h4>location</h4>
              </div>
              <div>
                <p>Jansh@gmail.com</p>
                <p>+2 345 678 0000</p>
                <p>New Caledonia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col flex-2 h-[800px] ">
          <div className="w-full h-[40px] border border-gray-200 px-6 flex items-center ">
            <h5>My Account</h5>
          </div>
          <div className="w-32 h-32 border-2 border-gray-400 rounded-full cursor-pointer">
            <img
              src={imageAvatar}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full border-2 border-gray-200"
            />
          </div>
          <Form {...form}>
            <form
              className="w-full grid grid-cols-4 gap-2 space-y-2"
              // onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                // control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-black font-medium">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage className="text-[#F38C79] font-medium text-base" />
                  </FormItem>
                )}
              />
              <FormField
                // control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-black mt-4 font-medium">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage className="text-[#F38C79] font-medium text-base" />
                  </FormItem>
                )}
              />
              <FormField
                // control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-balck font-medium">
                      Account type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
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
                // control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-black font-medium">
                      Email
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
              <div className="col-span-3">
                <FormLabel className="text-black font-medium">
                  Introduce Yourself
                </FormLabel>
                <Textarea
                  placeholder="Developer with over 5 years' experience working in both the public and private sectors. Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, and proficient with computers. Looking to boost students’ satisfactions scores for International University. Bachelor's degree in communications."
                  id="message"
                  className="mt-4"
                />
              </div>
              <FormField
                // control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-balck font-medium">
                      Account type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
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
                // control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="text-black font-medium">
                      Email
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
              <div className="col-span-3">
                <FormLabel className="text-black font-medium mb-4">
                  Large file input example
                </FormLabel>
                <Input type="file" />
              </div>
              <Button
                type="submit"
                className="col-span-4"
                variant={"destructive"}
              >
                upadate
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
