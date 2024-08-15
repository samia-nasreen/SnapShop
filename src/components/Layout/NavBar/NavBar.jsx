import { useState, useRef, useEffect } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import NavItem from "./Sections/NavItem";
import IconWithBadge from "./Sections/IconWithBadge";
import SearchBar from "./Sections/SearchBar";
import SideBar from "./Sections/SideBar";
import AccountMenu from "../../UI/AccountMenu/AccountMenu";

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => state.cart.items.length);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      <div className="bg-white h-20 md:h-24 flex items-baseline pt-6 md:pt-9 pb-2 justify-between px-8 md:px-32 border border-gray-300">
        <div className="md:text-2xl font-bold text-xl">SnapShop</div>
        <ul className="hidden md:flex space-x-12">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/signup">Sign Up</NavItem>
        </ul>
        <div className="flex items-center space-x-4">
          <SearchBar className="hidden md:block" />
          <IconWithBadge
            Icon={AiOutlineHeart}
            count={wishlistCount}
            to="/wishlist"
          />
          <IconWithBadge
            Icon={AiOutlineShoppingCart}
            count={cartCount}
            to="/cart"
          />
          {isAuthenticated && <AccountMenu />}
          <AiOutlineMenu
            className="text-gray-900 text-2xl md:text-3xl md:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <SideBar
        isSidebarOpen={isSidebarOpen}
        sidebarRef={sidebarRef}
        closeSidebar={closeSidebar}
      />
    </div>
  );
};

export default NavBar;
