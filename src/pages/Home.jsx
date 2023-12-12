import { Header } from "../components/Header";
import { FeatureSection, FeatureList } from "../components/Features";
import { Services } from "../components/Services";
import { Products } from "../components/Products";
import { About } from "../components/About";
import { Membership } from "../components/Membership";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
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

const Hero = () => {
  return (
    <section className="bg-hero flex flex-col gap-10 text-white mx-auto px-5 py-40 lg:px-40 mb-32">
      <h1 className="w-full md:w-1/2 text-5xl font-bold tracking-wider">
        Experience the Epitome of Luxury Dining
      </h1>
      <p className="w-full md:w-2/5">
        Indulge in a culinary journey like no other at LuxRestaurant. Our
        opulent ambiance and exquisite dishes will transport you to a world of
        gastronomic delight.
      </p>
      <button className="w-fit btn-cta">Explore</button>
    </section>
  );
};
