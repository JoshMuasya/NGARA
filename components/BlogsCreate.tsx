"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Textarea } from "@/components/ui/textarea"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { db, storage } from "@/lib/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

const FormSchema = z.object({
  datepublication: z.date({
    required_error: "A date of publication is required",
  }),
  title: z.string({
    required_error: "A title is required",
  }),
  author: z.string({
    required_error: "An author is required",
  }),
  category: z.string({
    required_error: "A category is required",
  }),
  content: z.string({
    required_error: "A content is required",
  }),
  duration: z.string({
    required_error: "A duration is required",
  }),
  abstract: z.string({
    required_error: "An abstract is required",
  })
    .min(10, {
      message: "Abstract must be at least 10 characters.",
    })
    .max(400, {
      message: "Abstract must not be longer than 400 characters.",
    }),
  link: z.string({
    required_error: "An author is required",
  }).refine(value => !/\s/.test(value), {
    message: "Spaces are not allowed in the link field",
  }),
  image: z.instanceof(File),
})

export function BlogsCreate() {
  const [isLoading, setIsLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      author: "",
      category: "",
      content: "",
      duration: "",
      abstract: "",
      image: new File([], ""),
      link: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const storageRef = ref(storage, `blogs/${imageFile?.name}`)

      await uploadBytes(storageRef, imageFile!)

      const downloadUrl = await getDownloadURL(storageRef)

      const blogData = { ...data, image: downloadUrl }

      const docRef = await addDoc(collection(db, "Blogs"), blogData)

      setIsLoading(true)

      console.log(docRef.id)

      form.reset()

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">

        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Author" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Link */}
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Short Title without spaces" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Duration */}
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Duration" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Publication */}
        <FormField
          control={form.control}
          name="datepublication"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Publication</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Abstract */}
        <FormField
          control={form.control}
          name="abstract"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Abstract"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Content"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select an Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".jpg, .jpeg"
                  multiple={true}
                  className="dark:bg-transparent cursor-pointer file:cursor-pointer file:text-primary dark:border-primary dark:ring-offset-primary"
                  onChange={(e) => {
                    field.onChange(e.target.files ? e.target.files[0] : null);
                    setImageFile(e.target.files ? e.target.files[0] : null);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Blog</Button>
      </form>
    </Form>
  )
}