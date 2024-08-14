const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
