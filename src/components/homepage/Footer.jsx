export const Footer = () => {
  return (
    <>
      <section className="w-full flex flex-wrap items-start justify-between gap-10 mx-auto px-5 py-20">
        <div className="">
          <h2 className="text-[40px] font-black mb-2">LuxRestaurant</h2>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Reservations
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-semibold tracking-wider">Subscribe</h4>
          <form id="formEmail" className="flex flex-wrap items-center gap-5">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-primary outline-none border border-black rounded-md px-4 py-2"
              placeholder="Enter your email"
            />
            <button type="submit" className="btn-cta">
              Subscribe
            </button>
          </form>
          <p>By subscribing, you agree to our Privacy Policy</p>
        </div>
      </section>
      <footer className="mx-auto px-5 pb-20">
        <hr className="w-full border border-black my-10" />
        <div className="flex flex-wrap justify-between gap-10">
          <ul className="flex items-center gap-10">
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Reservations
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                More
              </a>
            </li>
          </ul>
          <p className="copyright">
            © 2023 Luxury Restaurant. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
