export const Header = () => {
  return (
    <header className="w-full mx-auto px-5">
      <nav className="flex w-full items-center justify-between py-10">
        {/* Logo */}
        <a href="#" className="font-black">
          LuxRestaurant
        </a>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-center">
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
        {/* Button CTA */}
        <a href="#" className="hidden md:block btn-cta">
          Reserve
        </a>
      </nav>
    </header>
  );
};
