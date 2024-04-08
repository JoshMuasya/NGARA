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
import PublicationCreate from "./PublicationsCreate"

export function PublicationWidget() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Publications Widget</CardTitle>
        <CardDescription>Fill in the form to add a publication</CardDescription>
      </CardHeader>
      <CardContent>
        <PublicationCreate />        
      </CardContent>
    </Card>
  )
}
