"use client";
import React from "react";
import { CodeBracketIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProjectCard = ({ id, imgUrl, title, description, gitUrl, previewUrl }) => {
    const router = useRouter();

    const handleGitClick = (event) => {
        event.preventDefault(); // Prevents Link click
        window.location.href=gitUrl; // Navigates to the git URL
    };

    const handlePreviewClick = (event) => {
        event.preventDefault(); // Prevents Link click
        router.push(previewUrl); // Navigates to the preview URL
    };

    return (
        <div>
            <Link href={`/projects/${id}`}>
                <div className="cursor-pointer">
                    <div
                        className="h-52 md:h-72 rounded-t-xl relative group"
                        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",}}
                    >
                        <div
                            className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
                        >
                            <div
                                onClick={handleGitClick} // Remove event passing, it's handled by `preventDefault`
                                className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link cursor-pointer"
                            >
                                <CodeBracketIcon
                                    className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white"
                                />
                            </div>
                            <div
                                onClick={handlePreviewClick} // Same here
                                className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link cursor-pointer"
                            >
                                <ArrowRightOnRectangleIcon
                                    className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                        <h5 className="text-sky-600 font-semibold mb-2">{title}</h5>
                        <p className="text-[#ADB7BE] font-medium">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
