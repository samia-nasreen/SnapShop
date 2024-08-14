import sendIcon from "../../../../assets/send_icon.png";

const Exclusive = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-6">
      <h2 className="text-xl font-bold mb-4">Exclusive</h2>
      <p className="mb-5 text-lg">Subscribe</p>
      <p className="mb-3 text-sm font-light">Get 10% off your first order</p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 pl-4 rounded-l bg-black border-2 border-r-0 border-gray-400 placeholder-gray-500"
          style={{ width: "180px", fontSize: "14px" }}
        />
        <button
          type="submit"
          className="p-2 -ml-9 rounded-r border-2 border-l-0 border-gray-400 flex items-center justify-center"
          style={{ width: "40px" }}
        >
          <img src={sendIcon} alt="Send" />
        </button>
      </form>
    </div>
  );
};

export default Exclusive;
