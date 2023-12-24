import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PopUp = ({ isOpen, onClose, className }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Reservation Success"
      className={`${className}`}
      overlayClassName="modal-overlay bg fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="modal-content bg-white p-24 border border-gray-400 shadow-xl rounded-md">
        <h2 className="text-2xl font-bold mb-4">Reservation Successful!</h2>
        <p className="text-gray-700 mb-4">Thank you for your reservation.</p>
        <button onClick={onClose} className="btn-cta px-4 py-2 rounded-md">
          Close
        </button>
      </div>
    </Modal>
  );
};

PopUp.propTypes = {
  className: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export const ReserveForm = ({ className }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

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

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiKey, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reserveData),
      });

      if (response.ok) {
        setPopupOpen(true);
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
    <section className={`relative w-full mx-auto px-5 lg:px-40 ${className}`}>
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
          <PopUp isOpen={isPopupOpen} onClose={handlePopupClose} />
        </form>
      </div>
    </section>
  );
};

ReserveForm.propTypes = {
  className: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
