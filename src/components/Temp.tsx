import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const RecentContributionCard = ({
    GithubIcon,
    repoName,
    description,
    status,
    myContribution,
    contributionType
}: {
    GithubIcon: React.ReactNode;
    repoName: string;
    description: string;
    status: React.ReactNode;
    myContribution: string;
    contributionType: React.ReactNode;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
                y: -4,
                transition: { duration: 0.2 }
            }}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
        >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <motion.div
                variants={contentVariants}
                className="relative z-10"
            >
                <motion.div
                    variants={itemVariants}
                    className="mb-4"
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                            <motion.div
                                className="mr-3 text-2xl"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {GithubIcon}
                            </motion.div>
                            <motion.h3
                                className="text-lg font-semibold text-foreground"
                                variants={itemVariants}
                            >
                                {repoName}
                            </motion.h3>
                        </div>
                        <motion.div variants={itemVariants}>
                            {status}
                        </motion.div>
                    </div>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm text-muted-foreground leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                >
                    <motion.h4
                        className="text-base font-medium text-foreground"
                        variants={itemVariants}
                    >
                        My Contribution
                    </motion.h4>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm text-muted-foreground leading-relaxed"
                    >
                        {myContribution}
                    </motion.p>
                    <motion.div variants={itemVariants}>
                        {contributionType}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

// Example usage with sample data
const ExampleUsage = () => {
    const sampleCards = [
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

    return (
        <div className="min-h-screen bg-background p-8 space-y-6">
            <h1 className="text-2xl font-bold mb-8 text-center">Recent Contributions</h1>
            <div className="max-w-2xl mx-auto space-y-6">
                {sampleCards.map((card, index) => (
                    <RecentContributionCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default ExampleUsage;