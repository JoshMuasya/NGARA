'use client';

import { db } from '@/lib/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ProjectsCard from '@/components/ProjectsCard';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface Project {
  title: string;
  author: string;
  datepublication: any;
  datecompletion: any;
  abstract: string;
  content: string;
  link: string;
}

interface OngoingProject {
  title: string;
  description: string;
  pdfUrl: string;
  createdAt: any;
}

const staticOngoingProjects = [
  {
    title: 'TerraFund for AFR100 Half Year Report (July - December 2024)',
    author: 'NGARA and KEFRI-Baringo',
    abstract:
      'This report details restoration activities in Marigat and Tenges wards, Baringo County, from July to December 2024. It covers the planting of 23,903 tree seedlings and 365 aloe seedlings, restoring 23.9 hectares. The report highlights community engagement, Farmer Managed Natural Regeneration (FMNR), and challenges such as low seedling uptake and nursery flooding.',
    datepublication: 'December 2024',
    datecompletion: 'Ongoing',
    link: '/JulDec.pdf',
  },
  {
    title: 'TerraFund for AFR100 Q3 Report (July - September 2024)',
    author: 'NGARA and KEFRI-Baringo',
    abstract:
      'This quarterly report for July–September 2024 provides updates on the TerraFund for AFR100 project in Baringo County. It includes the distribution of 169,115 tree seedlings and 30,500 aloe seedlings to 361 farmers, covering 169 hectares. The report discusses monitoring visits, seedling survival rates, and challenges like poor planting techniques.',
    datepublication: 'September 2024',
    datecompletion: 'Ongoing',
    link: '/Final.pdf',
  },
  {
    title: 'TerraFund for AFR100 Q1 Report (January - March 2025)',
    author: 'NGARA and KEFRI-Baringo',
    abstract:
      'This report covers January–March 2025 activities in Marigat and Tenges wards, focusing on the production of 556,416 tree seedlings and 268,050 aloe seedlings. It outlines the expansion of the Kabarnet Forest Station nursery, farmer recruitment, and plans for the May–June 2025 planting season, addressing challenges like low uptake of Senegalia senegal.',
    datepublication: 'March 2025',
    datecompletion: 'Ongoing',
    link: '/JanMar.pdf',
  },
  {
    title: 'TerraFund for AFR100 Half Year Report (January - June 2024)',
    author: 'NGARA and KEFRI-Baringo',
    abstract:
      'This half-year report for January–June 2024 details the TerraFund for AFR100 project in Marigat and Tenges wards, Baringo County. It covers the planting of 169,115 tree seedlings and 30,500 aloe seedlings across 169 hectares, engaging 450 farmers. The report highlights nursery expansion, community training, and socio-economic benefits, alongside challenges like low uptake of certain species.',
    datepublication: 'June 2024',
    datecompletion: 'Ongoing',
    link: '/JanJun.pdf',
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [ongoingProjects, setOngoingProjects] = useState<OngoingProject[]>([]);

  const formatDate = (timestamp: any) => {
    if (!timestamp || !timestamp.seconds) return 'Unknown date';
    const date = new Date(timestamp.seconds * 1000);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch completed projects
        const projectCollectionRef = collection(db, 'Projects');
        const projectSnapshot = await getDocs(query(projectCollectionRef));
        const projectData: Project[] = projectSnapshot.docs.map((doc) => doc.data() as Project);
        setProjects(projectData);

        // Fetch ongoing projects
        const ongoingCollectionRef = collection(db, 'OngoingProjects');
        const ongoingSnapshot = await getDocs(query(ongoingCollectionRef));
        const ongoingData: OngoingProject[] = ongoingSnapshot.docs.map((doc) => doc.data() as OngoingProject);
        setOngoingProjects(ongoingData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 pb-10 flex flex-col justify-center items-center w-full">
      {/* Title */}
      <h1 className="text-primary font-bold text-3xl text-center pb-5">View our Projects</h1>

      {/* Subtitle */}
      <h6 className="text-center text-sm">Get an insight on our projects</h6>

      {/* Completed Projects Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            author={project.author}
            abstract={project.abstract}
            datepublication={formatDate(project.datepublication)}
            datecompletion={formatDate(project.datecompletion)}
            link={project.link}
          />
        ))}
      </div>

      {/* Ongoing Projects Section */}
      <div className="w-full mt-10 mb-10">
        <h2 className="text-primary font-bold text-2xl text-center pb-5">Ongoing Projects</h2>
        <h6 className="text-center text-sm mb-6">Explore our current projects in progress</h6>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
          {/* Static Ongoing Projects */}
          {staticOngoingProjects.map((project, index) => (
            <Card key={`static-${index}`} className="max-w-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>By {project.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{project.abstract}</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Published:</strong> {project.datepublication}
                  </p>
                  <p>
                    <strong>Status:</strong> {project.datecompletion}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
          {/* Firebase Ongoing Projects */}
          {ongoingProjects.map((project, index) => (
            <Card key={`ongoing-${index}`} className="max-w-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>By Unknown</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Published:</strong> {formatDate(project.createdAt)}
                  </p>
                  <p>
                    <strong>Status:</strong> Ongoing
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.pdfUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;