import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BlogsCreate } from "./BlogsCreate"

export function BlogWidget() {
  return (
    <Card className="w-full mb-10">
      <CardHeader>
        <CardTitle>Blogs Widget</CardTitle>
        <CardDescription>Fill in the form to add a blog</CardDescription>
      </CardHeader>
      <CardContent>
        <BlogsCreate />        
      </CardContent>
    </Card>
  )
}
