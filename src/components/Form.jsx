import PropTypes from "prop-types";

export const ReserveForm = ({ className }) => {
  return (
    <section className={`w-full mx-auto px-5 lg:px-40 ${className}`}>
      <div className="flex items-center shadow-2xl rounded-2xl">
        <img
          src="/content/reserve-img.png"
          alt="Reserve Img"
          className="object-cover w-1/2 rounded-2xl"
        />
        <form className="w-full flex flex-col gap-7 p-20">
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
              placeholder="Your Name"
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
            />
          </div>
          <div className="input-email">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
            />
            <span className="text-xs text-gray-500">
              We`ll send confirmation to this email.
            </span>
          </div>
          <div className="party-size">
            <label
              htmlFor="party-size"
              className="block text-sm font-medium mb-1"
            >
              Party Size
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
            />
          </div>
          <div className="date">
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
            />
          </div>
          <div className="time">
            <label htmlFor="time" className="block text-sm font-medium mb-1">
              Time
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full text-sm font-medium border border-gray-400 outline-none px-3 py-2 rounded-md"
            />
          </div>
          <div className="btn-reserve-wrap flex justify-center gap-5">
            <input
              type="reset"
              id="reset"
              name="reset"
              placeholder="Reset"
              className="btn-cta w-full"
            />
            <input
              type="submit"
              id="submit"
              name="submit"
              placeholder="Submit"
              className="btn-cta w-full"
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
