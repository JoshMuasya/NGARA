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
import EventsCreate from "./EventsCreate"

export function EventWidget() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Events Widget</CardTitle>
        <CardDescription>Fill in the form to add an event</CardDescription>
      </CardHeader>
      <CardContent>
        <EventsCreate />        
      </CardContent>
    </Card>
  )
}
