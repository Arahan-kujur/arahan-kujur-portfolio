import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-foreground/70 mb-4">
            <span>Built with</span>
            <Heart size={16} className="text-primary animate-pulse" fill="currentColor" />
            <span>by</span>
            <span className="font-bold text-primary">Arahan Kujur</span>
          </div>
          
          <p className="text-foreground/60 mb-4">
            Available for remote internships only
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:kujurarahan@gmail.com" className="hover:text-primary transition-colors">
              kujurarahan@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:8884923434" className="hover:text-primary transition-colors">
              +91 8884923434
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-primary/10">
            <p className="text-xs text-foreground/40">
              © {new Date().getFullYear()} Arahan Kujur. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
