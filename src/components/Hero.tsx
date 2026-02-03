import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TOUR_DATE = new Date("2026-03-03T00:00:00");

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = TOUR_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6 justify-center mt-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 + index * 0.1 }}
          className="text-center"
        >
          <div className="bg-foreground text-background font-serif text-2xl md:text-4xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
            {String(unit.value).padStart(2, "0")}
          </div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
            {unit.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-background overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Floating circles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-foreground/10 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-foreground/5 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-foreground/5 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <Avatar className="w-24 h-24 md:w-28 md:h-28 border-2 border-foreground/20 mx-auto">
            <AvatarImage src="/placeholder.svg" alt="Charisse Priego" />
            <AvatarFallback className="text-2xl font-serif bg-foreground text-background">CP</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-muted-foreground uppercase text-xs md:text-sm mb-8"
        >
          A Humble Request for Support
        </motion.p>
        
        <div className="overflow-hidden mb-4">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground"
          >
            Help Me Experience
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light italic text-foreground"
          >
            The World Beyond
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mt-6"
        >
          Supporting a Computer Science student's educational journey to Manila
          for industry exposure and cultural immersion.
        </motion.p>

        {/* Countdown Timer */}
        <Countdown />
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Scroll to learn more"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
