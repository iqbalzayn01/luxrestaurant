import PropTypes from "prop-types";
import { useState } from "react";

export const ReserveForm = ({ className }) => {
  const [reserveData, setReserveData] = useState({
    name: "",
    email: "",
    partySize: "",
    month: "",
    day: "",
    year: "",
    time: "",
  });

  const handleReset = () => {
    setReserveData({
      name: "",
      email: "",
      partySize: "",
      month: "",
      day: "",
      year: "",
      time: "",
    });
  };

  const handleChange = (e) => {
    setReserveData({ ...reserveData, [e.target.name]: e.target.value });
  };

  const handlePartySizeClick = (e) => {
    setReserveData({ ...reserveData, partySize: e });
  };

  const handleTimeClick = (e) => {
    setReserveData({ ...reserveData, time: e });
  };

  const generatePartySizeOptions = () => {
    const partySizeOptions = [1, 2, 3, 4, "5+"];
    return partySizeOptions.map((value) => (
      <button
        key={value}
        type="button"
        className={`w-full bg-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg ${
          reserveData.partySize === value ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => handlePartySizeClick(value)}
      >
        {value}
      </button>
    ));
  };

  const generateTimeOptions = () => {
    const startTime = 12; // Mulai dari jam 12 PM
    const endTime = 23; // Hingga jam 11 PM
    const timeOptions = [];

    for (let i = startTime; i <= endTime; i++) {
      const time12HourFormat = i % 12 === 0 ? 12 : i % 12;
      const timeSuffix = i < 12 ? "AM" : "PM";
      const timeValue = `${i.toString().padStart(2, "0")}:00`;

      timeOptions.push(
        <div
          key={timeValue}
          className={`w-full text-center bg-gray-300 hover:bg-gray-500 hover:text-white px-3 py-2 rounded-lg ${
            reserveData.time === timeValue ? "bg-gray-500 text-white" : ""
          }`}
          onClick={() => handleTimeClick(timeValue)}
        >
          {`${time12HourFormat} ${timeSuffix}`}
        </div>
      );
    }

    return timeOptions;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation details:", reserveData);
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
            <div className="flex items-center gap-5">
              {generatePartySizeOptions()}
            </div>
          </div>
          <div className="date flex gap-5">
            <div>
              <label htmlFor="month" className="block text-sm font-medium mb-1">
                Month
              </label>
              <input
                type="text"
                id="month"
                name="month"
                value={reserveData.month}
                onChange={handleChange}
                placeholder="MM"
                maxLength="2"
                className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="day" className="block text-sm font-medium mb-1">
                Day
              </label>
              <input
                type="text"
                id="day"
                name="day"
                value={reserveData.day}
                onChange={handleChange}
                placeholder="DD"
                maxLength="2"
                className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium mb-1">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={reserveData.year}
                onChange={handleChange}
                placeholder="YYYY"
                maxLength="4"
                className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
              />
            </div>
          </div>
          <div className="time">
            <label htmlFor="time" className="block text-sm font-medium mb-1">
              Time
            </label>
            <div className="grid grid-cols-4 gap-2">
              {generateTimeOptions()}
            </div>
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
