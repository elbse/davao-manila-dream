import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const Donate = () => {
  return (
    <section id="donate" className="py-24 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-foreground">
            Send Your Support
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Your generosity means the world to me. You can easily send your
            support through GCash.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-background border border-border p-8 md:p-12 max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Smartphone className="w-5 h-5 text-foreground" />
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              GCash
            </span>
          </div>

          {/* QR Code Placeholder - Replace with actual GCash QR */}
          <div className="w-48 h-48 mx-auto mb-6 bg-secondary border-2 border-dashed border-border flex items-center justify-center">
            <p className="text-muted-foreground text-sm text-center px-4">
              GCash QR Code
              <br />
              <span className="text-xs">(Upload your QR)</span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-serif text-xl text-foreground">
              Charisse Priego
            </p>
            <p className="text-muted-foreground text-sm">
              Scan the QR code above or search my name on GCash
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm italic">
              "Every peso counts and brings me closer to this dream."
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-muted-foreground text-sm mt-8"
        >
          Please send me a message after donating so I can personally thank you!
        </motion.p>
      </div>
    </section>
  );
};

export default Donate;
