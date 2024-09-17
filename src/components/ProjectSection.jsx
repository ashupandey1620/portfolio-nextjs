import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "File Storage Drive",
      description: "Project 1 description",
      image: "/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Validator",
      description: "Project 2 description",
      image: "/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Ignitia 2k24",
      description: "Project 3 description",
      image: "/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Coders",
      description: "Project 4 description",
      image: "/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Behance",
      description: "Authentication and CRUD operations",
      image: "/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Farragut",
      description: "Project 5 description",
      image: "/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  
const ProjectSection = () => {
    return (
        <div id="projects">
            <h2 className="text-white mb-4 text-4xl lg:text-4xl font-bold text-center">My Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div> 
        </div>
    );
}

export default ProjectSection;