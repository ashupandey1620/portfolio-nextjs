"use client";
import React from "react";
import { isMobile } from 'react-device-detect';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import WhatsappIcon from "../../public/whatsapp-icon.png";
import Image from "next/image";


const HeroSection = () => {
    const fileId = "1toAND91tGSHV1zq3iSl2Jvv8B0ftZUAI";
    const handleDownload = () => {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.location.href = downloadUrl;
      };
    const githubUrl = "https://github.com/ashupandey1620";
    const linkedinUrl = "https://www.linkedin.com/in/ashupandey1620/";
    const whatsappUrl = "https://wa.me/6386415832";

    return(
        <section className="sm:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Hey, I&apos;m{" "}</span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'Ashutosh',
                        3000,
                        'AI Engineer',
                        1000,
                        'Software Developer',
                        1000,
                        'Mobile App Dev',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                    <p className="text-[#ADB7BE] text-md mb-6 md:text-lg">
                    I am an AI and Machine Learning professional passionate about developing AI Agents and agentic systems that automate reasoning, decision-making, and analytics at scale. Evolving from mobile app development, I now focus on building multimodal AI, Generative AI applications, and cloud-based intelligent platforms, creating impactful solutions that solve real-world challenges.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="https://medium.com/@ashupandey1620" target="_blank" rel="noopener noreferrer">
                            <button className="px-6 py-3 rounded-full mt-4 w-full sm:w-fit bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Tech Blogs</button>
                        </Link>

                        <button className="px-1 py-1 rounded-full mt-4 w-full sm:w-fit hover:bg-slate-800 text-white border bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" onClick={handleDownload}>
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                        </span>
                        </button>
                    

                        <div className="socials flex flex-row gap-2 px-1 py-1 rounded-full mt-4 w-full sm:w-fit hover:bg-slate-800 text-white border bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        <Link href={`${githubUrl}`} target={isMobile ? "" : "_blank"}>
                            <Image src={GithubIcon} alt="Github Icon"  />
                        </Link>
                        <Link href={`${linkedinUrl}`} target={isMobile ? "" : "_blank"}>
                            <Image src={LinkedinIcon} alt="Linkedin Icon" />
                        </Link>
                        <Link href={`${whatsappUrl}`} target={isMobile ? "" : "_blank"} className="flex items-center px-2">
                            <Image src={WhatsappIcon} alt="Linkedin Icon" className="h-10 w-10" />
                        </Link>
                        </div>
                    </div>
            </div>

             

            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[380px] h-[380px] lg:w-[420px] lg:h-[420px] relative">
                    <Image
                        src="/linkedinCover.jpg"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        alt="hero image"
                        width={380}
                        height={380}
                    />

                </div>
            </div>
            </div>
        </section>
    )
}

export default HeroSection;
