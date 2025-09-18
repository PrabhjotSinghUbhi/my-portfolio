import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Database, Globe, Star, TrendingUp, Award, Zap } from 'lucide-react';

// Types
interface SkillBoxType {
    icon: React.ReactNode;
    domain: string;
    skills: string[];
    experience?: string;
    projects?: number;
    speciality?: string;
}

interface SkillCapsuleProps {
    skill: string;
    index: number;
}

// Enhanced SkillCapsule component with micro-interactions
function SkillCapsule({ skill, index }: SkillCapsuleProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: "spring",
                stiffness: 120
            }}
            whileHover={{
                scale: 1.08,
                transition: { duration: 0.2 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative inline-block px-4 py-2 text-sm font-medium bg-gradient-to-r from-muted via-muted to-muted/80 text-muted-foreground rounded-full border border-border/50 hover:bg-gradient-to-r hover:from-accent hover:to-accent/80 hover:text-accent-foreground transition-all duration-300 cursor-default shadow-sm hover:shadow-md overflow-hidden"
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full"
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>
            <span className="relative z-10">{skill}</span>

            {/* Sparkle effect on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 180 }}
                        exit={{ scale: 0, rotate: 360 }}
                        className="absolute -top-1 -right-1 text-primary/60"
                    >
                        <Star size={12} fill="currentColor" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.span>
    );
}

// Enhanced SkillBox component with rich content
function SkillBox({ icon, domain, skills, experience, projects, speciality }: SkillBoxType) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (

        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            whileHover={{
                y: -12,
                rotateX: -2,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
            }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative bg-gradient-to-br from-card via-card to-card/95 border border-border/60 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/50 overflow-hidden cursor-pointer transform-gpu"
        >
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-xl" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        initial={{ x: Math.random() * 300, y: Math.random() * 200, opacity: 0 }}
                        animate={{
                            x: Math.random() * 300,
                            y: Math.random() * 200,
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Header section */}
            <div className="relative z-10 mb-6">
                <motion.div
                    className="flex items-center justify-between mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/15 to-primary/8 border border-primary/30 group-hover:from-primary/35 group-hover:via-primary/25 group-hover:to-primary/15 transition-all duration-500 shadow-lg">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                            className="text-primary"
                        >
                            {icon}
                        </motion.div>
                    </div>

                    {/* Stats indicators */}
                    <div className="flex flex-col items-end space-y-1">
                        {projects && (
                            <motion.div
                                className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Award size={10} />
                                <span>{projects}+ projects</span>
                            </motion.div>
                        )}
                        {experience && (
                            <motion.div
                                className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full"
                                whileHover={{ scale: 1.05 }}
                            >
                                <TrendingUp size={10} />
                                <span>{experience}</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Domain title with gradient text */}
                <motion.h4
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-500"
                >
                    {domain}
                </motion.h4>

                {/* Speciality badge */}
                {speciality && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center space-x-1 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                    >
                        <Zap size={10} />
                        <span>{speciality}</span>
                    </motion.div>
                )}
            </div>

            {/* Skills container with enhanced layout */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative z-10 space-y-4"
            >
                <div className="flex flex-wrap gap-3 justify-start">
                    {skills.slice(0, isExpanded ? skills.length : 4).map((skill, index) => (
                        <SkillCapsule key={index} skill={skill} index={index} />
                    ))}
                </div>

                {/* Expand/Collapse indicator */}
                {skills.length > 4 && (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer py-2"
                    >
                        <span>{isExpanded ? 'Show less' : `+${skills.length - 4} more skills`}</span>
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            ↓
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary/60"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, delay: 0.5 }}
                />
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-full group-hover:from-primary/30 transition-colors duration-500" />
            </div>
        </motion.div>

    );
}

// Demo component with richer data
export default function Expertise({ className }: { className: string }) {
    const skillBoxes = [
        {
            icon: <Code2 size={28} />,
            domain: "Frontend Development",
            experience: "5+ years",
            projects: 25,
            speciality: "React Ecosystem",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "Redux Toolkit", "React Query"]
        },
        {
            icon: <Database size={28} />,
            domain: "Backend Development",
            experience: "4+ years",
            projects: 18,
            speciality: "Scalable APIs",
            skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Redis", "Docker", "AWS"]
        },
        {
            icon: <Palette size={28} />,
            domain: "Design & UI/UX",
            experience: "3+ years",
            projects: 30,
            speciality: "Design Systems",
            skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems", "User Research", "Wireframing"]
        },
        {
            icon: <Globe size={28} />,
            domain: "Web Technologies",
            experience: "6+ years",
            projects: 40,
            speciality: "Performance",
            skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "WebSockets", "PWA", "Web Components", "Performance Optimization"]
        }
    ];

    return (
        <div id='skills' className={`min-h-screen bg-gradient-to-br pt-24 from-background via-background to-muted/20 p-8 ${className}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 400, type: "spring", stiffness: 100 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore my technical skills and experience across various domains. Click on any card to see more details.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skillBoxes.map((skillBox, index) => (
                        <motion.div
                            key={index}

                            initial={{ opacity: 0, y: 60, rotateY: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 80
                            }}
                        >
                            <SkillBox {...skillBox} />
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="border mt-16 rounded-2xl w-full mx-auto md:w-2/3  py-5 "
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 400, delay: 1, type: "spring", stiffness: 100 }}
                >
                    <h4 className='text-3xl text-center p-5 font-bold text-green-400'>Continuous Learning</h4>
                    <p className='text-wrap mx-8 text-center'>
                        I'm passionate about contributing to open source projects and staying updated with the latest technologies. Currently preparing for GSoC 2025 while continuously expanding my skill set to meet industry standards.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}