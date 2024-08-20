import { Link } from "react-router-dom";
import React from "react";

const DeliveryDetails: React.FC = () => {
  return (
    <div className="border border-gray-600 rounded-md max-w-[420px]">
      <div className="flex items-center p-4 border-b border-gray-600">
        <img
          src="/assets/delivery_icon.svg"
          alt="Free Delivery Icon"
          className="w-6 md:w-8 h-7 md:h-8 mr-4"
        />
        <div>
          <h3 className="text-sm md:text-base font-medium mb-1">
            Free Delivery
          </h3>
          <Link
            to="#"
            className="text-xs font-medium underline underline-offset-1"
          >
            Enter your postal code for Delivery Availability
          </Link>
        </div>
      </div>
      <div className="flex items-center p-4">
        <img
          src="/assets/return_icon.svg"
          alt="Return Delivery Icon"
          className="w-6 md:w-8 h-7 md:h-8 mr-4"
        />
        <div>
          <h3 className="text-sm md:text-base font-medium mb-2">
            Return Delivery
          </h3>
          <p className="text-xs font-medium">
            Free 30 Days Delivery Returns.{" "}
            <Link to="#" className="underline underline-offset-1">
              Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
