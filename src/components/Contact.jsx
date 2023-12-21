export const Contact = () => {
  return (
    <section className="w-full flex flex-wrap items-start justify-between gap-20 mx-auto px-5 lg:px-40 mb-32">
      <div>
        <p>Luxury</p>
        <h2 className="text-[40px] tracking-wider">Contact Information</h2>
        <p>
          For any inquiries or reservations, please feel free to reach out to
          us.
        </p>
      </div>
      <div className="flex-1 w-full flex flex-col gap-10">
        <div className="flex-grow flex items-center gap-5">
          <img
            src="/design/email.svg"
            alt=""
            className="w-fit bg-white shadow-xl rounded-3xl p-5"
          />
          <div>
            <h4 className="font-bold tracking-wide">Email</h4>
            <p>info@luxuryrestaurant.com</p>
          </div>
        </div>
        <div className="flex-grow flex items-center gap-5">
          <img
            src="/design/phone.svg"
            alt=""
            className="w-fit bg-white shadow-xl rounded-3xl p-5"
          />
          <div>
            <h4 className="font-bold tracking-wider">Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex-grow flex items-center gap-5">
          <img
            src="/design/location.svg"
            alt=""
            className="w-fit bg-white shadow-xl rounded-3xl p-5"
          />
          <div>
            <h4 className="font-bold tracking-wider">Office</h4>
            <p>123 Luxury St, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </section>
  );
};
