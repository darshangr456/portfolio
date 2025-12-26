import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import * as Toast from "@radix-ui/react-toast";


export const ContactSection = () => {
    const [toastOpen, setToastOpen] = useState(false);
    const [toastType, setToastType] = useState("success"); // success | error
    const [toastMessage, setToastMessage] = useState("");

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // stops page reload

        emailjs
            .sendForm(
                "service_ol0toij",
                "template_1ru1z4a",
                formRef.current,
                "XVvda2hYDBRRhNVzp"
            )
            .then(
                () => {
                    setToastType("success");
                    setToastMessage("Message sent successfully!");
                    setToastOpen(true);
                    formRef.current.reset();
                },
                (error) => {
                    setToastType("error");
                    setToastMessage("Failed to send message. Try again.");
                    setToastOpen(true);
                    console.error(error);
                }
            );
    };

    return (

        <section id="contact" className="py-24 px-24 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or interested in collaborating? Feel free to reach out.
                    I am always open to discussing new opportunities and learning experiences.
                </p>
                <div className="grid grid-cols-l md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:darshangr098765@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        darshangr098765@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium" >Phone</h4>
                                    <a href="tel:+917090043591" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 7090043591
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium" >Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Bengaluru, Karnataka, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4>Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/darshan-gr-410997268" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/___darshan___gowda?igsh=eHAyYmlvdm45MG5t " target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form ref={formRef}
                            onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required placeholder="Enter Your Name"
                                    className="w-full px-4 py-3 rounded-md border border-input border-border/30 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required placeholder="Enter Your Email"
                                    className="w-full px-4 py-3 rounded-md border border-input border-border/30 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea type="text" id="message" name="message" required placeholder="Enter Your Message"
                                    className="w-full px-4 py-3 rounded-md border border-input border-border/30 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" />
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                Send Message
                                <Send size={16} />
                            </button>

                        </form>
                        <Toast.Provider>
                            <Toast.Root
                                open={toastOpen}
                                onOpenChange={setToastOpen}
                                duration={3000}
                                className={`p-4 rounded-lg shadow-lg text-white ${toastType === "success" ? "bg-green-600" : "bg-red-600"
                                    }`}
                            >
                                <Toast.Title className="font-semibold">
                                    {toastType === "success" ? "Success" : "Error"}
                                </Toast.Title>

                                <Toast.Description className="text-sm">
                                    {toastMessage}
                                </Toast.Description>
                            </Toast.Root>

                            <Toast.Viewport className="fixed bottom-4 right-4 z-50" />
                        </Toast.Provider>
                    </div>
                </div>
            </div>
        </section>


    )
}