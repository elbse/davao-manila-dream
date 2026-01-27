import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";

const About = () => {
  const details = [
    { icon: Calendar, label: "Date", value: "March 4-7, 2025" },
    { icon: MapPin, label: "Destination", value: "Manila, Philippines" },
    { icon: Users, label: "Organized by", value: "University of Mindanao" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-foreground">
            The Journey Ahead
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="prose prose-lg max-w-none text-center"
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
            I am a 3rd year Computer Science student at the{" "}
            <strong className="text-foreground">University of Mindanao</strong>,
            Davao City. This March, our department is organizing an educational
            tour to Manila — an opportunity that promises to be transformative
            for my academic and professional growth.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            This tour will expose us to the thriving tech industries in the
            capital, allowing us to witness firsthand how leading companies
            operate, innovate, and shape the future of technology in the
            Philippines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {details.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background border border-border"
            >
              <item.icon className="w-6 h-6 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {item.label}
              </p>
              <p className="font-serif text-lg text-foreground">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
