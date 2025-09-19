import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/PrabhjotSinghUbhi", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/prabhjotsinghubhi", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/prabh_018", label: "Twitter" },
        { icon: Mail, href: "mailto:prabh.ubhi7042@gmail.com", label: "Email" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-br from-secondary/50 via-background to-secondary/50 border-t border-border">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="text-2xl font-bold gradient-text">&lt;Developer /&gt;</div>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            Full Stack Developer passionate about creating impactful software solutions.
                            Building projects for FAANG companies and preparing for GSoC 2025.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-secondary border border-border hover:bg-card-hover hover:border-primary transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <div className="space-y-2">
                            {[
                                { name: "About Me", id: "about" },
                                { name: "Skills", id: "skills" },
                                { name: "Projects", id: "projects" },
                                { name: "Contact", id: "contact" },
                            ].map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Resources</h3>
                        <div className="space-y-2">
                            {[
                                { name: "Resume", href: "/resume.pdf" },
                                { name: "GitHub", href: "https://github.com" },
                                { name: "LinkedIn", href: "https://linkedin.com" },
                                { name: "Blog Posts", href: "#blog" },
                            ].map((link, index) => (
                                <a
                                    key={link.name + index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>© {currentYear} Built with</span>
                            <Heart className="h-4 w-4 text-red-500 fill-current" />
                            <span>by Prabhjot Singh</span>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={scrollToTop}
                                className="text-muted-foreground hover:text-primary"
                            >
                                <ArrowUp className="h-4 w-4 mr-2" />
                                Back to Top
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-accent/10 border border-border rounded-lg backdrop-blur-sm">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Currently available for new opportunities</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;