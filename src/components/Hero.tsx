import React from 'react'
import { Button } from './ui/button';
import { ArrowBigDownIcon, DownloadIcon, GithubIcon, Linkedin, Mail } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "./ui/tooltip"
import { BackgroundBeams } from './ui/shadcn-io/background-beams';
import SkillCapsule from './SkillCapsule';

const SocialIconCapsule = ({
    icon,
    content,
    href,
    className
}: {
    icon: React.ReactNode,
    content: string,
    href: string,
    className?: string
}) => {
    return (
        <Tooltip >
            <a href={href} target="_blank" rel="noopener noreferrer">
                <TooltipTrigger asChild>
                    <Button variant="outline" className='h-12 w-12 rounded-full flex justify-center items-center p-0'>
                        {icon}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </a>
        </Tooltip>
    )
}

const socialIcons = [
    {
        name: "GitHub",
        icon: <GithubIcon className='scale-150' />,
        content: "GitHub",
        href: "https://github.com/PrabhjotSinghUbhi"
    },
    {
        name: "LinkedIn",
        icon: <Linkedin className='scale-150' />,
        content: "LinkedIn",
        href: "https://www.linkedin.com/in/prabhjotsinghubhi/"
    },
    {
        name: "resume",
        icon: <DownloadIcon className='scale-150' />,
        content: "Resume",
        href: "/resume.pdf"
    }
]

const skills = [
    "React", "Typescript", "Node.js", "MongoDB", "Express", "Tailwind CSS"
]

function Hero({ className }: { className?: string }) {
    return (
        <div id='home' className={`z-50 overflow-scroll pt-8 ${className}`}>
            {/* Background Circles */}

            <section className='lg:w-1/2 md:3/4 sm:mx-auto w-full px-3 flex flex-col justify-center items-center gap-8 min-h-screen'>
                {/* Heading  */}
                <div className="text-7xl text-center font-bold">
                    <span> <div className=" text-2xl text-gray-500">Hello I'm a</div></span>
                    <span className='bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-neutral-600 '>   Full Stack <br /> Developer</span>
                </div>

                {/* Description */}
                <p className="text-center text-xl md:text-2xl text-gray-400 font-medium">
                    Computer Science student building real-world projects and preparing for FAANG companies and GSoC 2025
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center items-baseline gap-4">
                    {skills.map((skill) => (
                        <SkillCapsule key={skill} skill={skill} />
                    ))}
                </div>

                {/* Call to Action Buttons */}
                <div className="gap-2 flex items-center justify-center flex-wrap ">
                    <Button variant="custom" className='text-xl h-12'>view my work <ArrowBigDownIcon /></Button>
                    <Button variant="link" className='text-xl'><Mail className='scale-150' /> Get in touch</Button>
                </div>

                {/* Social Media Icons */}
                <div className=" flex justify-center gap-4 items-center">
                    {socialIcons.map((social) => (

                        <SocialIconCapsule
                            key={social.name}
                            icon={social.icon}
                            content={social.content}
                            href={social.href}
                            className=""
                        />
                    ))}
                </div>

                {/* jumping button  */}
                <div>
                    <Button variant="ghost" className='animate-bounce'>
                        <ArrowBigDownIcon className='scale-150 text-gray-500' />
                    </Button>
                </div>
            </section>
            <BackgroundBeams className='-z-50' />
        </div >
    )
}

export default Hero;
