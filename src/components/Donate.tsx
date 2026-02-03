import { motion } from "framer-motion";
import { Smartphone, Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";

const GCASH_NUMBER = "09123456789"; // Replace with your actual GCash number

const GCashNumber = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GCASH_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center justify-center gap-3 glass hover:bg-secondary px-5 py-3 rounded-lg transition-all mx-auto mt-3 glow-sm"
    >
      <span className="font-mono text-lg tracking-wider text-foreground">{GCASH_NUMBER}</span>
      {copied ? (
        <Check className="w-4 h-4 text-accent" />
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
    </button>
  );
};

const Donate = () => {
  return (
    <section
      id="donate"
      className="py-32 px-6 bg-gradient-to-b from-secondary to-background relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">
              Take Action
            </span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-medium text-foreground">
            Send Your <span className="italic text-primary">Support</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="glass glow p-10 rounded-2xl relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 -z-10" />
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <span className="uppercase tracking-[0.3em] text-sm font-medium text-foreground">
                GCash
              </span>
            </div>

            {/* QR Code */}
            <div className="w-72 h-72 md:w-80 md:h-80 mx-auto mb-8 bg-white p-4 rounded-xl shadow-2xl">
              <img
                src="/qr-code.jpg"
                alt="GCash QR Code"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center">
              <p className="font-serif text-2xl text-foreground mb-2">
                Charisse Priego
              </p>
              
              {/* Copyable GCash Number */}
              <GCashNumber />
              
              <p className="text-muted-foreground text-sm mt-4">
                Scan the QR code or copy the number above
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-muted-foreground text-center text-sm mt-8 italic"
          >
            "Every peso counts and brings me closer to this dream."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;