import Hero from "@/components/Hero";
import About from "@/components/About";
import Itinerary from "@/components/Itinerary";
import Purpose from "@/components/Purpose";
import Support from "@/components/Support";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Itinerary />
      <Purpose />
      <Support />
      <Donate />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
