import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-background/60 text-sm">
            Thank you for taking the time to read my story.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-background/40 text-xs">Made with hope</span>
            <span className="text-background/20">•</span>
            <span className="text-background/40 text-xs">© 2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
