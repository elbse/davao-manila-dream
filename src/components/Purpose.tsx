import { motion } from "framer-motion";
import { Lightbulb, Globe, Briefcase, Heart } from "lucide-react";

const Purpose = () => {
  const purposes = [
    {
      icon: Briefcase,
      title: "Industry Exposure",
      description:
        "Visit leading tech companies and startups to understand real-world software development practices and corporate culture.",
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description:
        "Experience the rich history and diverse culture of Manila, broadening perspectives beyond Davao City.",
    },
    {
      icon: Lightbulb,
      title: "Learning Opportunities",
      description:
        "Attend workshops, seminars, and networking events with industry professionals and fellow students.",
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description:
        "Step out of comfort zones, build confidence, and create lasting memories with fellow CS students.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-foreground">
            Why This Matters
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This educational tour is more than just a trip — it's an investment
            in my future as a technology professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {purposes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-border hover:border-foreground transition-colors duration-300"
            >
              <item.icon className="w-8 h-8 mb-6 text-foreground" />
              <h3 className="font-serif text-xl mb-4 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;
