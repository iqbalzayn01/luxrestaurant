import { useState } from "react";
import { Links } from "./Header";

export const Footer = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  const handlerBtn = () => {
    setBtnClicked((prevClicked) => !prevClicked);
  };

  return (
    <>
      <section className="w-full flex flex-col md:flex-row items-start justify-between gap-10 mx-auto px-5 lg:px-40 mb-20">
        <div className="w-full">
          <h2 className="text-[40px] font-black mb-2">LuxRestaurant</h2>
          <div
            className={`relative overflow-hidden border border-black rounded-md md:border-0 transition-[height] duration-1000 ease-in-out ${
              btnClicked ? "h-80" : "h-[75px]"
            }`}
          >
            <button
              type="button"
              onClick={handlerBtn}
              className="w-full block md:hidden text-start font-semibold px-5 py-6"
            >
              Links
            </button>
            <Links className="absolute md:relative flex flex-col md:flex-row gap-10 px-5 md:px-0" />
          </div>
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
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-10">
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href=""
                className=" font-normal hover:font-medium tracking-wider"
              >
                Cookie Settings
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
