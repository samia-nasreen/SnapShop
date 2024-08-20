import DeliveryIcon from "/assets/icon-delivery.png";
import CustomerServiceIcon from "/assets/icon-headphone.png";
import MoneyBackIcon from "/assets/icon-secure.png";
import ScrollToTopButton from "../../../../components/UI/ScrollToTopButton";
import ServiceItem from "./ServiceItem";

const ServicesSection = () => {
  return (
    <div className="services-section my-16 px-16 py-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <ServiceItem
          icon={DeliveryIcon}
          altText="Free and Fast Delivery"
          title="FREE AND FAST DELIVERY"
          info="Free delivery for all orders over $140"
        />
        <ServiceItem
          icon={CustomerServiceIcon}
          altText="24/7 Customer Service"
          title="24/7 CUSTOMER SERVICE"
          info="Friendly 24/7 customer support"
        />
        <ServiceItem
          icon={MoneyBackIcon}
          altText="Money Back Guarantee"
          title="MONEY BACK GUARANTEE"
          info="We return money within 30 days"
        />
      </div>
      <div className="flex justify-end -mr-8 mt-24 -mb-12">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default ServicesSection;
