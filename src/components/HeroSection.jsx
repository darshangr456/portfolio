import { ArrowDown, Mail, Phone, Download, Code } from "lucide-react";

export const HeroSection=()=>{
    return (
    <section id="hero" className="relative flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 section-container bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 z-10 relative">
         {/* Text Content */}
         <div className="text-center md:text-left space-y-4 md:space-y-6 max-w-2xl w-full">
           {/* Role Badge */}
           {/* <div className="opacity-0 animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
             <Code className="h-4 w-4 text-primary" />
             <span className="text-sm font-medium text-primary">Frontend Developer</span>
           </div> */}

           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Darshan</span>
            <span className="text-foreground ml-1 md:ml-2 opacity-0 animate-fade-in-delay-2">G R</span>
            </h1> 
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground opacity-0 animate-fade-in-delay-2">
              Building Beautiful & Functional Web Experiences
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-relaxed">
                Motivated and enthusiastic fresher eager to start a career in the IT industry. I have a basic understanding of technology, 
                strong problem-solving skills, and a willingness to learn new tools and concepts.
            </p> 

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg md:rounded-xl border border-border/50 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg md:rounded-xl border border-border/50 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground">Technologies</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg md:rounded-xl border border-border/50 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Dedicated</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              {/* <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3">
                <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Contact Me</span>
              </div> */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <a href="mailto:darshangr098765@gmail.com" className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 rounded-lg md:rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors truncate">darshangr098765@gmail.com</span>
                </a>
                <a href="tel:+917090043591" className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 rounded-lg md:rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors">+91 7090043591</span>
                </a>
              </div>
            </div>
         </div>
         
         {/* Right Column - Photo and Tech Stack */}
         <div className="w-full md:w-auto flex flex-col items-center gap-6 md:gap-8">
           {/* Professional Profile Photo */}
           <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 group opacity-0 animate-fade-in-delay-2">
             <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-500 bg-gradient-to-br from-primary/10 to-transparent">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 z-10 mix-blend-overlay"></div>
               <img 
                 src="/pictures/portfolioImage.png" 
                 alt="Darshan G R - Frontend Developer" 
                 className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
               />
             </div>
             {/* Animated border highlight */}
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             {/* Glow effect */}
             <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl -z-10 blur-xl opacity-70"></div>
           </div>

           {/* Action Buttons and Tech Stack */}
           <div className="w-full space-y-4 opacity-0 animate-fade-in-delay-4">
             {/* Tech Stack */}
             <div className="w-full">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
                 <Code className="h-3.5 w-3.5 text-primary" />
                 <span className="text-xs font-semibold text-primary uppercase tracking-wide">Tech Stack</span>
               </div>
               <div className="flex flex-wrap justify-center gap-2">
                 {['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map((tech, idx) => (
                   <span key={idx} className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-primary/20 hover:border-primary/40 rounded-full text-xs font-medium text-foreground hover:text-primary transition-all duration-300 shadow-sm">
                     {tech}
                   </span>
                 ))}
               </div>
             </div>
             
             {/* Action Buttons */}
             <div className="flex flex-col sm:flex-row gap-3 w-full">
               <a href="/cv.pdf" download="Darshan-CV.pdf" className="cosmic-button flex items-center justify-center gap-2 w-full text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5">
                 <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                 <span className="whitespace-nowrap">Download Resume</span>
               </a>
               <a href="#contact" className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2 w-full text-sm sm:text-base">
                 Contact Me
               </a>
             </div>
           </div>
         </div>
      </div>
      
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
         <span className="text-sm text-muted-foreground mb-2">Scroll</span>
         <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>);
}