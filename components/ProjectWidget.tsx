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
import { ProjectsCreate } from "./ProjectsCreate"

export function ProjectWidget() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Projects Widget</CardTitle>
        <CardDescription>Fill in the form to add a project</CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectsCreate />        
      </CardContent>
    </Card>
  )
}
