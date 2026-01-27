import Hero from "@/components/Hero";
import About from "@/components/About";
import Purpose from "@/components/Purpose";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Purpose />
      <Support />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
