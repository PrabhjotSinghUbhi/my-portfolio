import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, PhoneCall, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
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
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to discuss opportunities, collaborate on projects, or just have a tech conversation? I'd love
                        to hear from you. Let's build something amazing together!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="grid lg:grid-cols-3 gap-12"
                >
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <Card className="border-border bg-gradient-secondary">
                            <CardHeader>
                                <CardTitle className="text-2xl">Let's Connect</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card-hover transition-colors group"
                                        >
                                            <div className={`p-2 rounded-lg bg-muted ${info.color}`}>{info.icon}</div>
                                            <div>
                                                <div className="text-sm text-muted-foreground">{info.label}</div>
                                                <div className="font-medium group-hover:text-primary transition-colors">{info.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="pt-6 border-t border-border">
                                    <h4 className="font-semibold mb-4">Follow Me</h4>
                                    <div className="flex space-x-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`p-3 rounded-full bg-muted border border-border hover:bg-card-hover transition-all duration-300 ${social.color}`}
                                                title={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="pt-6 border-t border-border">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium">Available for new opportunities</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Open to full-time SDE roles, internships, and freelance projects
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-border bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl">Send a Message</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <MyForm />
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="text-center mt-16"
                >
                    <Card className="inline-block border-border bg-gradient-primary/10 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold mb-4">
                                Ready to <span className="gradient-text">Collaborate?</span>
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Whether you're a recruiter looking for talent, a founder with an exciting startup idea,
                                or a fellow developer interested in collaboration - I'd love to connect!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:prabh.ubhi7042@gmail.com"
                                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-4 py-3 rounded-md inline-flex items-center gap-2"
                                >
                                    <Mail className="h-4 w-4" /> Email Me Directly
                                </a>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-border px-4 py-3 rounded-md hover:bg-card-hover transition"
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