'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

// Define interfaces for type safety
interface Project {
  title: string;
  author: string;
  abstract: string;
  datepublication: string;
  datecompletion: string;
  link: string;
}

// Static project data
const staticProjects: Project[] = [
  {
    title: 'Development of Gum Arabic, Aloe & Allied dryland resources in Karamoja Region, Uganda',
    author: 'NEFEA',
    abstract: 'The project was an initiative by the President through the AGOA ofﬁce to empower local people in Karamoja Region improve livelihood from natural resources and mitigate insecurity. The project was undertaken between July 2006 and March 2008. The major activities involved identiﬁcation of commercially viable tree/plant resources in the region, mapping and assessment of the resources and market intelligence.',
    datepublication: 'June 17, 2020',
    datecompletion: 'Completed',
    link: '',
  },
  {
    title: 'Food for Asset',
    author: 'NEFEA',
    abstract: 'Food for Assets funded by the World Food Programme and Assisting communities at the Acacia Operation Project (AOP) field sites.',
    datepublication: 'June 17, 2020',
    datecompletion: 'Completed',
    link: '',
  },
  {
    title: 'Acacia Operation Project (AOP)',
    author: 'NEFEA',
    abstract: 'In collaboration with FAO NGARA implemented the “Acacia Operation Project (AOP) – Support to Food Security, Poverty Alleviation and Soil Degradation Control in the Gums and Resins Producer Countries with funds from the government of Italy through FAO” implemented from January 2004 – May 2006 with a cost extension up to August 2008 and thereafter a no cost extension until June 2010.',
    datepublication: 'June 17, 2020',
    datecompletion: 'Completed',
    link: '',
  },
];

const staticOngoingProjects: Project[] = [
  {
    title: 'TerraFund for AFR100 Half Year Report (July - December 2024)',
    author: 'NGARA and KEFRI-Baringo',
    abstract: 'This report details restoration activities in Marigat and Tenges wards, Baringo County, from July to December 2024. It covers the planting of 23,903 tree seedlings and 365 aloe seedlings, restoring 23.9 hectares. The report highlights community engagement, Farmer Managed Natural Regeneration (FMNR), and challenges such as low seedling uptake and nursery flooding.',
    datepublication: 'December 2024',
    datecompletion: 'Ongoing',
    link: '/JulDec.pdf',
  },
  {
    title: 'TerraFund for AFR100 Q3 Report (July - September 2024)',
    author: 'NGARA and KEFRI-Baringo',
    abstract: 'This quarterly report for July–September 2024 provides updates on the TerraFund for AFR100 project in Baringo County. It includes the distribution of 169,115 tree seedlings and 30,500 aloe seedlings to 361 farmers, covering 169 hectares. The report discusses monitoring visits, seedling survival rates, and challenges like poor planting techniques.',
    datepublication: 'September 2024',
    datecompletion: 'Ongoing',
    link: '/Final.pdf',
  },
  {
    title: 'TerraFund for AFR100 Q1 Report (January - March 2025)',
    author: 'NGARA and KEFRI-Baringo',
    abstract: 'This report covers January–March 2025 activities in Marigat and Tenges wards, focusing on the production of 556,416 tree seedlings and 268,050 aloe seedlings. It outlines the expansion of the Kabarnet Forest Station nursery, farmer recruitment, and plans for the May–June 2025 planting season, addressing challenges like low uptake of Senegalia senegal.',
    datepublication: 'March 2025',
    datecompletion: 'Ongoing',
    link: '/JanMar.pdf',
  },
  {
    title: 'TerraFund for AFR100 Half Year Report (January - June 2024)',
    author: 'NGARA and KEFRI-Baringo',
    abstract: 'This half-year report for January–June 2024 details the TerraFund for AFR100 project in Marigat and Tenges wards, Baringo County. It covers the planting of 169,115 tree seedlings and 30,500 aloe seedlings across 169 hectares, engaging 450 farmers. The report highlights nursery expansion, community training, and socio-economic benefits, alongside challenges like low uptake of certain species.',
    datepublication: 'June 2024',
    datecompletion: 'Ongoing',
    link: '/JanJun.pdf',
  },
  {
    title: 'Scaling-Up Resilience in Africa’s Great Green Wall (SURAGGWA)',
    author: 'NEFEA',
    abstract: 'The formulation of the GCF project to scale-up successful climate actions for the implementation of the AU GGW Initiative – FAO-NGARA project in Burkina, Chad, Mali, Niger, Nigeria and Senegal',
    datepublication: 'June 17, 2020',
    datecompletion: 'Ongoing',
    link: '',
  },
  {
    title: 'Strengthening the Gum Arabic Sector for Sustainable and Resilient Landscapes and Livelihoods of Women and Youth in Africa’s Drylands',
    author: 'NEFEA',
    abstract: 'FAO-NGARA project in Chad, Ethiopia, Mali, Nigeria, Senegal and South Sudan',
    datepublication: 'June 17, 2020',
    datecompletion: 'Ongoing',
    link: '',
  },
  {
    title: 'Strengthening Capacity among Stakeholders for Production and Trade in Gums and Resins in Africa',
    author: 'NEFEA',
    abstract: 'African Forest Forum through financial support from the Swiss Agency for Development and Cooperation (SDC) covering four NGARA member countries Burkina Faso, Kenya, Niger, Tanzania.',
    datepublication: 'June 17, 2020',
    datecompletion: 'Ongoing',
    link: '',
  },
];

// Main Projects Component
const Projects: React.FC = () => {
  return (
    <div className="pt-20 pb-10 flex flex-col justify-center items-center w-full">
      <h1 className="text-primary font-bold text-3xl text-center pb-5">View our Projects</h1>
      <h6 className="text-center text-sm">Get an insight on our projects</h6>

      {/* Completed Projects Section */}
      <div className="w-full mt-10 mb-10">
        <h2 className="text-primary font-bold text-2xl text-center pb-5">Completed Projects</h2>
        <h6 className="text-center text-sm mb-6">Explore our completed projects</h6>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6">
          {staticProjects.map((project, index) => (
            <Card key={`completed-${index}`} className="max-w-lg w-full flex flex-col justify-between min-h-[400px]">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>By {project.author}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{project.abstract}</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Published:</strong> {project.datepublication}</p>
                  <p><strong>Status:</strong> {project.datecompletion}</p>
                </div>
              </CardContent>
              <CardFooter>
                {project.link && project.link !== '/' && project.link !== '' ? (
                  <Button asChild>
                    <a href={project.link} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </a>
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="w-full mt-10 mb-10">
        <h2 className="text-primary font-bold text-2xl text-center pb-5">Ongoing Projects</h2>
        <h6 className="text-center text-sm mb-6">Explore our current projects in progress</h6>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6">
          {staticOngoingProjects.map((project, index) => (
            <Card key={`ongoing-${index}`} className="max-w-lg w-full flex flex-col justify-between min-h-[400px]">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>By {project.author}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{project.abstract}</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Published:</strong> {project.datepublication}</p>
                  <p><strong>Status:</strong> {project.datecompletion}</p>
                </div>
              </CardContent>
              <CardFooter>
                {project.link && project.link !== '/' && project.link !== '' ? (
                  <Button asChild>
                    <a href={project.link} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </a>
                  </Button>
                ) : (
                  <p className="text-base text-primary">Report Coming Soon</p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;