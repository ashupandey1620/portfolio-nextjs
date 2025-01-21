"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const tabData = [
    {
        title: " Frontend Skills",
        id: "frontend-skills",
        content: (
            <ul className='list-disc pl-4'>
                <li>Android</li>
                <li>Kotlin</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Jetpack Compose</li>
                <li>Compose Multiplatform</li>
                <li>React</li>
                <li>React Native</li>
                <li>Tailwind Css</li>
            </ul>
        )
    },
    {
        title: "Backend Skills",
        id: "backend-skills",
        content: (
            <ul className='list-disc pl-4'>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>NestJS</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>SpringBoot</li>
                <li>Hibernate</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Pranveer Singh Institute of Technology</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>Android App Development</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('frontend-skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white' id='about'>
            <div className="md:grid md:grid-cols-[1.2fr_2fr] gap-8 items-center py-8 px-0 xl:gap-6 sm:py-16 xl-16">
                {/*<Image src='/about-image.png' alt='About' width={500} height={500} />*/}
                {/*<div className="col-span-5 place-self-center mt-4 lg:mt-0">*/}
                    <div className="rounded-full bg-[#181818] w-[420px] h-[420px] lg:w-[460px] lg:h-[460px] relative">
                        <Image
                            src="/hero-image.png"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                            alt="hero image"
                            width={420}
                            height={420}
                        />

                    </div>
                {/*</div>*/}
                <div className='mt-4 flex flex-col h-full'>
                    <h2 className='text-white mb-4 text-4xl lg:text-4xl font-bold text-center sm:text-start'>About
                        Me</h2>
                    <p className='text-base md:text-lg'>
                        I am a BTech final year student with a passion for creating Software. I have experience working
                        with Kotlin, Java, Jetpack Compose, Compose Multiplatform, React Native, NodeJS, Express JS,
                        Databases and Git. I am a quick learner and I am always looking to expand my knowledge and skill
                        set. I am a team player and I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton active={tab === 'frontend-skills'}
                                   selectTab={() => handleTabChange('frontend-skills')}>
                            Frontend Skills
                        </TabButton>

                        <TabButton active={tab === 'backend-skills'}
                                   selectTab={() => handleTabChange('backend-skills')}>
                            Backend Skills
                        </TabButton>

                        <TabButton active={tab === 'education'} selectTab={() => handleTabChange('education')}>
                            Education
                        </TabButton>

                        <TabButton active={tab === 'certifications'}
                                   selectTab={() => handleTabChange('certifications')}>
                            Certifications
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {
                            tabData.find((data) => data.id === tab).content
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
