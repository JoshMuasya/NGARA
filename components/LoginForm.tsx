"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import Link from "next/link";
import { EyeClosedIcon, EyeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { authenticate } from "@/lib/adminlogin"

const FormSchema = z.object({
  email: z.string({
    required_error: "Email is required",
  }),
  password: z.string({
    required_error: "Password is required",
  })
})

const success = () => toast.success('Login Successful');
const errorLogin = () => toast.error('Please try Again');

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      setIsLoading(true)
      const response = await authenticate(formData);

      if (response === "Success") {
        success()

        router.push('/admin')

      } else if (response === "Invalid credentials.") {
        errorLogin()
        setIsLoading(false)
      } else {
        setIsLoading(false)
        errorLogin()
      }
    } catch (error) {
      setIsLoading(false)
      errorLogin()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Card className="w-2/3 shadow-md shadow-primary">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Please login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

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
              {isLoading ? (
                <Button disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>

              ) : (
                <Button type="submit">Login</Button>
              )}
            </form>
          </Form>
        </CardContent>

        <Toaster />
      </Card>

      {/* Sign Up Link */}
      <Link
        className={`${buttonVariants({ variant: "link" })} italic text-sm hover:text-base hover:font-bold hover:text-primary pt-10`}
        href="/admin/auth/signup"
      >
        Don't have an account?
      </Link>
    </div>
  )
}