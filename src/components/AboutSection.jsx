import { Code, TrendingUp } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold">Passionate Frontend Developer and Tech Enthusiast</h3>
            <p className="text-muted-foreground">
              I am an aspiring front-end developer with a strong interest in building clean, responsive, and visually engaging websites.
              I have hands-on experience with modern web technologies such as HTML, CSS, JavaScript, and frontend frameworks,
              and I enjoy transforming ideas into interactive, user-friendly interfaces.
            </p>

            <p className="text-muted-foreground">
              As a fresher, I am committed to continuously learning, improving my skills, and staying updated with the latest trends in the front-end ecosystem.
              I enjoy solving problems, experimenting with UI components, and creating smooth user experiences that work across all devices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground text-sm">Crafting intuitive layouts, improving usability, and ensuring seamless user experiences through thoughtful design.</p>
                  </div>
                </div>
              </div>
              
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Skill Development</h4>
                    <p className="text-muted-foreground text-sm">Focusing on mastering core frontend fundamentals and gradually expanding into modern tools and frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 animate-spin-slow"></div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/assets/profile.jpg"
                  alt="Darshan G R - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/80 flex items-center justify-center text-white">
                <Code className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
