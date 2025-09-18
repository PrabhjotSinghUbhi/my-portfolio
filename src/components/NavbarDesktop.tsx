import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Award, Briefcase, Code, Github, Home, MessageCircle, User } from 'lucide-react';

function NavbarDesktop() {

    const navItems = [
        { name: "Home", href: "#home", icon: Home },
        { name: "About", href: "#about", icon: User },
        { name: "Skills", href: "#skills", icon: Code },
        { name: "Projects", href: "#projects", icon: Briefcase },
        { name: "Open Source", href: "#opensource", icon: Github },
        { name: "Contact", href: "#contact", icon: MessageCircle },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.slice(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };


    return (
        <div>
            <aside className='fixed border-b-1 border-neutral-500 top-0 left-0 right-0 h-16  bg-blend-luminosity text-3xl flex justify-between items-center px-6 py-3 z-50 backdrop-blur-md '>
                <section id='logo' className='font-extrabold gradient-text text-black dark:text-white '>
                    &DEV
                </section>
                <section>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${activeSection === item.href.slice(1)
                                        ? 'bg-primary text-primary-foreground shadow-primary'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                                        }`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
                <section id='Menu' className='dark:text-white text-black '>
                    <Button onClick={() => {
                        window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: 'smooth' });
                    }}>
                        Let's Talk
                    </Button>
                </section>
            </aside>
        </div>
    )
}

export default NavbarDesktop
