import React from "react";

interface ServiceItemProps {
  icon: string;
  altText: string;
  title: string;
  info: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  altText,
  title,
  info,
}) => {
  return (
    <div className="service-item flex flex-col items-center">
      <div className="icon-wrapper bg-zinc-300 rounded-full p-4 mb-4">
        <img
          src={icon}
          alt={altText}
          className="w-20 h-20 bg-black rounded-full p-3"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{info}</p>
    </div>
  );
};

export default ServiceItem;
