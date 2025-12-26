import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Your University",
    year: "2020 - 2024",
    description: "Specialized in Web Development and Software Engineering. Relevant coursework: Data Structures, Algorithms, Web Technologies, Database Management.",
    achievements: [
      "CGPA: 9.5/10",
      "Awarded Best Project in Web Technologies"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your College",
    year: "2018 - 2020",
    description: "Major in Computer Science. Scored 95% in final examinations.",
    achievements: [
      "School Topper in Computer Science",
      "Participated in National Science Exhibition"
    ]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educational <span className="text-primary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            My academic background and learning path that shaped my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/30 to-transparent -translate-x-1/2" />
            
            {education.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-8 md:pl-0 md:text-right' : 'md:pl-8 md:text-left'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`md:max-w-[45%] ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <div className="flex items-start md:items-center gap-4 mb-2">
                    <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 ${index % 2 === 0 ? 'md:order-2 md:-mr-12' : 'md:-ml-12'}`}>
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className={`${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <h3 className="text-xl font-bold text-foreground/90">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>
                  </div>
                  
                  <div className={`mt-4 p-6 bg-card rounded-xl border border-border/50 ${index % 2 === 0 ? 'md:mr-2' : 'md:ml-2'}`}>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-500" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div 
                  className={`absolute top-5 w-4 h-4 rounded-full bg-primary -left-2 md:left-1/2 md:-ml-2 ${index % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
          >
            Download Full Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
