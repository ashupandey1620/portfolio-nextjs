"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";


const HeroSection = () => {
    const fileId = "1toAND91tGSHV1zq3iSl2Jvv8B0ftZUAI";
    const handleDownload = () => {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        window.location.href = downloadUrl;
      };

    return(
        <section className="sm:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Namaste, I&apos;m{" "}</span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'Ashutosh Pandey',
                        3000,
                        'Software Engineer',
                        1000,
                        'Generative AI Hustler',
                        1000,
                        'Backend and Mobile App Dev',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                    <p className="text-[#ADB7BE] text-md mb-6 md:text-lg">
                    Passionate Software Developer, creating engaging solutions. Proficient in various technologies, dedicated to crafting innovative experiences that leave a lasting impact.
                    </p>
                    <div>
                        <Link href="#contact">
                            <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Contact Me</button>
                        </Link>
                        <button className="px-1 py-1 rounded-full mt-4 w-full sm:w-fit hover:bg-slate-800 text-white border bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" onClick={handleDownload}>
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                        </span>
                        </button>
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
