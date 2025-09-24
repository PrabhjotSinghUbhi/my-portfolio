import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, PhoneCall, MapPin, Linkedin, Github, Twitter } from "lucide-react"; import { motion } from "framer-motion";
import MyForm from "./ContactForm";

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            label: "Email",
            value: "prabh.ubhi7042@gmail.com",
            href: "mailto:prabh.ubhi7042@gmail.com",
            color: "text-primary",
        },
        {
            icon: <PhoneCall className="h-5 w-5" />,
            label: "Phone",
            value: "+91 9877436553",
            href: "tel:+919877436553",
            color: "text-accent",
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: "Location",
            value: "Punjab, India",
            href: "https://maps.google.com/?q=Punjab,India",
            color: "text-accent-secondary",
        },
    ];

    const socialLinks = [
        {
            icon: <Github className="h-5 w-5" />,
            label: "GitHub",
            href: "https://github.com/PrabhjotSinghUbhi",
            color: "hover:text-foreground",
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/prabhjotsinghubhi",
            color: "hover:text-accent-secondary",
        },
        {
            icon: <Twitter className="h-5 w-5" />,
            label: "Twitter",
            href: "https://x.com/prabh_018",
            color: "hover:text-accent",
        },
    ];

    return (

        <section id="contact" className="py-20 bg-background overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full w-full">
                {/* Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                        Ready to discuss opportunities, collaborate on projects, or just have a tech conversation? I'd love
                        to hear from you. Let's build something amazing together!
                    </p>
                </div>

                {/* Responsive Contact Section */}
                <div
                    className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-stretch w-full max-w-6xl mx-auto"
                >
                    {/* Contact Info */}
                    <div className="mb-6 lg:mb-0 lg:w-1/2 flex-shrink-0">
                        <Card className="border-border bg-gradient-secondary w-full h-full">
                            <CardHeader className="p-4 sm:p-6">
                                <CardTitle className="text-xl sm:text-2xl">Let's Connect</CardTitle>
                                <CardDescription className="text-muted-foreground text-sm sm:text-base">
                                    I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                                <div className="space-y-3 sm:space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-card-hover transition-colors group"
                                        >
                                            <div className={`p-1.5 sm:p-2 rounded-lg bg-muted ${info.color}`}>{info.icon}</div>
                                            <div className="min-w-0 flex-1">
                                                <div className="text-xs sm:text-sm text-muted-foreground">{info.label}</div>
                                                <div className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base break-all">{info.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="pt-4 sm:pt-6 border-t border-border">
                                    <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
                                    <div className="flex space-x-3 sm:space-x-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`p-2 sm:p-3 rounded-full bg-muted border border-border hover:bg-card-hover transition-all duration-300 ${social.color}`}
                                                title={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="pt-4 sm:pt-6 border-t border-border">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-success rounded-full animate-pulse"></div>
                                        <span className="text-xs sm:text-sm font-medium">Available for new opportunities</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                                        Open to full-time SDE roles, internships, and freelance projects
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="flex flex-col justify-center gap-4 lg:w-1/2">
                        <Card className="border-border bg-card/50 backdrop-blur-sm w-full h-full">
                            <CardHeader className="p-4 sm:p-6">
                                <CardTitle className="text-xl sm:text-2xl">Send a Message</CardTitle>
                                <CardDescription className="text-muted-foreground text-sm sm:text-base">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <MyForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="text-center mt-12 sm:mt-16 w-full max-w-4xl mx-auto"
                >
                    <Card className="inline-block border-border bg-gradient-primary/10 backdrop-blur-sm w-full max-w-none">
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                                Ready to <span className="gradient-text">Collaborate?</span>
                            </h3>
                            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
                                Whether you're a recruiter looking for talent, a founder with an exciting startup idea,
                                or a fellow developer interested in collaboration - I'd love to connect!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                                <a
                                    href="mailto:prabh.ubhi7042@gmail.com"
                                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-3 sm:px-4 py-2 sm:py-3 rounded-md inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" /> Email Me Directly
                                </a>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-border px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-card-hover transition text-center text-sm sm:text-base"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;