import { Header } from "./components/homepage/Header";
import { Hero } from "./components/homepage/Hero";
import { FeatureSection } from "./components/homepage/FeatureSection";
import { Services } from "./components/homepage/Services";
import { Products } from "./components/homepage/Products";
import { About } from "./components/homepage/About";
import { FeatureList } from "./components/homepage/FeatureList";
import { Membership } from "./components/homepage/Membership";
import { Contact } from "./components/homepage/Contact";
import { Footer } from "./components/homepage/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSection />
      <Services />
      <Products />
      <About />
      <FeatureList />
      <Membership />
      <Contact />
      <Footer />
    </>
  );
}
