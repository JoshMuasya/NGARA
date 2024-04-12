'use client'

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { buttonVariants } from './ui/button'

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
  abstract: z.string({
    required_error: "An abstract is required",
  })
    .min(10, {
      message: "Abstract must be at least 10 characters.",
    })
    .max(350, {
      message: "Abstract must not be longer than 40 words.",
    }),
  pdf: z.instanceof(File),
})

const JournalCreate = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [pdfFile, setPdfFile] = useState<File | null>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      author: "",
      abstract: "",
      pdf: new File([], ""),
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const storageRef = ref(storage, `journals/${pdfFile?.name}`)
      
      await uploadBytes(storageRef, pdfFile!)

      const downloadUrl = await getDownloadURL(storageRef)

      const journalData = { ...data, pdf: downloadUrl }

      const docRef = await addDoc(collection(db, "Journals"), journalData)

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

        {/* Date of Publication */}
        <FormField
          control={form.control}
          name="datepublication"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Journal</FormLabel>
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

        {/* Image */}
        <FormField
          control={form.control}
          name="pdf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a PDF</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf"
                  multiple={false}
                  className="dark:bg-transparent cursor-pointer file:cursor-pointer file:text-primary dark:border-primary dark:ring-offset-primary"
                  onChange={(e) => {
                    field.onChange(e.target.files ? e.target.files[0] : null);
                    setPdfFile(e.target.files ? e.target.files[0] : null);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Journal</Button>
      </form>
    </Form>
    )
}

export default JournalCreate
