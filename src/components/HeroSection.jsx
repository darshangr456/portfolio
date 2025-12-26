import { ArrowDown } from "lucide-react";

export const HeroSection=()=>{
    return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-0">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 z-10">
         {/* Text Content */}
         <div className="text-center md:text-left space-y-6 max-w-2xl">
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Darshan</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">G R</span>
            </h1> 
            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
                Motivated and enthusiastic fresher eager to start a career in the IT industry. I have a basic understanding of technology, 
                strong problem-solving skills, and a willingness to learn new tools and concepts.
            </p> 
            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Contact Me
              </a>
            </div>   
         </div>
         
         {/* Professional Profile Photo */}
         <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative group opacity-0 animate-fade-in-delay-2">
           <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 z-10 mix-blend-overlay"></div>
             <img 
               src="/pictures/portfolioImage.png" 
               alt="Darshan G R - Frontend Developer" 
               className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
             />
           </div>
           {/* Subtle border highlight */}
           <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           {/* Subtle shadow */}
           <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl -z-10 blur-xl opacity-70"></div>
         </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
         <span className="text-sm text-muted-foreground mb-2">Scroll</span>
         <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>);
}