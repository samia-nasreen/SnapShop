const ContactPage = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 pb-32">
      <div className="w-full max-w-7xl px-8">
        <div className="text-xs text-gray-500 mb-8 mt-2">
          <span className="mr-2">Home</span> /{" "}
          <span className="ml-2 text-black">Contact</span>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
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
            <p className="my-4 text-sm">
              We are available 24/7, 7 days a week.
            </p>
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
          <div
            className="bg-white rounded-md px-8 py-12 w-full md:w-2/3"
            style={{ boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.05)" }}
          >
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-white bg-stone-100 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-white bg-stone-100 rounded"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-white bg-stone-100 rounded"
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows="8"
                className="w-full p-3 border border-white bg-stone-100 rounded"
              />
              <div className="pt-4 pb-2 text-right">
                <button
                  type="submit"
                  className="bg-red-500 text-white py-3 px-8 rounded hover:bg-red-600 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
