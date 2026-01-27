import { motion } from "framer-motion";

const Support = () => {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            How You Can Help
          </h2>
          <div className="w-16 h-px bg-background mx-auto mb-8" />
          <p className="text-background/80 text-lg md:text-xl leading-relaxed mb-12">
            Any amount of financial assistance, no matter how small, will go a
            long way in making this educational opportunity possible. Your
            support will help cover expenses such as airfare, accommodation,
            meals, and transportation during the tour.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-background/10 border border-background/20 p-8 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] mb-6 text-background/60">
            Your Generosity Supports
          </p>
          <ul className="space-y-4 text-left max-w-md mx-auto">
            {[
              "Round-trip airfare (Davao to Manila)",
              "Hotel accommodation for 4 days",
              "Meals and daily allowances",
              "Transportation and tour expenses",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-background/90"
              >
                <span className="w-2 h-2 bg-background rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
