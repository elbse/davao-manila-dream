import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Plane } from "lucide-react";

const About = () => {
  const details = [
    { icon: Calendar, label: "Date", value: "March 3-6, 2026" },
    { icon: MapPin, label: "Destination", value: "Manila, Philippines" },
    { icon: Plane, label: "From", value: "Davao City" },
    { icon: Users, label: "Organized by", value: "University of Mindanao" },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-secondary relative overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-[0.3em] text-xs font-medium"
            >
              About The Journey
            </motion.span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium mt-4 mb-8 text-foreground">
              The Journey
              <br />
              <span className="italic text-primary">Ahead</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
            <p className="text-foreground text-lg leading-relaxed mb-6">
              I am a 3rd year Computer Science student at the{" "}
              <strong className="text-primary">University of Mindanao</strong>,
              Davao City.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This March, our department is organizing an educational
              tour to Manila — an opportunity that promises to be transformative
              for my academic and professional growth, exposing us to the thriving
              tech industries in the capital.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {details.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 group hover:glow-sm transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;