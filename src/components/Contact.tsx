import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, MessageCircle, PhoneCall, Icon } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast({
            title: "Message sent successfully!",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "prabh.ubhi7042@gmail.com",
            href: "mailto:prabh.ubhi7042@gmail.com",
            color: "text-primary"
        },
        {
            icon: PhoneCall,
            label: "Phone",
            value: "+91 9877436553",
            href: "tel:+919877436553",
            color: "text-accent"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Punjab, India",
            href: "https://maps.google.com/?q=Punjab,India",
            color: "text-accent-secondary"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/PrabhjotSinghUbhi",
            color: "hover:text-foreground"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/prabhjotsinghubhi",
            color: "hover:text-accent-secondary"
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://x.com/prabh_018",
            color: "hover:text-accent"
        },
    ];

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to discuss opportunities, collaborate on projects, or just have a tech conversation?
                        I'd love to hear from you. Let's build something amazing together!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8 animate-fade-in-up">
                        <Card className="border-border bg-gradient-secondary">
                            <CardHeader>
                                <CardTitle className="text-2xl">Let's Connect</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    I'm always open to discussing new opportunities, interesting projects,
                                    or potential collaborations.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Contact Details */}
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card-hover transition-colors group"
                                        >
                                            <div className={`p-2 rounded-lg bg-muted ${info.color}`}>
                                                <info.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground">{info.label}</div>
                                                <div className="font-medium group-hover:text-primary transition-colors">
                                                    {info.value}
                                                </div>
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
                                                <social.icon className="h-5 w-5" />
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
                    <div className="lg:col-span-2 animate-slide-in-right">
                        <Card className="border-border bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl">Send a Message</CardTitle>
                                <CardDescription className="text-muted-foreground">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Full Name *
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your full name"
                                                required
                                                className="border-border focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email Address *
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                required
                                                className="border-border focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject *
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What would you like to discuss?"
                                            required
                                            className="border-border focus:border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message *
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell me about your project, opportunity, or just say hello!"
                                            rows={6}
                                            className="border-border focus:border-primary resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center w-full space-x-2">
                                                <Send className="h-4 w-4" />
                                                <span>Send Message</span>
                                            </div>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 animate-fade-in-up">
                    <Card className="inline-block border-border bg-gradient-primary/10 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold mb-4">
                                Ready to <span className="gradient-text">Collaborate?</span>
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl">
                                Whether you're a recruiter looking for talent, a founder with an exciting startup idea,
                                or a fellow developer interested in collaboration - I'd love to connect!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground" asChild>
                                    <a href="mailto:prabh.ubhi@gmail.com" className="border bg-accent-foreground">
                                        <Mail className="mr-2 h-4 w-4" />
                                        Email Me Directly
                                    </a>
                                </Button>
                                <Button variant="outline" className="border-border" asChild>
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                        Download Resume
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;