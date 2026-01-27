import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-6">
          A Humble Request for Support
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-foreground">
          Help Me Experience
          <br />
          <span className="italic">The World Beyond</span>
        </h1>
        <p className="text-foreground font-medium text-lg mb-4">— Charisse Priego</p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Supporting a Computer Science student's educational journey to Manila
          for industry exposure and cultural immersion.
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to learn more"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
