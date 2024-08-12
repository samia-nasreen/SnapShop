import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import AccountMenu from "../UI/AccountMenu";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <div className="bg-white h-24 flex items-baseline pt-9 pb-2 justify-between px-32 border border-gray-300">
      <div className="text-2xl font-bold">SnapShop</div>
      <ul className="flex space-x-12">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]"
                : "text-gray-800 hover:border-b-[1px] hover:border-gray-500"
            }
            style={{ transition: "all 0.3s" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]"
                : "text-gray-800 hover:border-b-[1px] hover:border-gray-500"
            }
            style={{ transition: "all 0.3s" }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]"
                : "text-gray-800 hover:border-b-[1px] hover:border-gray-500"
            }
            style={{ transition: "all 0.3s" }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]"
                : "text-gray-800 hover:border-b-[1px] hover:border-gray-500"
            }
            style={{ transition: "all 0.3s" }}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-4 py-2 pr-10 border-none bg-gray-100 rounded mr-3"
            style={{ fontSize: "14px", width: "270px" }}
          />
          <AiOutlineSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-700 text-2xl" />
        </div>
        <NavLink to="/wishlist" className="relative">
          <AiOutlineHeart className="text-gray-800 text-3xl" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </NavLink>
        <NavLink to="/cart" className="relative">
          <AiOutlineShoppingCart className="text-gray-800 text-3xl" />{" "}
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </NavLink>
        {isAuthenticated && <AccountMenu />}
      </div>
    </div>
  );
};

export default NavBar;
