import { motion } from "framer-motion";
import { Lightbulb, Globe, Briefcase, Heart } from "lucide-react";

const Purpose = () => {
  const purposes = [
    {
      icon: Briefcase,
      title: "Industry Exposure",
      description:
        "Visit leading tech companies and startups to understand real-world software development.",
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description:
        "Experience Manila's rich history and diverse culture, broadening my perspectives.",
    },
    {
      icon: Lightbulb,
      title: "Learning Opportunities",
      description:
        "Attend workshops and networking events with industry professionals.",
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description:
        "Build confidence and create lasting memories with fellow students.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif text-[20vw] font-medium text-primary/[0.03] whitespace-nowrap select-none">
          WHY
        </span>
      </div>

      {/* Gradient orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">
            The Purpose
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium mt-4 text-foreground">
            Why This <span className="italic text-primary">Matters</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {purposes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 hover:glow transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;