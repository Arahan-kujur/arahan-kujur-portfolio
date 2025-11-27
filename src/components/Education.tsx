import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <p className="text-foreground/60 text-lg">Academic background and focus areas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 neon-border">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <GraduationCap size={32} className="text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-foreground">9th Grade</h3>
                <p className="text-xl text-primary/90 mb-3 font-semibold">
                  One World International School
                </p>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={16} className="text-primary" />
                  <span>Sarjapur, Bengaluru, India</span>
                </div>

                <div className="space-y-2">
                  <p className="text-foreground/80">
                    <span className="font-semibold text-primary">Focus Areas:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mathematics", "Physics", "Computer Science", "Artificial Intelligence"].map((subject) => (
                      <span
                        key={subject}
                        className="px-4 py-2 bg-secondary/50 rounded-lg text-sm text-foreground/80 border border-primary/20"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
