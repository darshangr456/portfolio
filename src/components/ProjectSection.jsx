import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import heartbeats from "../assets/projects/heartbeats.jpg"
import portfolio from "../assets/projects/portfolio.png"
const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive and modern personal portfolio built using React and Tailwind CSS. Designed UI components, smooth navigation, and mobile-first layouts to ensure a seamless user experience",
        image: portfolio,
        tags: ["React", "Tailwind css"],
        // demoUrl: "#hero",
        githubUrl: "https://github.com/darshangr456/portfolio",
    },
    {
        id: 3,
        title: "Detection of CVD using Deep Neural Network",
        description: "Developed a deep learning model to classify five arrhythmia types using the MIT-BIH dataset. Achieved high accuracy with 1D CNN, 2D CNN, GRU, and LSTM architectures, improving reliability of ECG-based diagnosis.",
        image: heartbeats,
        tags: ["Python", "Deep learning"],
        // demoUrl: "https://github.com/darshangr456/CVD-Detection-DNN",
        githubUrl: "https://github.com/darshangr456/CVD-Detection-DNN",
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="section-container relative bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 text-base md:text-lg">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                    {projects.map((project, key) => (
                        <div key={key}
                            className="group bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg card-hover border border-border/50 hover:shadow-2xl transition-all duration-300">
                            <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-4 sm:p-5 md:p-6">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                    {project.tags.map((tag,key) => (
                                         <span key={key} className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium border border-border/50 rounded-full bg-primary/10 text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                              <h3 className="text-lg sm:text-xl font-semibold mb-1">{project.title}</h3>
                              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
                              <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                  <a href={project.demoUrl}
                                  target="_blank"
                                   className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/> </a> 
                                    <a href={project.githubUrl}
                                    target="_blank"
                                     className="text-foreground/80 hover:text-primary transition-colors duration-300">  <Github size={20} /> </a>  
                                </div>
                                </div>
                              </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/darshangr456" 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank">Check out my Github <ArrowRight size={16}/></a>
                </div>
            </div>
        </section>
    )
}