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
  dateupload: z.date({
    required_error: "A date of publication is required",
  }),
  title: z.string({
    required_error: "A title is required",
  }),
  image: z.instanceof(File),
})

export function GalleryCreate() {
  const [isLoading, setIsLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      image: new File([], ""),
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const storageRef = ref(storage, `gallery/${imageFile?.name}`)
      
      await uploadBytes(storageRef, imageFile!)

      const downloadUrl = await getDownloadURL(storageRef)

      const galleryData = { ...data, image: downloadUrl }

      const docRef = await addDoc(collection(db, "Gallery"), galleryData)

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

        {/* Date of Upload */}
        <FormField
          control={form.control}
          name="dateupload"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Upload</FormLabel>
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
                  multiple={false}
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

        <Button type="submit">Add Image</Button>
      </form>
    </Form>
  )
}
