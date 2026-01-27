import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, value: "charissepriego0140@gmail.com", href: "mailto:charissepriego0140@gmail.com" },
    { icon: Phone, value: "+63 951 270 4152", href: "tel:+639512704152" },
    { icon: MapPin, value: "University of Mindanao, Davao City", href: null },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs">
            Reach Out
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light mt-4 text-foreground">
            Get In <span className="italic">Touch</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="text-center p-8 border border-border hover:border-foreground transition-colors group"
            >
              <div className="w-12 h-12 border border-foreground/20 group-hover:border-foreground mx-auto flex items-center justify-center mb-4 transition-colors">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-muted-foreground text-sm">{item.value}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="font-serif text-3xl text-foreground mb-2">Charisse Priego</div>
            <p className="text-muted-foreground">BS Computer Science, 3rd Year</p>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px bg-foreground/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-24 pt-16 border-t border-border text-center"
        >
          <p className="font-serif text-2xl md:text-4xl italic text-foreground mb-4 leading-relaxed">
            "Education is the passport
            <br />
            to the future."
          </p>
          <p className="text-muted-foreground">— Malcolm X</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
