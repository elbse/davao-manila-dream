import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-foreground">
            Get In Touch
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            If you wish to extend your support or have any questions, please
            don't hesitate to reach out. I am deeply grateful for your
            consideration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>your.email@example.com</span>
            </a>
            <a
              href="tel:+639123456789"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+63 912 345 6789</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>University of Mindanao, Davao City</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <p className="font-serif text-2xl md:text-3xl italic text-foreground mb-4">
            "Education is the passport to the future."
          </p>
          <p className="text-muted-foreground">— Malcolm X</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
