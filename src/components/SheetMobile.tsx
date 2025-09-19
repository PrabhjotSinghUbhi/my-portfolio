import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import {
    Braces,
    Contact2,
    Github,
    Home,
    Menu,
    PersonStanding,
    ShoppingBasket,
    Mail
} from "lucide-react";
import { cn } from "@/lib/utils";

const navbarItems = [
    {
        name: "Home",
        icon: Home,
        href: "#home"
    },
    {
        name: "About",
        icon: PersonStanding,
        href: "#about"
    },
    {
        name: "Skills",
        icon: Braces,
        href: "#skills"
    },
    {
        name: "Projects",
        icon: ShoppingBasket,
        href: "#projects"
    },
    {
        name: "Open Source",
        icon: Github,
        href: "#opensource"
    },
    {
        name: "Contact",
        icon: Contact2,
        href: "#contact"
    }
];

const NavItem = ({
    item,
    onClick
}: {
    item: typeof navbarItems[number];
    onClick?: () => void;
}) => {
    const IconComponent = item.icon;

    return (
        <Button
            variant="ghost"
            size="lg"
            className={cn(
                "w-full justify-start gap-3 h-12 px-3",
                "hover:bg-accent hover:text-accent-foreground",
                "transition-colors duration-200"
            )}
            onClick={onClick}
        >
            <IconComponent className="h-5 w-5" />
            <span className="text-base font-medium">{item.name}</span>
        </Button>
    );
};

function SheetMobile({
    open,
    setOpen
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    const handleNavClick = () => {
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-accent hover:text-accent-foreground text-black dark:text-white "
                >
                    <Menu className="h-5 w-5 scale-150" />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96 backdrop-blur-3xl bg-white/80 dark:bg-black/30">
                <SheetHeader className="text-left">
                    <SheetTitle className="text-xl font-semibold">
                        Navigation
                    </SheetTitle>
                    <SheetDescription>
                        Explore different sections of the portfolio
                    </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-1 mt-8">
                    {navbarItems.map((item) => (
                        <a key={item.name} href={item.href} onClick={handleNavClick}>
                            <NavItem item={item} />
                        </a>
                    ))}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <Button
                        className={cn(
                            "w-full gap-2 h-11",
                            "bg-primary hover:bg-primary/90",
                            "text-primary-foreground"
                        )}
                        onClick={() => {
                            handleNavClick();
                            window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: 'smooth' });
                        }}
                    >
                        <Mail className="h-4 w-4" />
                        Get in Touch
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default SheetMobile;