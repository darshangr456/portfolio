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
      className="relative pl-8 md:pl-12 pb-12 group"
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
        className="absolute left-0 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center -translate-x-3.5 z-10"
        whileHover={{ scale: 1.1, boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.3)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
      </motion.div>
      
      <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 group-hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              {edu.icon}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {edu.duration}
              </span>
            </div>
            
            <div className="flex items-center text-muted-foreground text-sm mb-4">
              <span className="flex items-center gap-1.5">
                {edu.institution}
              </span>
            </div>
            
            <ul className="space-y-2 mb-4">
              {edu.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/90">
                  <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-lg border border-primary/10 w-fit">
              <Award className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{edu.grade}</span>
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
    <section id="education" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Educational Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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