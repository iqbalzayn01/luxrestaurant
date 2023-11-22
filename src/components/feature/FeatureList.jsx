export const FeatureList = () => {
  return (
    <section className="w-full flex flex-col items-center justify-between gap-3 mx-auto px-5 py-40">
      <div className="flex flex-wrap items-start gap-10">
        {/* Card 1 */}
        <div className="md:flex-1 flex flex-col items-center text-center gap-10">
          <img
            src="./public/featurelist1-img.png"
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
            src="./public/featurelist2-img.png"
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
            src="./public/featurelist3-img.png"
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
