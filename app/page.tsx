import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import PizzaShowcase from "@/components/PizzaShowcase";
import Story from "@/components/Story";
import PizzaProcess from "@/components/PizzaProcess";
import Gallery from "@/components/Gallery";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <PizzaShowcase />
        <Story />
        <PizzaProcess />
        <Gallery />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
