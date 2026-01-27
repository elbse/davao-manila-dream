import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Support = () => {
  const items = [
    "Round-trip airfare (Davao to Manila)",
    "Hotel accommodation for 4 days",
    "Meals and daily allowances",
    "Transportation and tour expenses",
  ];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary to-transparent" />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs">
              Your Support
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light mt-4 mb-8 text-foreground">
              How You Can
              <br />
              <span className="italic">Help</span>
            </h2>
            <div className="w-24 h-px bg-foreground/20 mb-8" />
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
            <div className="bg-foreground text-background p-10 relative">
              <span className="text-background/50 uppercase tracking-[0.2em] text-xs">
                Your Generosity Supports
              </span>
              
              <ul className="mt-8 space-y-6">
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 border border-background/30 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-background/90">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-foreground/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
