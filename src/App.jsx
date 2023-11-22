import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { FeatureSection } from "./components/feature/FeatureSection";
import { Services } from "./components/services/Services";
import { Products } from "./components/products/Products";
import { About } from "./components/about/About";
import { FeatureList } from "./components/feature/FeatureList";

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
    </>
  );
}
