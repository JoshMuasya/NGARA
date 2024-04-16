'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { buttonVariants } from './ui/button'

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
import toast, { Toaster } from 'react-hot-toast';
import DatePickerComponent from "./DatePicker"
import { v4 as uuidv4 } from 'uuid';

const success = () => toast('Successfully Added!');
const errorToast = () => toast('Please try again!!!');

const FormSchema = z.object({
    eventdate: z.date({
        required_error: "A date of publication is required",
    }),
    title: z.string({
        required_error: "A title is required",
    }),
    author: z.string({
        required_error: "An author is required",
    }),
    content: z.string({
        required_error: "A content is required",
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

const EventsCreate = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [pdfFile, setPdfFile] = useState<File | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: "",
            author: "",
            content: "",
            abstract: "",
            pdf: new File([], ""),
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const storageRef = ref(storage, `events/${pdfFile?.name}`)

            await uploadBytes(storageRef, pdfFile!)

            const downloadUrl = await getDownloadURL(storageRef)

            const eventData = { ...data, pdf: downloadUrl, id: '' }

            const uniqueId = uuidv4();

            eventData.id = uniqueId;

            const docRef = await addDoc(collection(db, "Events"), eventData)

            setIsLoading(true)

            form.reset()

            success()

            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            errorToast()
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

                {/* Event Date */}
                <FormField
                    control={form.control}
                    name="eventdate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Event Date</FormLabel>
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
                                    <DatePickerComponent
                                        selected={field.value}
                                        onChange={(date) => field.onChange(date)}
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

                {/* PDF */}
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

                <Button type="submit">Create Event</Button>
            </form>

            <Toaster />
        </Form>
    )
}

export default EventsCreate
