export const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-between gap-3 mx-auto px-5 lg:px-40 mb-32">
      <p className="text-center">Exquisite</p>
      <h2 className="w-full lg:w-5/12 text-[40px] text-center tracking-wider">
        Unforgettable Experiences Tailored to Your Desires
      </h2>
      <p className="w-full md:w-1/2 text-center mb-10">
        At LuxRestaurant, we go above and beyond to provide exclusive services
        that cater to the discerning diner. From private dining experience to
        personalized events, we ensure that every moment is tailored to your
        desires.
      </p>
      <div className="flex flex-wrap items-start gap-10">
        {/* Card 1 */}
        <div className="md:flex-1 flex flex-col items-center text-center gap-10">
          <img src="/content/service1-img.png" alt="" className="rounded-2xl" />
          <h3 className="text-xl">
            Private Dining: An Intimate Culinary Affair
          </h3>
          <p>
            Experience the epitome of luxury with our private dining services.
            Indulge in am intimate culinary affair, meticulously crafted to
            exceed your expectations.
          </p>
        </div>
        {/* Card 2 */}
        <div className="md:flex-1 flex flex-col items-center text-center gap-10">
          <img src="/content/service2-img.png" alt="" className="rounded-2xl" />
          <h3 className="text-xl">Event Hosting: Celebrate in Style</h3>
          <p>
            Host your special occasions with us and celebrate in style. Our team
            will ensure that every detail is taken care of, creating an
            unforgettable experience for you and your guests.
          </p>
        </div>
        {/* Card 3 */}
        <div className="md:flex-1 flex flex-col items-center text-center gap-10">
          <img src="/content/service3-img.png" alt="" className="rounded-2xl" />
          <h3 className="text-xl">
            Personalized Experiences: Tailored to Perfection
          </h3>
          <p>
            Let us create a personalized dining experience just for you. From
            customized menus to unique ambiance, we will ensure that every
            aspect is tailored to perfection.
          </p>
        </div>
      </div>
    </section>
  );
};
