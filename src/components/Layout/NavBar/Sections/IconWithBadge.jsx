/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const IconWithBadge = ({ Icon, count, to }) => {
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
