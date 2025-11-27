import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "Python",
    "C++",
    "Blueprint Scripting (Unreal Engine)",
    "YOLOv8",
    "OpenCV",
    "PyTorch",
    "Transformers / Attention Models",
    "Blender",
    "Unreal Engine 5",
    "Google Colab",
    "Git/GitHub",
    "Computer Vision",
    "Game AI",
    "Deep Learning Systems",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-foreground/60 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-4 sm:px-6 py-2 sm:py-3 neon-border cursor-pointer group"
            >
              <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
