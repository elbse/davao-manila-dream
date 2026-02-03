import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const Support = () => {
  const items = [
    "Round-trip airfare (Davao to Manila)",
    "Hotel accommodation for 4 days",
    "Meals and daily allowances",
    "Transportation and tour expenses",
  ];

  return (
    <section className="py-32 px-6 bg-secondary relative overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">
              Your Support
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium mt-4 mb-8 text-foreground">
              How You Can
              <br />
              <span className="italic text-primary">Help</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Any amount of financial assistance, no matter how small, will go a
              long way in making this educational opportunity possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass glow rounded-2xl p-10 relative overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary uppercase tracking-[0.2em] text-xs font-medium">
                  Your Generosity Supports
                </span>
              </div>
              
              <ul className="space-y-5 relative">
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;