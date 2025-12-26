import { Code, TrendingUp, Sparkles, Target } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base md:text-lg">
          Passionate about creating beautiful, functional, and user-centered digital experiences
        </p>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-primary/10 w-fit">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  Passionate Frontend Developer and Tech Enthusiast
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-5 text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-1">
                <p className="text-sm sm:text-base md:text-lg">
                  I am an aspiring front-end developer with a strong interest in building clean, responsive, and visually engaging websites.
                  I have hands-on experience with modern web technologies such as HTML, CSS, JavaScript, and frontend frameworks,
                  and I enjoy transforming ideas into interactive, user-friendly interfaces.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  As a fresher, I am committed to continuously learning, improving my skills, and staying updated with the latest trends in the front-end ecosystem.
                  I enjoy solving problems, experimenting with UI components, and creating smooth user experiences that work across all devices.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <a 
                  href="#contact" 
                  className="cosmic-button text-center"
                >
                  Get in Touch
                </a>
                <a 
                  href="/cv.pdf"
                  download="Darshan-CV.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 h-full">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-start gap-3 sm:gap-4 h-full">
                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-primary/10 flex-shrink-0">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-foreground">UI/UX Design</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Crafting intuitive layouts, improving usability, and ensuring seamless user experiences through thoughtful design.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-start gap-3 sm:gap-4 h-full">
                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-primary/10 flex-shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-foreground">Skill Development</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Focusing on mastering core frontend fundamentals and gradually expanding into modern tools and frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-start gap-3 sm:gap-4 h-full">
                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-primary/10 flex-shrink-0">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-foreground">Innovation</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Constantly exploring new technologies and creative solutions to build cutting-edge web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
              <div className="flex items-start gap-3 sm:gap-4 h-full">
                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-primary/10 flex-shrink-0">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-foreground">Goal-Oriented</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Driven by clear objectives and focused on delivering high-quality results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
