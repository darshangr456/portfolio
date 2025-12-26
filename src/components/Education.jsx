import { GraduationCap, BookOpen, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Your University Name",
    duration: "2020 - 2024",
    description: [
      "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
      "Participated in various hackathons and coding competitions",
      "Member of Computer Science Society"
    ],
    grade: "CGPA: 8.5/10",
    icon: <GraduationCap className="w-6 h-6 text-primary" />
  },
  {
    degree: "Pre-University (12th Grade)",
    institution: "Your College Name",
    duration: "2018 - 2020",
    description: [
      "Major in Computer Science with Mathematics",
      "Scored in top 5% of the state board examination",
      "Active participant in science exhibitions"
    ],
    grade: "Percentage: 90%",
    icon: <BookOpen className="w-6 h-6 text-primary" />
  },
  {
    degree: "High School (10th Grade)",
    institution: "Your School Name",
    duration: "2017 - 2018",
    description: [
      "Specialization in Science and Mathematics",
      "Awarded Best Student in Computer Science",
      "Member of School's Tech Club"
    ],
    grade: "Percentage: 92%",
    icon: <Award className="w-6 h-6 text-primary" />
  }
];

const EducationCard = ({ edu, index, isInView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      className="relative pl-6 sm:pl-8 md:pl-12 pb-8 sm:pb-10 md:pb-12 group"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      {/* Animated timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-transparent">
        <motion.div
          className="absolute top-0 left-0 w-full h-0 bg-primary origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center -translate-x-2.5 sm:-translate-x-3 md:-translate-x-3.5 z-10"
        whileHover={{ scale: 1.1, boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.3)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
      </motion.div>
      
      <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/30 group-hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
          <div className="flex-shrink-0">
            <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-lg md:rounded-xl text-primary">
              {edu.icon}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 sm:mb-3">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{edu.degree}</h3>
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full bg-primary/10 text-primary whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
            
            <div className="flex items-center text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
              <span className="flex items-center gap-1.5">
                {edu.institution}
              </span>
            </div>
            
            <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
              {edu.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/90 text-xs sm:text-sm">
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 text-primary rounded-lg border border-primary/10 w-fit">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">{edu.grade}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="section-container bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground">
            Educational <span className="text-primary">Journey</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-base md:text-lg">
            My academic background and continuous learning path in the field of technology and beyond.
          </p>
        </motion.div>
        
        <div ref={ref} className="relative">
          {educationData.map((edu, index) => (
            <EducationCard 
              key={index} 
              edu={edu} 
              index={index}
              isInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};