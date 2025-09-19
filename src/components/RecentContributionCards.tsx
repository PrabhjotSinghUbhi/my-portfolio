import { Github, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const RecentContributionCards = ({ contributions }: { contributions: any[] }) => {
    return <div className="space-y-8 mb-16">
        <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center">
            Recent <span className="gradient-text">Contributions</span>
        </motion.h3>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6">
            {contributions.map((contrib, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    key={contrib.repo}
                    className="">
                    <Card
                        key={contrib.repo}
                        className="card-hover border-border bg-card/50 backdrop-blur-sm animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="flex items-center space-x-3 text-xl mb-2">
                                        <Github className="h-5 w-5" />
                                        <span>{contrib.repo}</span>
                                        {contrib.status}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground mb-3">
                                        {contrib.description}
                                    </CardDescription>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 mr-1" />
                                        {contrib.stars}
                                    </div>
                                    {contrib.language}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                                        My Contribution
                                    </h4>
                                    <p className="text-foreground">{contrib.myContribution}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    {contrib.type}
                                    <Button variant="outline" size="sm" className="border-border" asChild>
                                        <a href={`https://github.com/${contrib.repo}`} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-3 w-3" />
                                            View Repository
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    </div>
}

export default RecentContributionCards;