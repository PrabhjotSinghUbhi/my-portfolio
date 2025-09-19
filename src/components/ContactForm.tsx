"use client"
import { useState } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import emailJs from "emailjs-com"

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export default function MyForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values) {
        try {
            setIsSubmitting(true);

            console.log('Form submitted:', { ...values, time: new Date().toLocaleDateString() });
            const emailData = { ...values, time: new Date().toLocaleDateString() };

            const resp = await emailJs.send("service_co9h71c", "template_ydzkq5o", emailData, "x9rvOFTpwa69txult");
            console.log('EmailJS response:', resp);

            toast("Message sent successfully! I'll get back to you soon.", {
                position: "top-center"
            });

            // Reset form
            form.reset();

        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="John Doe"
                                    type="text"
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="your.email@email.com"
                                    type="email"
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="What would you like to discuss?"
                                    type="text"
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell me about your project, opportunity, or just say hello!"
                                    className="resize-none min-h-[120px]"
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    );
}