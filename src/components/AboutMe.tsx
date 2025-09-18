import { Brackets, GitBranchIcon, GitPullRequestArrowIcon, School2 } from 'lucide-react'
import React from 'react'
import { cn } from "@/lib/utils";
import { Particles } from './ui/shadcn-io/particles';

const Points = ({ icon }: { icon: React.ReactNode }) => {
    return (
        <div className={cn(
            "relative flex items-center justify-center",
            "w-12 h-12 rounded-xl",
            "bg-gradient-to-br from-primary/20 to-primary/5",
            "border border-primary/20",
            "transition-all duration-300 ease-in-out",
            "group-hover:scale-110 group-hover:rotate-3",
            "group-hover:from-primary/30 group-hover:to-primary/10",
            "group-hover:border-primary/30",
            "group-hover:shadow-lg group-hover:shadow-primary/25"
        )}>
            <div className="text-primary transition-colors duration-300 group-hover:text-primary">
                {icon}
            </div>
            <div className={cn(
                "absolute inset-0 rounded-xl opacity-0",
                "bg-gradient-to-br from-primary/10 to-transparent",
                "transition-opacity duration-300",
                "group-hover:opacity-100"
            )} />
        </div>
    );
};


const MySelfPoints = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
    return (
        <div className='flex my-4 border border-gray-700 rounded-xl p-4 gap-4'>
            <div className='mr-6'>
                <Points icon={icon} />
            </div>
            <div>
                <h4 className='text-xl font-bold'>{title}</h4>
                <p className='text-gray-400'>{description}</p>
            </div>
        </div>
    )
}

const pointsData = [
    {
        title: "Full Stack Development",
        description: "Building responsive and dynamic web applications using React, Node.js, and MongoDB.",
        icon: <Brackets />
    },
    {
        title: "Open Source Contribution",
        description: "Actively contributing to open source projects and collaborating with the developer community.",
        icon: <GitBranchIcon />
    },
    {
        title: "Tech Enthusiast",
        description: "Passionate about learning new technologies and staying updated with industry trends.",
        icon: <GitPullRequestArrowIcon />
    },
    {
        title: "Computer Science Student",
        description: "Currently pursuing my degree while building real-world projects",
        icon: <School2 />
    }
];

function AboutMe({className}: {className?: string}) {
    return (
        <div className={`flex 100vh flex-col relative justify-center gap-8 px-4 md:px-16 lg:px-32 ${className}`}>

            <Particles
                className="absolute inset-0 "
                quantity={500}
                ease={80}
                color="#fff"

                refresh
            />

            {/* About Me  */}
            <div>
                <h2 className='text-5xl text-center font-extrabold'>About Me</h2>
                <p className='text-center text-lg md:text-xl text-gray-400 font-medium max-w-3xl mx-auto mt-4'>
                    I'm a passionate full stack developer and computer science student dedicated to creating impactful software solutions. My journey combines academic excellence with hands-on project development, always aiming for the highest standards.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row gap-16'>
                <div>
                    {/* My Journey  */}
                    <div >
                        <h3 className='text-3xl text-start font-bold mt-8'>My Journey</h3>
                        <p className='text-start text-lg md:text-xl text-gray-400  font-medium max-w-3xl mx-auto mt-4'>
                            As a computer science student, I've been deeply immersed in the world of software development, constantly learning and applying new technologies. My passion lies in creating solutions that not only work but also provide exceptional user experiences.

                            I'm currently preparing for Google Summer of Code 2025 while building projects that demonstrate my capabilities for FAANG companies. Each project I create is an opportunity to push my boundaries and learn something new.
                        </p>
                    </div>
                    {/* What drives me  */}
                    <div>
                        <h3 className='text-3xl text-start font-bold mt-8'>
                            What drives me
                        </h3>
                        <p className='text-start text-lg md:text-xl text-gray-400 font-medium max-w-3xl mx-auto mt-4'>
                            I believe in the power of technology to solve real-world problems. Whether it's building a YouTube-like streaming platform or contributing to open source projects, I approach every challenge with curiosity and determination.
                        </p>
                    </div>
                </div>
                <div className='justify-self-start'>
                    {/* Points  */}
                    <div className='my-5'>
                        {pointsData.map((point) => (
                            <MySelfPoints
                                key={point.title}
                                icon={point.icon}
                                title={point.title}
                                description={point.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
