import { motion } from "framer-motion";

const Itinerary = () => {
  const schedule = [
    {
      day: "01",
      date: "March 3",
      title: "Departure",
      activities: [
        "Travel from Davao to Manila",
        "Company Visit #1",
        "Lunch Break",
        "Company Visit #2",
        "Welcome Dinner",
      ],
    },
    {
      day: "02",
      date: "March 4",
      title: "Cultivating Connections",
      activities: [
        "Breakfast",
        "Heritage/ Cultural Tour",
        "Lunch Break",
        "Company Visit #3",
        "Dinner",
        "Overnight Stay",
      ],
    },
    {
      day: "03",
      date: "March 5",
      title: "Enhancing Experiences",
      activities: [
        "Breakfast",
        "Company Visit #4",
        "Lunch Break",
        "Enchanted Kingdom Visit",
        "Dinner",
        "Overnight Stay",
      ],
    },
    {
      day: "04",
      date: "March 6",
      title: "Homeward",
      activities: [
        "Breakfast",
        "Final Company Visit",
        "Lunch Break",
        "Shopping Time",
        "Departure from Manila",
        "Arrival in Davao City",
      ],
    },
  ];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-medium">
            The Schedule
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium mt-4 text-foreground">
            Tour <span className="italic text-primary">Itinerary</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full md:-translate-x-1/2 -translate-x-1/2 z-10 bg-gradient-to-br from-primary to-accent glow-sm" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="glass rounded-xl p-6 hover:glow-sm transition-all duration-300">
                  <span className="font-serif text-5xl md:text-6xl font-medium bg-gradient-to-br from-primary/30 to-accent/30 bg-clip-text text-transparent">
                    {item.day}
                  </span>
                  <div className="mt-2">
                    <p className="text-primary text-sm uppercase tracking-wider font-medium">
                      {item.date}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1 mb-4">
                      {item.title}
                    </h3>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {item.activities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="text-muted-foreground flex items-center gap-3"
                          style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}
                        >
                          {index % 2 !== 0 && <span className="w-2 h-2 bg-primary/50 rounded-full flex-shrink-0" />}
                          <span>{activity}</span>
                          {index % 2 === 0 && <span className="w-2 h-2 bg-primary/50 rounded-full flex-shrink-0 hidden md:block" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;