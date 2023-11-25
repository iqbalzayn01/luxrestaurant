import { useState } from "react";
import PropTypes from "prop-types";

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const handlerMenuMobile = () => {
    setMenuMobile((prevMenu) => !prevMenu);
  };
  return (
    <header className="w-full mx-auto px-5 lg:px-40">
      <nav
        className={`relative flex w-full items-center justify-between py-10 transition-all duration-1000 ease-in-out ${
          menuMobile ? "h-[500px]" : "h-[80px]"
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-black z-30">
          LuxRestaurant
        </a>

        {/* Links: Mobile */}
        <button
          type="button"
          onClick={handlerMenuMobile}
          className="block md:hidden z-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M479.478-414.348 207.304-144.174q-12.674 12.674-31.445 13.055-18.772.38-32.207-13.055-12.674-12.674-12.674-31.826t12.674-31.826l379.609-379.609q-17.522-44.152-2.968-97.869 14.555-53.718 57.598-94.761 52.522-52.522 120.272-63.076 67.75-10.555 111.381 33.076 43.63 43.63 33.076 111.38-10.555 67.75-63.076 120.272-41.044 43.043-94.761 57.598-53.718 14.554-97.87-2.967L543.37-480l272.174 272.174q12.674 12.674 13.054 31.326.38 18.652-13.294 32.326Q802.63-131.5 783.478-131.5t-31.826-12.674L479.478-414.348Zm-191.022-45.5L169.891-578.413q-45.348-45.348-54.674-109.946t26.435-116.989q12.435-16.913 33.326-18.793 20.892-1.881 35.566 13.554L424.109-595.5 288.456-459.848Z" />
          </svg>
        </button>
        <Links
          className={`absolute z-10 flex md:hidden flex-col left-0 right-0 items-center gap-10 text-center transition-all duration-1000 ease-in-out ${
            menuMobile ? "translate-y-full" : "-translate-y-full"
          }`}
        />

        {/* Links: Desktop */}
        <Links className="hidden md:flex items-center gap-10 text-center" />

        {/* Button CTA */}
        <a href="#" className="hidden md:block btn-cta">
          Reserve
        </a>
      </nav>
    </header>
  );
};

export const Links = ({ className }) => {
  return (
    <ul className={`${className}`}>
      <li>
        <a href="" className=" font-normal hover:font-medium tracking-wider">
          Discover
        </a>
      </li>
      <li>
        <a href="" className=" font-normal hover:font-medium tracking-wider">
          Menu
        </a>
      </li>
      <li>
        <a href="" className=" font-normal hover:font-medium tracking-wider">
          Reservations
        </a>
      </li>
      <li>
        <a href="" className=" font-normal hover:font-medium tracking-wider">
          More
        </a>
      </li>
    </ul>
  );
};

Links.propTypes = {
  className: PropTypes.string.isRequired,
};
