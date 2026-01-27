import { motion } from "framer-motion";
import { Smartphone, QrCode } from "lucide-react";

const Donate = () => {
  return (
    <section id="donate" className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/2 w-full h-full border border-background/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-background/5 rounded-full"
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-background/50 uppercase tracking-[0.3em] text-xs">
            Take Action
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light mt-4">
            Send Your <span className="italic">Support</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-background text-foreground p-10 relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground" />

            <div className="flex items-center justify-center gap-3 mb-8">
              <Smartphone className="w-5 h-5" />
              <span className="uppercase tracking-[0.3em] text-sm font-medium">GCash</span>
            </div>

            {/* QR Code Placeholder */}
            <div className="w-52 h-52 mx-auto mb-8 bg-secondary border-2 border-dashed border-muted flex flex-col items-center justify-center">
              <QrCode className="w-12 h-12 text-muted-foreground mb-3" />
              <p className="text-muted-foreground text-sm text-center">
                GCash QR Code
              </p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                (Upload your QR)
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-2xl text-foreground mb-2">
                Charisse Priego
              </p>
              <p className="text-muted-foreground text-sm">
                Scan the QR code above
              </p>
              <p className="text-muted-foreground text-sm">
                or search my name on GCash
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-background/60 text-center text-sm mt-8 italic"
          >
            "Every peso counts and brings me closer to this dream."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;
