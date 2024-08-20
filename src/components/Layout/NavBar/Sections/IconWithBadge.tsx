import { NavLink } from "react-router-dom";
import React from "react";

interface IconWithBadgeProps {
  Icon: React.ElementType;  
  count: number;
  to: string;
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({ Icon, count, to }) => {
  return (
    <NavLink to={to} className="relative">
      <Icon className="text-gray-800 text-2xl md:text-3xl" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {count}
        </span>
      )}
    </NavLink>
  );
};

export default IconWithBadge;
