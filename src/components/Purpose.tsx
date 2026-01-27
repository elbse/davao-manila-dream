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
    <section className="py-32 px-6 bg-secondary relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-serif text-[20vw] font-light text-foreground/[0.02] whitespace-nowrap select-none">
          WHY
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs">
            The Purpose
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light mt-4 text-foreground">
            Why This <span className="italic">Matters</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {purposes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background p-10 hover:bg-foreground transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="relative">
                  <item.icon className="w-8 h-8 text-foreground group-hover:text-background transition-colors duration-500" />
                  <div className="absolute -inset-3 border border-foreground/20 group-hover:border-background/20 transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-background transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground/10 group-hover:border-background/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground/10 group-hover:border-background/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;
