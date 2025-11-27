import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "IBM RAG and Agentic AI",
    issuer: "IBM",
    date: "Issued Nov 2025",
    skills: "Retrieval-Augmented Generation, Agent Architecture, Python",
  },
  {
    title: "The Ultimate Blender 3D Simulations, Physics & Particles",
    issuer: "Udemy",
    date: "Issued Jul 2025",
    skills: "Blender, Particle Simulation, 3D Modeling",
  },
  {
    title: "Unreal Engine 5 Blueprints – Ultimate Developer Course",
    issuer: "Udemy",
    date: "Issued May 2025",
    skills: "Unreal Engine 5, Blueprints",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Certifications
          </h2>
          <p className="text-foreground/60 text-lg">Industry-recognized credentials and courses</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 neon-border group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                    <Calendar size={14} className="text-primary" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold text-primary">Skills:</span> {cert.skills}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-4 neon-border">
            <img
              src="/placeholder.svg"
              alt="Certifications"
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
