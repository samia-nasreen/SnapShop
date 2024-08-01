import DeliveryIcon from "../../../assets/shipped.png";
import CustomerServiceIcon from "../../../assets/support.png";
import MoneyBackIcon from "../../../assets/secure.png";
import UpArrowIcon from "../../../assets/arrow_up_icon.png";

const ServicesSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="services-section my-16 px-16 py-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="service-item flex flex-col items-center">
          <div className="icon-wrapper bg-zinc-300 rounded-full p-4 mb-4">
            <img
              src={DeliveryIcon}
              alt="Free and Fast Delivery"
              className="w-20 h-20 bg-black rounded-full p-3"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="service-item flex flex-col items-center">
          <div className="icon-wrapper bg-zinc-300 rounded-full p-4 mb-4">
            <img
              src={CustomerServiceIcon}
              alt="24/7 Customer Service"
              className="w-20 h-20 bg-black rounded-full p-3"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="service-item flex flex-col items-center">
          <div className="icon-wrapper bg-zinc-300 rounded-full p-4 mb-4">
            <img
              src={MoneyBackIcon}
              alt="Money Back Guarantee"
              className="w-20 h-20 bg-black rounded-full p-3 text-white"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>
      <div className="flex justify-end -mr-8 mt-24 -mb-12">
        <button
          className="bg-gray-200 p-4 rounded-full shadow-lg hover:bg-gray-300 transition"
          onClick={scrollToTop}
        >
          <img src={UpArrowIcon} alt="Back to top" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
