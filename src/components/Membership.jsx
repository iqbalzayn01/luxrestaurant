export const Membership = () => {
  return (
    <section className="w-full flex flex-wrap items-start justify-between gap-10 mx-auto px-5 lg:px-40 mb-32">
      <div className="md:flex-1">
        <h2 className="text-[40px] tracking-wider">
          Unlock Exclusive VIP Membership Benefits
        </h2>
      </div>
      <div className="flex-1 flex flex-wrap gap-5">
        <p className="mb-5 flex-grow">
          Experience the epitome of luxury with our VIP membership program.
          Enjoy personalized benefits and exclusive offers.
        </p>
        <button className="w-fit btn-cta shadow-xl">Join</button>
        <button className="w-fit btn-cta shadow-xl">Learn More</button>
      </div>
    </section>
  );
};
