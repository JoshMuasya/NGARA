"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from 'next/image';
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Project {
    id: string;
    title: string;
    author: string;
    abstract: string;
    datepublication: string;
    datecompletion: string;
    link: string;
    content: string;
    imageUrl?: string; // Optional image URL
}

const ProjectsInner: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectDoc = await getDocs(collection(db, "projects"))
                const projectData = projectDoc.docs
                    .map(doc => ({ id: doc.id, ...doc.data() } as unknown as Project))
                    .find(p => p.id === projectId);
                setProject(projectData || null);
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        }
    }, [projectId]);

    if (loading) {
        return <div className="pt-24 text-center">Loading...</div>;
    }

    if (!project) {
        return <div className="pt-24 text-center">Project not found</div>;
    }

    return (
        <div className="pt-24 pb-10 flex flex-col justify-center items-center w-full bg-gray-100">
            <div className="max-w-4xl w-full px-4">
                <Button asChild className="mb-6 bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </Button>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {project.imageUrl && (
                        <div className="relative w-full h-96">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-t-lg"
                                priority
                            />
                        </div>
                    )}
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h1>
                        <div className="text-sm text-gray-600 mb-4">
                            <p><strong>Author:</strong> {project.author}</p>
                            <p><strong>Published:</strong> {project.datepublication}</p>
                            <p><strong>Status:</strong> {project.datecompletion}</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Abstract</h2>
                            <p className="text-gray-600 leading-relaxed">{project.abstract}</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Details</h2>
                            <div className="text-gray-600 leading-relaxed">{project.content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsInner