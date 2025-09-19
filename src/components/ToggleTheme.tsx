"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"dark" | "light">()
    const [mounted, setMounted] = useState(false)
    const [animating, setAnimating] = useState(false)
    const [nextTheme, setNextTheme] = useState<"light" | "dark" | null>(null)

    useEffect(() => {
        const currentTheme = document.querySelector("html")?.classList.contains("dark") ? "dark" : "light"
        setTheme(currentTheme)
        setMounted(true)
    }, [])

    const handleToggle = () => {
        setTimeout(() => {
            document.querySelector("html")?.classList.toggle("dark")
        }, 300);
        const newTheme = theme === "dark" ? "light" : "dark"
        setNextTheme(newTheme)
        setTheme(newTheme)
        setAnimating(true)
    }

    return (
        <div className="relative">
            {/* Toggle Button */}
            <Button
                variant="ghost"
                size="icon"
                onClick={handleToggle}
                className="relative z-20"
            >
                {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Expanding Circle */}
            <AnimatePresence>
                {animating && nextTheme && (
                    <motion.div
                        key={nextTheme}
                        initial={{ scale: 0 }}
                        animate={{ scale: 100 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed top-0 right-0 z-50 flex items-center justify-center"
                        onAnimationComplete={() => {
                            // Only set theme AFTER animation finishes
                            setTheme(nextTheme)
                            setAnimating(false)
                            setNextTheme(null)
                        }}
                    >
                        <div
                            className={`w-10 h-10 rounded-full ${nextTheme === "dark" ? "bg-black" : "bg-white"
                                }`}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
