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

        <section id="contact" className="section-container relative bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 text-base md:text-lg">
                    Have a project in mind or interested in collaborating? Feel free to reach out.
                    I am always open to discussing new opportunities and learning experiences.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Contact Information Section */}
                    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg md:rounded-xl shadow-lg border border-border/50">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground text-left">Contact Information</h3>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-primary/10 flex-shrink-0">
                                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 text-left">Email</h4>
                                    <a href="mailto:darshangr098765@gmail.com" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all text-left block">
                                        darshangr098765@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-primary/10 flex-shrink-0">
                                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                </div>
                                <div className="flex-1 text-left">
                                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 text-left">Phone</h4>
                                    <a href="tel:+917090043591" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors text-left block">
                                        +91 7090043591
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-primary/10 flex-shrink-0">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                </div>
                                <div className="flex-1 text-left">
                                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 text-left">Location</h4>
                                    <p className="text-xs sm:text-sm text-muted-foreground text-left">
                                        Bengaluru, Karnataka, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground text-left">Connect with me</h4>
                            <div className="flex gap-3 sm:gap-4 justify-start">
                                <a href="https://www.linkedin.com/in/darshan-gr-410997268" target="_blank" 
                                   className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="https://www.instagram.com/___darshan___gowda?igsh=eHAyYmlvdm45MG5t " target="_blank"
                                   className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110">
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg md:rounded-xl shadow-lg border border-border/50">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground text-left">Send a Message</h3>
                        <form ref={formRef}
                            onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground text-left">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    placeholder="Enter Your Name"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-border/50 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground text-left">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="Enter Your Email"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-border/50 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base" 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground text-left">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    rows="4"
                                    placeholder="Enter Your Message"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-border/50 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all duration-300 text-sm sm:text-base" 
                                />
                            </div>
                            <button 
                                type="submit" 
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-6")}
                            >
                                Send Message
                                <Send size={18} />
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

                            <Toast.Viewport className="fixed bottom-4 right-4 z-40" />
                        </Toast.Provider>
                    </div>
                </div>
            </div>
        </section>


    )
}