/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? "text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]"
            : "text-gray-800 hover:border-b-[1px] hover:border-gray-500"
        }
        style={{ transition: "all 0.3s" }}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
