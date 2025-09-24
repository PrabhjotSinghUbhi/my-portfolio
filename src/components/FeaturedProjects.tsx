import { motion, AnimatePresence } from 'framer-motion';
import {
    ExternalLink,
    Github,
    Star,
    Calendar,
    Users,
    Code,
    TrendingUp,
    Award,
    Zap,
    Eye,
    Heart,
    Play,
    ArrowRight,
} from 'lucide-react';
import { useState } from 'react';

// Types
interface ProjectType {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    category: string;
    status: 'completed' | 'in-progress' | 'beta';
    featured?: boolean;
    stats: {
        stars?: number,
        forks?: number,
        views?: number,
        likes?: number,
    };
    links: {
        demo?: string,
        github?: string,
        case_study?: string,
    };
    year: string;
    team_size?: number;
    duration?: string;
    highlights: string[];
}

interface TechBadgeProps {
    tech: string;
    index: number;
}

// Enhanced Technology Badge
function TechBadge({ tech, index }: TechBadgeProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
                type: 'spring',
                stiffness: 150,
            }}
            whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative inline-block px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary/15 to-primary/10 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default overflow-hidden"
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg"
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>
            <span className="relative z-10">{tech}</span>
        </motion.span>
    );
}

// Project Card Component
function ProjectCard({
    project,
    index,
}: {
    project: ProjectType,
    index: number,
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const statusColors = {
        completed:
            'from-green-500/20 to-green-400/10 border-green-400/30 text-green-400',
        'in-progress':
            'from-blue-500/20 to-blue-400/10 border-blue-400/30 text-blue-400',
        beta: 'from-purple-500/20 to-purple-400/10 border-purple-400/30 text-purple-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 80,
            }}
            whileHover={{
                y: -15,
                rotateX: -5,
                transition: { duration: 0.4, type: 'spring', stiffness: 200 },
            }}
            className={`group relative bg-gradient-to-br from-card via-card to-card/90 border border-border/60 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/15 transition-all duration-700 hover:border-primary/50 transform-gpu ${project.featured
                ? 'ring-2 ring-primary/20 shadow-lg shadow-primary/10'
                : ''
                }`}
        >
            {/* Featured badge */}
            {project.featured && (
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -45 }}
                    className="absolute top-4 -right-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-1 text-xs font-bold z-20 shadow-lg"
                >
                    <div className="flex items-center space-x-1">
                        <Star size={10} fill="currentColor" />
                        <span>FEATURED</span>
                    </div>
                </motion.div>
            )}

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl" />
            </div>

            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
                        initial={{
                            x: Math.random() * 400,
                            y: Math.random() * 300,
                            opacity: 0,
                        }}
                        animate={{
                            x: Math.random() * 400,
                            y: Math.random() * 300,
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                />

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onLoad={() => setImageLoaded(true)}
                    loading='lazy'
                />

                {/* Image overlay with stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 flex flex-wrap gap-2 z-20"
                >
                    <div className="flex items-center space-x-1 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
                        <Calendar size={10} />
                        <span>{project.year}</span>
                    </div>

                    <div
                        className={`flex items-center space-x-1 bg-gradient-to-r ${statusColors[project.status]
                            } backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border`}
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        <span className="capitalize">
                            {project.status.replace('-', ' ')}
                        </span>
                    </div>
                </motion.div>

                {/* Play button for demo */}
                {project.links.demo && (
                    <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15"
                    >
                        <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                            <Play
                                size={24}
                                fill="currentColor"
                                className="text-primary-foreground ml-1"
                            />
                        </div>
                    </motion.a>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 p-8">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                        <motion.h3
                            className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-500"
                            whileHover={{ x: 5 }}
                        >
                            {project.title}
                        </motion.h3>

                        <div className="flex items-center space-x-2">
                            <motion.span
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold border border-primary/20"
                            >
                                {project.category}
                            </motion.span>
                        </div>
                    </div>

                    {/* Project stats */}
                    <div className="flex items-center space-x-4 mb-4">
                        {project.stats.stars && (
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Star
                                    size={14}
                                    className="text-yellow-500"
                                    fill="currentColor"
                                />
                                <span>{project.stats.stars}</span>
                            </div>
                        )}
                        {project.stats.views && (
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Eye size={14} />
                                <span>{project.stats.views}</span>
                            </div>
                        )}
                        {project.stats.likes && (
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Heart size={14} className="text-red-500" />
                                <span>{project.stats.likes}</span>
                            </div>
                        )}
                        {project.team_size && (
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Users size={14} />
                                <span>{project.team_size} team</span>
                            </div>
                        )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                        {isExpanded
                            ? project.longDescription
                            : project.description}
                    </p>

                    {project.longDescription !== project.description && (
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            whileHover={{ x: 5 }}
                            className="mt-2 text-primary text-sm font-medium hover:underline flex items-center space-x-1"
                        >
                            <span>
                                {isExpanded ? 'Show less' : 'Read more'}
                            </span>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                ↓
                            </motion.div>
                        </motion.button>
                    )}
                </div>

                {/* Key Highlights */}
                {/* {project.highlights.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center">
                            <Sparkles size={14} className="mr-2 text-primary" />
                            Key Highlights
                        </h4>
                        <div className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex items-start space-x-2 text-sm text-muted-foreground"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>{highlight}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )} */}

                {/* Technologies */}
                <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center">
                        <Code size={14} className="mr-2 text-primary" />
                        Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col md:flex-row gap-2 items-center space-x-3">
                    {project.links.demo && (
                        <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center w-full space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group/btn justify-center"
                        >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                            <ArrowRight
                                size={14}
                                className="group-hover/btn:translate-x-1 transition-transform"
                            />
                        </motion.a>
                    )}

                    {project.links.github && (
                        <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-muted hover:bg-accent text-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-border hover:border-primary/30 w-full justify-center"
                        >
                            <Github size={16} />
                            <span>Code</span>
                        </motion.a>
                    )}

                </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/20">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, delay: index * 0.2 }}
                />
            </div>
        </motion.div>
    );
}

// Main Featured Projects Component
export default function FeaturedProjects() {
    const projects: ProjectType[] = [

        {
            id: "1",
            title: "AI-Powered Analytics Dashboard",
            description: "A comprehensive analytics platform with real-time data visualization and machine learning insights.",
            longDescription: "A comprehensive analytics platform that combines real-time data visualization with advanced machine learning insights. Features include predictive analytics, custom dashboard creation, collaborative workspaces, and automated reporting. Built with modern web technologies and optimized for performance.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
            technologies: [
                "React",
                "TypeScript",
                "D3.js",
                "Python",
                "TensorFlow",
                "PostgreSQL",
                "Redis",
                "Docker"
            ],
            category: "Web Application",
            status: "completed",
            featured: true,
            stats: {
                "stars": 234,
                "views": 12500,
                "likes": 89
            },
            links: {
                "demo": "https://demo.example.com",
                "github": "https://github.com/example",
                "case_study": "https://case-study.example.com"
            },
            year: "2024",
            team_size: 4,
            duration: "6 months",
            highlights: [
                "Reduced data processing time by 75% using optimized algorithms",
                "Supports real-time analysis of 1M+ data points",
                "Won \"Best Data Visualization\" at TechCrunch Disrupt 2024",
                "Featured in top 10 analytics tools by Forbes"
            ]
        },
        {
            id: "2",
            title: "Stream Sphere - MERN Streaming Platform",
            description: "A modern MERN-based streaming platform that enables users to watch, upload, and manage video content seamlessly with a responsive UI and real-time playback.",
            longDescription: "Stream Sphere is a powerful, all-in-one platform designed to provide real-time insights through interactive dashboards and AI-driven analytics. The project focuses on making complex data accessible, actionable, and visually engaging for businesses, developers, and decision-makers.",
            image: "https://res.cloudinary.com/prabhjotsingh/image/upload/v1757937893/croppedLogo_yjocsl.png",
            technologies: [
                "React",
                "Javascript",
                "MongoDB",
                "Express",
                "Node",
                "Cloudinary",
                "ShadCN",
            ],
            category: "Web Application",
            status: "completed",
            featured: true,
            stats: {
                "stars": 234,
                "views": 12500,
                "likes": 89
            },
            links: {
                "demo": "https://streamsphere.prabh.me",
                "github": "https://github.com/PrabhjotSinghUbhi/StreamSphere.git",
                "case_study": "https://streamsphere.prabh.me"
            },
            year: "2024",
            team_size: 4,
            duration: "6 months",
            highlights: [
                "Reduced data processing time by 75% using optimized algorithms",
                "Supports real-time analysis of 1M+ data points",
                "Won \"Best Data Visualization\" at TechCrunch Disrupt 2024",
                "Featured in top 10 analytics tools by Forbes"
            ]
        }

    ];

    return (
        <div id='projects' className="min-h-screen pt-20 bg-gradient-to-br from-background via-background to-muted/10 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                            duration: 1,
                            type: 'spring',
                            stiffness: 100,
                        }}
                        className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold border border-primary/20 mb-6"
                    >
                        <Zap size={16} />
                        <span>Featured Work</span>
                        <TrendingUp size={16} />
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                        Featured Projects
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Explore my latest work spanning across web development,
                        mobile apps, IoT platforms, and blockchain technologies.
                        Each project showcases innovative solutions and
                        cutting-edge technologies.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 80, delay: 0.2 }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </motion.div>

                {/* Call to Action */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.6, duration: 1 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
                    >
                        <span>View All Projects</span>
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </motion.button>
                </motion.div> */}
            </div>
        </div>
    );
}
