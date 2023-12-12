export const FeatureSection = () => {
  return (
    <section className="w-full flex flex-wrap items-start justify-between gap-3 mx-auto px-5 lg:px-40 mb-32">
      <div className="md:flex-1">
        <p>Exquisite</p>
        <h2 className="text-[40px] tracking-wider">
          Indulge in the Extraordinary
        </h2>
      </div>
      <div className="flex-1 flex flex-col gap-10">
        <p>
          Indulge in a culinary journey like no other at LuxRestaurant. Our
          opulent ambiance and exquisite dishes will transport you to a world of
          gastronomic delight.
        </p>
        <div className="flex flex-wrap  items-start gap-10">
          <div className="flex-1">
            <figure className="w-fit bg-white shadow-xl rounded-3xl mb-5 p-5">
              <img src="/design/discover.svg" alt="" />
            </figure>
            <h4 className="font-bold tracking-wide mb-5">Discover More</h4>
            <p>Indulge in a culinary journey like no other at LuxRestaurant.</p>
          </div>
          <div className="flex-1">
            <figure className="w-fit bg-white shadow-xl rounded-3xl mb-5 p-5">
              <img src="/design/journey.svg" alt="" />
            </figure>
            <h4 className="font-bold tracking-wider mb-5">Discover More</h4>
            <p>Indulge in a culinary journey like no other at LuxRestaurant.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureList = () => {
  return (
    <section className="w-full flex flex-col items-center justify-between gap-3 mx-auto px-5 lg:px-40 mb-32">
      <div className="flex flex-wrap items-start gap-10">
        {/* Card 1 */}
        <div className="md:flex-1 flex flex-col items-center text-center gap-10">
          <img
            src="/content/featurelist1-img.png"
            alt=""
            className="rounded-2xl"
          />
          <h3 className="text-xl">
            Enhance User Experience with Interactive Elements
          </h3>
          <p>
            Engage visitors with captivating parallax scrolling, hover effects,
            and subtle animations.
          </p>
        </div>
        {/* Card 2 */}
        <div className="md:flex-1 flex flex-col items-center text-center gap-10">
          <img
            src="/content/featurelist2-img.png"
            alt=""
            className="rounded-2xl"
          />
          <h3 className="text-xl">Immerse in a Visual Journey of Delight</h3>
          <p>
            Experience the restaurant`s opulence through stunning imagery and
            captivating visuals.
          </p>
        </div>
        {/* Card 3 */}
        <div className="md:flex-1 flex flex-col items-center text-center gap-10">
          <img
            src="/content/featurelist3-img.png"
            alt=""
            className="rounded-2xl"
          />
          <h3 className="text-xl">
            Unleash Your Senses with Exquisite Flavors
          </h3>
          <p>
            Embark on a culinary journey with our harmonious and flavorful
            dishes.
          </p>
        </div>
      </div>
    </section>
  );
};
