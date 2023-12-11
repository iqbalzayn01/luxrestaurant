export const FeatureSection = () => {
  return (
    <section className="w-full flex flex-wrap items-start justify-between gap-3 mx-auto px-5 lg:px-40 mb-20">
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
