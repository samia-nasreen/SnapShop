const ContactInfoCard = () => {
  return (
    <div
      className="bg-white rounded px-16 py-12 w-full md:w-1/3"
      style={{ boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
          <img
            src="/src/assets/call_icon.svg"
            alt="Call Icon"
            className="w-6 h-6 text-white"
          />
        </div>
        <h2 className="text-lg font-semibold ml-3">Call To Us</h2>
      </div>
      <p className="my-4 text-sm">We are available 24/7, 7 days a week.</p>
      <p className="mb-8 text-sm">Phone: +8801611112222</p>
      <hr className="my-4 bg-gray-300 h-[1px]" />
      <div className="flex items-center mt-8 mb-6">
        <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
          <img
            src="/src/assets/mail_icon.svg"
            alt="Mail Icon"
            className="w-6 h-6 text-white"
          />
        </div>
        <h2 className="text-lg font-semibold ml-3">Write To Us</h2>
      </div>
      <p className="my-4 text-sm">
        Fill out our form and we will contact you within 24 hours.
      </p>
      <p className="mb-4 text-sm">Emails: customer@snapshop.com</p>
      <p className="text-sm">Emails: support@snapshop.com</p>
    </div>
  );
};

export default ContactInfoCard;
