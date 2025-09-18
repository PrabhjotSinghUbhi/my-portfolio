import React from 'react'
import { Button } from './ui/button';
import { ArrowBigDown, ArrowBigDownIcon, ArrowDown, DownloadIcon, GithubIcon, Linkedin, Mail } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "./ui/tooltip"
import { BackgroundBeams } from './ui/shadcn-io/background-beams';
import SkillCapsule from './SkillCapsule';
import { motion } from 'framer-motion';

const SocialIconCapsule = ({
    icon,
    content,
    href
}: {
    icon: React.ReactNode,
    content: string,
    href: string
}) => {
    return (
        <Tooltip>
            <a href={href} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
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
                <motion.div
                    className="text-7xl text-center font-bold"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span> <div className=" text-2xl text-gray-500">Hello I'm a</div></span>
                    <span className='bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-neutral-600 '>   Full Stack <br /> Developer</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-center text-xl md:text-2xl text-gray-400 font-medium"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Computer Science student building real-world projects and preparing for FAANG companies and GSoC 2025
                </motion.p>

                {/* Skills */}
                <motion.div
                    className="flex flex-wrap justify-center items-baseline gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
                >
                    {skills.map((skill) => (
                        <SkillCapsule key={skill} skill={skill} />
                    ))}
                </motion.div>

                {/* Call to Action Buttons */}
                <motion.div
                    className="gap-2 flex items-center justify-center flex-wrap "
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 100 }}
                >
                    <Button variant="custom" className='text-xl h-12 cursor-pointer' onClick={() => {
                        window.scrollTo({ top: document.getElementById("projects")?.offsetTop, behavior: 'smooth' });
                    }}>view my work <ArrowDown /></Button>
                    <Button variant="link" className='text-xl cursor-pointer' onClick={() => {
                        window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: 'smooth' });
                    }}><Mail className='scale-150' /> Get in touch</Button>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                    className=" flex justify-center gap-4 items-center"
                    aria-label="Social Media Links"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 100 }}
                >
                    {socialIcons.map((social) => (

                        <SocialIconCapsule
                            key={social.name}
                            icon={social.icon}
                            content={social.content}
                            href={social.href}
                        />
                    ))}
                </motion.div>

                {/* jumping button  */}
                <div>
                    <Button variant="ghost" className='animate-bounce' onClick={() => {
                        window.scrollTo({ top: document.getElementById("about")?.offsetTop, behavior: 'smooth' });
                    }}>
                        <ArrowBigDownIcon className='scale-150 text-gray-500' />
                    </Button>
                </div>
            </section>
            <BackgroundBeams className='-z-50' />
        </div >
    )
}

export default Hero;
