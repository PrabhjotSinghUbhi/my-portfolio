// Hero-tooltip-free.tsx
// Reworked SocialIconCapsule to avoid Radix/Tooltip/Radix trigger nesting and any JS hover handlers
// Uses a pure-CSS tooltip and avoids placing a <button> inside an <a> (invalid HTML)

import React from 'react'
import { Button } from './ui/button'
import { ArrowBigDownIcon, ArrowDown, DownloadIcon, GithubIcon, Linkedin, Mail } from 'lucide-react'
import { BackgroundBeams } from './ui/shadcn-io/background-beams'
import SkillCapsule from './SkillCapsule'
import { motion } from 'framer-motion'

type SocialIconItem = {
    name: string
    icon: React.ReactElement
    content: string
    href: string
}

const SocialIconCapsule = ({ icon, content, href }: { icon: React.ReactElement; content: string; href: string }) => {
    // This component is intentionally stateless and uses CSS-only hover effects
    // to avoid any re-render or focus/hover loops caused by Tooltip libraries.
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content}
            className="group relative inline-flex"
        >
            {/* Icon capsule (styled like your Button but not using the Button component inside an <a>) */}
            <div className="h-12 w-12 rounded-full flex justify-center items-center p-0 border border-neutral-700 transition-transform transform-gpu will-change-transform group-hover:scale-105">
                {/* normalize icon size so we don't rely on scale transforms which may be heavy */}
                {React.isValidElement(icon) ? React.cloneElement(icon, { className: 'h-5 w-5' }) : icon}
            </div>

            {/* CSS-only tooltip (appears on hover) */}
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-sm text-white bg-neutral-900 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
                {content}
            </span>
        </a>
    )
}

const socialIcons: SocialIconItem[] = [
    {
        name: 'GitHub',
        icon: <GithubIcon />,
        content: 'GitHub',
        href: 'https://github.com/PrabhjotSinghUbhi',
    },
    {
        name: 'LinkedIn',
        icon: <Linkedin />,
        content: 'LinkedIn',
        href: 'https://www.linkedin.com/in/prabhjotsinghubhi/',
    },
    {
        name: 'resume',
        icon: <DownloadIcon />,
        content: 'Resume',
        href: '/resume.pdf',
    },
]

const skills = ['React', 'Typescript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS']

export default function Hero({ className }: { className?: string }) {
    return (
        <div id="home" className={`z-50 pt-8 ${className}`}>
            <section className="lg:w-1/2 md:3/4 sm:mx-auto w-full px-3 flex flex-col justify-center items-center gap-8 min-h-screen">
                <motion.div
                    className="text-7xl text-center font-bold"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span>
                        <div className=" text-2xl text-gray-500">Hello I'm a</div>
                    </span>
                    <span className="bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-neutral-600 ">   Full Stack <br /> Developer</span>
                </motion.div>

                <motion.p
                    className="text-center text-xl md:text-2xl text-gray-400 font-medium"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Computer Science student building real-world projects and preparing for FAANG companies and GSoC 2025
                </motion.p>

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

                <motion.div
                    className="gap-2 flex items-center justify-center flex-wrap "
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 100 }}
                >
                    <Button
                        variant="custom"
                        className="text-xl h-12 cursor-pointer"
                        onClick={() => {
                            window.scrollTo({ top: document.getElementById('projects')?.offsetTop, behavior: 'smooth' })
                        }}
                    >
                        view my work <ArrowDown />
                    </Button>
                    <Button
                        variant="link"
                        className="text-xl cursor-pointer"
                        onClick={() => {
                            window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })
                        }}
                    >
                        <Mail className="h-5 w-5" /> Get in touch
                    </Button>
                </motion.div>

                <motion.div
                    className=" flex justify-center gap-4 items-center"
                    aria-label="Social Media Links"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 100 }}
                >
                    {socialIcons.map((social) => (
                        <SocialIconCapsule key={social.name} icon={social.icon} content={social.content} href={social.href} />
                    ))}
                </motion.div>

                <div>
                    <Button
                        variant="ghost"
                        className="animate-bounce"
                        onClick={() => {
                            window.scrollTo({ top: document.getElementById('about')?.offsetTop, behavior: 'smooth' })
                        }}
                    >
                        <ArrowBigDownIcon className="h-5 w-5 text-gray-500" />
                    </Button>
                </div>
            </section>

            <BackgroundBeams className="-z-50" />
        </div>
    )
}
