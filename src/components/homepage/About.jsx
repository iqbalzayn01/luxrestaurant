export const About = () => {
  return (
    <section className="w-full flex flex-wrap items-start justify-between gap-3 mx-auto px-5 lg:px-40 mb-20">
      <div className="md:flex-1">
        <h2 className="text-[40px] tracking-wider">
          Crafting Culinary Excellence
        </h2>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <p>
          At LuxRestaurant, we are dedicated to creating an extraordinary dining
          experience that combines culinary artistry with luxurious ambiance.
          Every dish we serve is a masterpiece, meticulously crafted to delight
          your senses.
        </p>
        <button className="w-fit btn-cta">Learn More</button>
      </div>
    </section>
  );
};
