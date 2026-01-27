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
    <section id="about" className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            hsl(var(--background)) 50px,
            hsl(var(--background)) 51px
          )`
        }} />
      </div>

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
              className="text-background/60 uppercase tracking-[0.3em] text-xs"
            >
              About The Journey
            </motion.span>
            <h2 className="font-serif text-4xl md:text-6xl font-light mt-4 mb-8">
              The Journey
              <br />
              <span className="italic">Ahead</span>
            </h2>
            <div className="w-24 h-px bg-background/30 mb-8" />
            <p className="text-background/80 text-lg leading-relaxed mb-6">
              I am a 3rd year Computer Science student at the{" "}
              <strong className="text-background">University of Mindanao</strong>,
              Davao City.
            </p>
            <p className="text-background/70 leading-relaxed">
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
                className="bg-background/5 backdrop-blur border border-background/10 p-6 group hover:bg-background/10 transition-colors"
              >
                <item.icon className="w-5 h-5 mb-4 text-background/60 group-hover:text-background transition-colors" />
                <p className="text-xs uppercase tracking-wider text-background/50 mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-background">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
