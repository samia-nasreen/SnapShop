import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const SideBarNavItem = ({ to, closeSidebar, children }) => {
  return (
    <li className="my-2">
      <NavLink
        to={to}
        onClick={closeSidebar}
        className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default SideBarNavItem;
