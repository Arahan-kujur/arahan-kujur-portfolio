import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { useRef } from "react";

interface Project {
  title: string;
  subtitle: string;
  technologies: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "YOLOv8 Snake Game",
    subtitle: "AI-Controlled Snake System",
    technologies: "Python, OpenCV, YOLOv8",
    description: "A real-time Snake game controlled using hand gestures detected by YOLOv8. Integrated model inference with game logic and collision detection. Runs at 30–60 FPS.",
  },
  {
    title: "Mini Transformer from Scratch",
    subtitle: "Text Classifier",
    technologies: "Python, PyTorch, NumPy",
    description: "Built a simplified Transformer manually, implementing scaled dot-product attention, multi-head attention, positional encodings, and feedforward layers. Compared performance with LSTM/CNN models.",
  },
  {
    title: "Football Analytics AI",
    subtitle: "Player Tracking & Heatmaps (Ongoing)",
    technologies: "Python, YOLOv8, OpenCV, Pandas, Matplotlib",
    description: "Automated analytics tool for football match footage. Detects players, tracks movement, generates heatmaps and CSV analytics. Still improving tracking reliability.",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-6 sm:p-8 neon-border group hover:border-primary/60 transition-all duration-300 cursor-pointer h-full"
    >
      <div style={{ transform: "translateZ(50px)" }}>
        <div className="flex items-start justify-between mb-4">
          <Code2 size={32} className="text-primary group-hover:scale-110 transition-transform" />
          <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-primary/80 mb-3">{project.subtitle}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.split(", ").map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-secondary/50 rounded-full text-foreground/70 border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-foreground/70 leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-lg">Innovative AI and Computer Vision solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
