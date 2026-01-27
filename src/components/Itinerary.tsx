import { motion } from "framer-motion";

const Itinerary = () => {
  const schedule = [
    {
      day: "01",
      date: "March 3",
      title: "Departure",
      activities: [
        "Flight from Davao to Manila",
        "Arrival at NAIA",
        "Company Visit #1",
        "Company Visit #2",
        "Welcome Dinner",
      ],
    },
    {
      day: "02",
      date: "March 4",
      title: "Cultivating Connections",
      activities: [
        "Heritage/ Cultural Tour",
        "Company Visit #3",
      ],
    },
    {
      day: "03",
      date: "March 5",
      title: "Enchancing Experiences",
      activities: [
        "Company Visit #4",
        "Enchanted Kingdom Visit",
      ],
    },
    {
      day: "04",
      date: "March 6",
      title: "Homeward",
      activities: [
        "Final Company Visit",
        "Shopping at Mall of Asia",
        "Departure from Manila",
        "Arrival in Davao City",
      ],
    },
  ];

  return (
    <section className="py-32 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-muted-foreground uppercase tracking-[0.3em] text-xs">
            The Schedule
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light mt-4 text-foreground">
            Tour Itinerary
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

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
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-foreground rounded-full md:-translate-x-1/2 -translate-x-1/2 z-10" />
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className="inline-block">
                  <span className="font-serif text-6xl md:text-8xl font-light text-foreground/10">
                    {item.day}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {item.date}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1 mb-4">
                    {item.title}
                  </h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {item.activities.map((activity, actIndex) => (
                      <li
                        key={actIndex}
                        className="text-muted-foreground flex items-center gap-3 md:gap-3"
                        style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}
                      >
                        {index % 2 !== 0 && <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full flex-shrink-0" />}
                        <span>{activity}</span>
                        {index % 2 === 0 && <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full flex-shrink-0 hidden md:block" />}
                      </li>
                    ))}
                  </ul>
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
