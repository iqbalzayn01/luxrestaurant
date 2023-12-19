import PropTypes from "prop-types";
import { useState } from "react";
// import axios from "axios";

export const ReserveForm = ({ className }) => {
  const [reserveData, setReserveData] = useState({
    name: "",
    email: "",
    partySize: 1,
    date: "",
    time: "",
  });

  const handleReset = () => {
    setReserveData({
      name: "",
      email: "",
      partySize: "",
      date: "",
      time: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserveData((reserveData) => ({
      ...reserveData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:9000/api/v1/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reserveData),
        }
      );

      if (response.ok) {
        console.log("Reservation created successfully");
        handleReset();
      } else {
        console.error("Failed to create reservation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className={`w-full mx-auto px-5 lg:px-40 ${className}`}>
      <div className="flex items-center shadow-2xl rounded-2xl">
        <figure className="hidden md:block w-full h-screen">
          <img
            src="/content/reserve-img.png"
            alt="Reserve Img"
            className="w-full h-screen object-cover rounded-2xl"
          />
        </figure>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 p-5"
        >
          <h2 className="text-center text-3xl font-bold">
            Reservation Details
          </h2>
          <div className="input-name">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={reserveData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="input-email">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={reserveData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
              required
            />
            <span className="text-xs text-gray-500">
              We`ll send confirmation to this email.
            </span>
          </div>
          <div className="party-size">
            <label
              htmlFor="partySize"
              className="block text-sm font-medium mb-1"
            >
              Party Size
            </label>
            <input
              type="number"
              id="partySize"
              name="partySize"
              value={reserveData.partySize}
              onChange={handleChange}
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="date">
            <label htmlFor="month" className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={reserveData.date}
              onChange={handleChange}
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="time">
            <label htmlFor="time" className="block text-sm font-medium mb-1">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={reserveData.time}
              onChange={handleChange}
              className="w-full text-center border border-gray-400 outline-none px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="btn-reserve-wrap flex justify-center gap-5">
            <input
              type="reset"
              id="reset"
              name="reset"
              onClick={handleReset}
              placeholder="Reset"
              className="w-full hover:bg-black hover:text-white border border-black rounded-md cursor-pointer"
            />
            <input
              type="submit"
              id="submit"
              name="submit"
              placeholder="Submit"
              className="btn-cta w-full shadow-xl cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

ReserveForm.propTypes = {
  className: PropTypes.string.isRequired,
};
