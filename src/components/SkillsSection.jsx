import { useState } from "react";

import { cn } from "../lib/utils";

const skills = [
    {name:"HTML/CSS", level:75, category:"frontend"},
    {name:"JavaScript", level:70, category:"frontend"},
    {name:"React.js", level:65, category:"frontend"},
    {name:"TaiwindCSS", level:65, category:"frontend"},

    {name:"MySQL", level:75, category:"backend"},

    {name:"Python", level:75, category:"programming language"},
    {name:"C/C++", level:70, category:"programming language"},

    {name:"Git/GitHub", level:85, category:"tools"},
    {name:"VS Code", level:90, category:"tools"},
];

const categories=["all", "frontend", "programming language", "tools"];
export const SkillsSection =()=>{
    const[activeCategory, setActiveCategory]= useState('all'); 
    const filteredSkills = skills.filter((skill)=>activeCategory === "all" || skill.category === activeCategory);
    return(
        <section id="skills" className="section-container relative bg-gray-50">
            <div className="container mx-auto">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
                My <span className="text-primary">Skills</span>
               </h2>
               <p className="text-center text-muted-foreground mb-12 text-base md:text-lg">
                Technologies and tools I work with to bring ideas to life
               </p>

               <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
                   {categories.map((category,key)=>(
                    <button key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn("px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full transition-colors duration-300 capitalize font-medium text-xs sm:text-sm md:text-base",
                        activeCategory === category ? "bg-primary text-primary-foreground shadow-md" 
                        :"bg-white text-foreground hover:bg-primary/10 border border-border/50"
                    )}>
                        {category}
                        </button>
                   ))}  
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {filteredSkills.map((skill,key)=>(
                    <div key={key} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow-md card-hover border border-border/50 hover:shadow-lg transition-all duration-300">
                        <div className="text-left mb-3 sm:mb-4">
                           <div className="flex justify-between items-center mb-2">
                               <h3 className="font-semibold text-base sm:text-lg text-foreground">{skill.name}</h3>
                               <span className="text-xs sm:text-sm font-medium text-primary">{skill.level}%</span>
                           </div>
                           <div className="w-full bg-gray-200 h-2 sm:h-3 rounded-full overflow-hidden">
                               <div 
                                   className="bg-gradient-to-r from-primary to-primary/80 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                                   style={{width: `${skill.level}%`}}
                               />
                           </div>
                        </div>
                    </div>

                ))}

               </div>

            </div>

        </section> 
    )
}