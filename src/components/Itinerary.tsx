import { motion } from "framer-motion";

const Itinerary = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "March 4, 2025",
      activities: [
        "Departure from Davao City (Flight to Manila)",
        "Arrival at NAIA, Transfer to Hotel",
        "Check-in and Orientation",
        "Welcome Dinner",
      ],
    },
    {
      day: "Day 2",
      date: "March 5, 2025",
      activities: [
        "Tech Company Visit #1",
        "Industry Talk & Workshop",
        "Lunch with IT Professionals",
        "Tech Company Visit #2",
      ],
    },
    {
      day: "Day 3",
      date: "March 6, 2025",
      activities: [
        "Startup Hub / Innovation Center Tour",
        "Networking Session with Alumni",
        "Cultural & Historical Tour (Intramuros / National Museum)",
        "Group Dinner",
      ],
    },
    {
      day: "Day 4",
      date: "March 7, 2025",
      activities: [
        "Final Company Visit / Seminar",
        "Closing Program",
        "Departure from Manila",
        "Arrival in Davao City",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 text-foreground">
            Tour Itinerary
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A 4-day journey of learning, exploration, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border p-6 md:p-8"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-3xl md:text-4xl text-foreground">
                  {item.day}
                </span>
                <span className="text-muted-foreground text-sm">
                  {item.date}
                </span>
              </div>
              <ul className="space-y-3">
                {item.activities.map((activity, actIndex) => (
                  <li
                    key={actIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
