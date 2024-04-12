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
import JournalCreate from "./JournalCreate"

export function JournalWidget() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Journal Widget</CardTitle>
        <CardDescription>Fill in the form to add a Journal</CardDescription>
      </CardHeader>
      <CardContent>
        <JournalCreate />        
      </CardContent>
    </Card>
  )
}
