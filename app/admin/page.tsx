'use client'

import { BlogWidget } from '@/components/BlogWidget'
import React, { useEffect, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EventWidget } from '@/components/EventWidget'
import { GalleryWidget } from '@/components/GalleryWidget'
import { ProjectWidget } from '@/components/ProjectWidget'
import { PublicationWidget } from '@/components/PublicationWidget'
import ProjectsList from '@/components/ProjectsList'
import PublicationsList from '@/components/PublicationsList'
import EventsList from '@/components/EventsList'
import GalleryList from '@/components/GalleryList'
import BlogsList from '@/components/BlogsList'
import { JournalWidget } from '@/components/JournalWidget'
import JournalList from '@/components/JournalList'
import DatePickerComponent from '@/components/DatePicker'

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const renderSelectedWidget = () => {
    switch (selectedOption) {
      case "createBlog":
        return <BlogWidget />;
      case "viewBlog":
        return <BlogsList />
      case "createProject":
        return <ProjectWidget />;
      case "viewProject":
        return <ProjectsList />;
      case "createPublication":
        return <PublicationWidget />;
      case "viewPublication":
        return <PublicationsList />;
      case "createJournal":
        return <JournalWidget />;
      case "viewJournal":
        return <JournalList />;
      case "createEvent":
        return <EventWidget />;
      case "viewEvents":
        return <EventsList />;
      case "addImage":
        return <GalleryWidget />;
      case "viewGallery":
        return <GalleryList />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-20 pb-5 w-full">
      <h1 className="text-primary font-bold text-3xl text-center pb-5">
        Welcome to NGARA Dashboard
      </h1>

      {/* Underline */}
      <div className="border border-primary w-full" />

      {/* Content */}
      <div className='flex flex-col md:flex-row justify-between align-middle items-start w-full px-5 pt-5'>
        {/* Left */}
        <div className='h-full w-full md:w-1/3 bg-slate-200 px-10 border-2 border-primary rounded-xl'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="blogs">
              <AccordionTrigger className="font-bold text-lg text-accent">Blogs</AccordionTrigger>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("createBlog")}
              >
                Create
              </AccordionContent>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("viewBlog")}
              >
                View
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="projects">
              <AccordionTrigger className="font-bold text-lg text-accent">Projects</AccordionTrigger>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("createProject")}
              >
                Create
              </AccordionContent>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("viewProject")}
              >
                View
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="publications">
              <AccordionTrigger className="font-bold text-lg text-accent">Publications</AccordionTrigger>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("createPublication")}
              >
                Create
              </AccordionContent>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("viewPublication")}
              >
                View
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="journal">
              <AccordionTrigger className="font-bold text-lg text-accent">Journal</AccordionTrigger>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("createJournal")}
              >
                Create
              </AccordionContent>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("viewJournal")}
              >
                View
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="events">
              <AccordionTrigger className="font-bold text-lg text-accent">Events</AccordionTrigger>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("createEvent")}
              >
                Create
              </AccordionContent>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("viewEvents")}
              >
                View
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gallery">
              <AccordionTrigger className="font-bold text-lg text-accent">Gallery</AccordionTrigger>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("addImage")}
              >
                Add
              </AccordionContent>
              <AccordionContent
                className="text-base hover:italic cursor-pointer"
                onClick={() => handleOptionClick("viewGallery")}
              >
                View
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Right */}
        <div className='h-full w-full md:w-2/3 md:px-10 py-10 md:py-0'>
          {renderSelectedWidget()}
        </div>

      </div>
    </div>
  )
}

export default Dashboard
