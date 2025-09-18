import { GitBranchIcon, GithubIcon, Group, Medal, Star } from 'lucide-react'
import React from 'react'
import { RecentContributionCard } from './temp'
import GithubHeatmap from './GithubHeatMap'
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const gsocOrgs = [
    {
        name: "Mozilla",
        project: "Firefox Developer Tools Enhancement",
        description: "Working on improving debugging tools and developer experience in Firefox DevTools",
        status: "Applied",
        focus: "Frontend Development"
    },
    {
        name: "Apache Software Foundation",
        project: "Apache Superset Dashboard Components",
        description: "Contributing to data visualization components and improving user interface",
        status: "Researching",
        focus: "Data Visualization"
    },
    {
        name: "Google",
        project: "Angular Material Components",
        description: "Enhancing accessibility and performance of Material Design components",
        status: "Preparing",
        focus: "UI/UX"
    }
];


const contributionData = [
    {
        icon: <GitBranchIcon />,
        number: 15,
        contributionType: "Pull Requests"
    },
    {
        icon: <Star />,
        number: 30,
        contributionType: "Stars"
    },
    {
        icon: <Group />,
        number: 10,
        contributionType: "Projects"
    },
    {
        icon: <Medal />,
        number: 5,
        contributionType: "Contributions"
    }
]

const ContributionCard = ({ icon, number, contributionType }) => {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">{icon}</div>
                <div className="text-2xl font-bold">{number}</div>
                <div className="text-gray-600">{contributionType}</div>
            </div>
        </div>
    )
}

const recentContributionData = [
    {
        GithubIcon: "🚀",
        repoName: "awesome-project",
        description: "A modern web application built with React and TypeScript, featuring a clean UI and robust architecture.",
        status: <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Merged</span>,
        myContribution: "Implemented the entire authentication system with JWT tokens, password reset functionality, and role-based access control.",
        contributionType: <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Feature</span>
    },
    {
        GithubIcon: "📚",
        repoName: "docs-site",
        description: "Comprehensive documentation website with interactive examples and clear tutorials for developers.",
        status: <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">In Review</span>,
        myContribution: "Fixed critical accessibility issues and improved keyboard navigation throughout the documentation.",
        contributionType: <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Bug Fix</span>
    }
];
function OpenSource() {
    return (
        <div id='opensource' className='my-20 pt-24 px-5 md:px-20 lg:px-40'>
            <div className=''>
                <div>
                    <h3 className='text-5xl text-center font-bold mb-4 '>
                        Open Source Contributions
                    </h3>
                    <p className='text-wrap text-gray-400 mb-8 text-center max-w-3xl mx-auto'>
                        Contributing to the open source community and preparing for Google Summer of Code 2025. Building meaningful relationships with maintainers and learning from industry experts.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                        contributionData.map((data) => (
                            <ContributionCard key={data.number} icon={data.icon} number={data.number} contributionType={data.contributionType}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='my-20 px-5 md:px-20 lg:px-40'>
                    <h3 className='text-5xl text-center font-bold mb-4 '>
                        Recent Contributions
                    </h3>
                    <p className='text-wrap text-gray-400 mb-8 text-center max-w-3xl mx-auto'>
                        Here are some of my recent contributions to open source projects. I actively participate in code reviews, bug fixes, and feature enhancements.
                    </p>
                </div>
                <div className='md:flex justify-center mb-10 hidden'>
                    <GithubHeatmap />
                </div>
                <div className='flex flex-col gap-6 px-5 md:px-20 lg:px-40 mb-20'>
                    {
                        recentContributionData.map((data,) => (
                            <RecentContributionCard key={data.repoName} {...data} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-4">
                            <span className="gradient-text">GSoC 2025</span> Preparation
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Actively researching and contributing to organizations for Google Summer of Code 2025.
                            Building relationships with mentors and understanding project requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {gsocOrgs.map((org, index) => (
                            <Card
                                key={index}
                                className="card-hover border-border bg-gradient-accent/5 backdrop-blur-sm animate-slide-in-right"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-lg">{org.name}</CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        {org.project}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        {org.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <Badge
                                            className={`${org.status === 'Applied'
                                                ? 'bg-green-500 text-white'
                                                : org.status === 'Researching'
                                                    ? 'bg-warning text-black'
                                                    : 'bg-primary text-white'
                                                } px-2 py-1 text-sm rounded-full
                                                ${org.status === 'Preparing' ? 'bg-green-500 text-white' :
                                                    org.status === 'Researching' ? 'bg-yellow-300 text-black' :
                                                        'bg-blue-500 text-white'
                                                } ${org.status === "Preparing" ? 'bg-blue-500 text-white' : ''
                                                } px-2 py-1 text-sm rounded-full
                                                `}
                                        >
                                            {org.status}
                                        </Badge>
                                        <Badge className="border-border ">
                                            {org.focus}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <Card className="inline-block border-border bg-gradient-primary/10 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold mb-4">
                                Let's <span className="gradient-text">Collaborate</span>
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl">
                                I'm always looking for new open source projects to contribute to and
                                opportunities to collaborate with other developers. Let's build something amazing together!
                            </p>
                            <Button variant={"default"} className="bg-gradient-primary" asChild>
                                <a href="https://github.com/PrabhjotSinghUbhi" target="_blank" rel="noopener noreferrer"
                                    className='bg-gradient-to-br from-[#333] to-white text-white px-4 py-2 rounded-md flex items-center justify-center hover:scale-105 transition-transform'>
                                    <GithubIcon className="mr-2 h-4 w-4" />
                                    Follow on GitHub
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default OpenSource
