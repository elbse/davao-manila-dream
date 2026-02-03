import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Quote } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, value: "charissepriego0140@gmail.com", href: "mailto:charissepriego0140@gmail.com" },
    { icon: Phone, value: "+63 951 270 4152", href: "tel:+639512704152" },
    { icon: MapPin, value: "University of Mindanao, Davao City", href: null },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-secondary relative overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">
            Reach Out
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium mt-4 text-foreground">
            Get In <span className="italic text-primary">Touch</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="glass rounded-xl text-center p-8 hover:glow-sm transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 mx-auto flex items-center justify-center mb-4 transition-all">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
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
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-24 pt-16 border-t border-border text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Quote className="w-5 h-5 text-primary rotate-180" />
          </div>
          <p className="font-serif text-2xl md:text-4xl italic text-foreground mb-4 leading-relaxed">
            "Education is the passport
            <br />
            to the future."
          </p>
          <p className="text-primary font-medium">— Malcolm X</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;