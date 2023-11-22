export const Products = () => {
  return (
    <section className="w-full flex flex-wrap items-center justify-between gap-5 mx-auto px-5 py-40">
      <div className="flex-1 w-full">
        <h2 className="text-[40px] tracking-wider">
          Experience the Art of Culinary Excellence
        </h2>
        <p>
          Indulge in a symphony of flavors with our curated selection of
          signature dishes. Each dish is a masterpiece, meticulously crafted to
          delight your senses.
        </p>
      </div>
      <img
        src="/public/product-img.png"
        alt=""
        className="w-full md:w-1/2 object-cover rounded-2xl"
      />
    </section>
  );
};
