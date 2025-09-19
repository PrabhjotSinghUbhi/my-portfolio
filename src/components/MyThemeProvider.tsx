import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { Toaster } from "sonner"

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="overflow-x-hidden">
                <Toaster />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
