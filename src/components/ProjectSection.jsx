import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "File Storage Drive",
      description: "A cloud storage app similar to Google Drive, featuring file upload, download, and local storage integration. It utilizes NestJS and Node.js for backend services, Kotlin Jetpack Compose for the Android interface, PostgreSQL for database management, and AWS S3 for secure file storage, all hosted on AWS EC2 for optimal performance and scalability.",
      image: "/projects/github.png",
      tag: ["All", "Full Stack","Android", "Cloud", "Nest","PostgreSQL"],
      gitUrl: "www.github.com",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Validator",
      description: "Validator is an application designed for Professors and Guards in a college environment to authenticate student-issued cards. Leveraging NFC technology, it enables seamless card validation, improving authentication speed by 250%.",
        image: "/projects/github.png",
      tag: ["All", "Backend","Android","NFC","IOT","Django","PostgreSQL"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Ignitia 2k24",
      description: "Ignitia - 2k24 is an Android app for a fest, enabling event registration and in-app purchases. Built with Kotlin Jetpack Compose and Django, it features secure hosting on AWS and robust OTP verification, enhancing user engagement and monetization.",
        image: "/projects/github.png",
      tag: ["All", "Full Stack","Android","Backend", "Ecommerce", "Wallet", "Django","PostgreSQL"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Coders",
      description: "Coders is an Android app that significantly improved task completion rates through competitive task assignments and real-time notifications. It incorporates gamification and social features, allowing users to compete with friends based on task completion using web-scraped data. The backend, built with Express.js, integrates task tracking and notifications, enhancing user retention with an interactive and seamless experience.",
        image: "/projects/github.png",
      tag: ["All", "Mobile", "Programming", "Android", "NodeJS + ExpressJS","MongoDB"],
      gitUrl: "https://github.com/ashupandey1620/TripDrop",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Behance",
      description: "A Behance clone website featuring a modern and responsive design, built with React for the frontend and styled using Tailwind CSS. The backend is powered by Node.js and Express.js, providing a robust API for user authentication, project uploads, and interaction functionalities, creating an engaging platform for creatives to showcase their work.",
        image: "/projects/github.png",
      tag: ["All", "Web","React", "Tailwind CSS", "NodeJS + ExpressJS","MongoDB"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Farragut",
      description: "Farragut is a full-stack web application designed to manage a database of employees, developed using Next.js and Supabase. It streamlines task assignments and wage tracking to enhance productivity. The application features a responsive design with Tailwind CSS and incorporates data visualization tools like Chart.js to provide valuable insights into employee performance and task completion.",
        image: "/projects/github.png",
      tag: ["All", "Web","Full Stack","Firebase","Management Workflow"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
        id: 7,
        title: "Stocks Application",
        description: "",
        image: "/projects/github.png",
        tag: ["All", "Android","Stocks API","Android","Kotlin","Jetpack Compose"],
        gitUrl: "/",
        previewUrl: "/",
    },
  ];

  
const ProjectSection = () => {
    return (
        <div id="projects">
            <h2 className="text-white mb-4 text-4xl lg:text-4xl font-bold text-center">My Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 ">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
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