import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            Thank you for taking the time to read my story.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Davao
            </span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground text-xs">© 2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;