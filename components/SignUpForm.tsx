'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { z } from "zod"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { signup } from "@/lib/adminsignup";

const FormSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  phonenumber: z.string({
    required_error: "Phone Number is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, { message: "Password must be 6 characters or more" }),
  confirmpassword: z.string({
    required_error: "Password is required",
  })
})

const success = () => toast.success('Signup Successful');
const errorSignup = () => toast('Please try Again');
const passwordMismatch = () => toast.error("Passwords don't match!!!")

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfPassword, setShowConfPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
    },
  })

  const router = useRouter()

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password)
    formData.append('username', data.username)
    formData.append('phonenumber', data.phonenumber)

    if (data.password !== data.confirmpassword) {
      passwordMismatch()
      return
    }

    try {
      setIsLoading(true)

      const response = await signup(formData);

      if (response === "Success") {
        success()

        router.push('/admin/auth/login')

      } else {
        errorSignup()
        setIsLoading(false)
      }
    } catch (error) {
      errorSignup()
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Card className="w-2/3 shadow-md shadow-primary">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Fill in the form to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phonenumber" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <div className="flex w-full items-center space-x-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {showPassword ? (
                  <EyeOpenIcon
                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer w-4 h-4 hover:text-primary hover:w-5 hover:h-5"
                  />
                ) : (
                  <EyeClosedIcon
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer w-4 h-4 hover:text-primary hover:w-5 hover:h-5"
                  />
                )}
              </div>


              {/* Confirm Password */}
              <div className="flex w-full items-center space-x-2">
                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          type={showConfPassword ? "text" : "password"}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {showConfPassword ? (
                  <EyeOpenIcon
                    onClick={() => setShowConfPassword(false)}
                    className="cursor-pointer w-4 h-4 hover:text-primary hover:w-5 hover:h-5"
                  />
                ) : (
                  <EyeClosedIcon
                    onClick={() => setShowConfPassword(true)}
                    className="cursor-pointer w-4 h-4 hover:text-primary hover:w-5 hover:h-5"
                  />
                )}
              </div>
              {isLoading ? (
                <Button disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>

              ) : (
                <Button type="submit">Sign Up</Button>
              )}
            </form>
          </Form>
        </CardContent>

        <Toaster />
      </Card>

      {/* Login Link */}
      <Link
        className={`${buttonVariants({ variant: "link" })} italic text-sm hover:text-base hover:font-bold hover:text-primary pt-10`}
        href="/admin/auth/login"
      >
        Have an account?
      </Link>

    </div>
  )
}

export default SignUpForm