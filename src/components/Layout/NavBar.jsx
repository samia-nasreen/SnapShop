import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu
} from 'react-icons/ai';
import AccountMenu from '../UI/AccountMenu';

const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => state.cart.items.length);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const closeSidebar = () => setSidebarOpen(false);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      <div className="bg-white h-20 md:h-24 flex items-baseline pt-6 md:pt-9 pb-2 justify-between px-8 md:px-32 border border-gray-300">
        <div className="md:text-2xl font-bold text-xl">SnapShop</div>
        <ul className="hidden md:flex space-x-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]'
                  : 'text-gray-800 hover:border-b-[1px] hover:border-gray-500'
              }
              style={{ transition: 'all 0.3s' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]'
                  : 'text-gray-800 hover:border-b-[1px] hover:border-gray-500'
              }
              style={{ transition: 'all 0.3s' }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]'
                  : 'text-gray-800 hover:border-b-[1px] hover:border-gray-500'
              }
              style={{ transition: 'all 0.3s' }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-800 border-b-[1px] border-gray-500 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.1)]'
                  : 'text-gray-800 hover:border-b-[1px] hover:border-gray-500'
              }
              style={{ transition: 'all 0.3s' }}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 py-2 pr-10 border-none bg-gray-100 rounded"
              style={{ fontSize: '14px', width: '270px' }}
            />
            <AiOutlineSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-700 text-2xl" />
          </div>
          <NavLink to="/wishlist" className="relative">
            <AiOutlineHeart className="text-gray-800 text-2xl md:text-3xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </NavLink>
          <NavLink to="/cart" className="relative">
            <AiOutlineShoppingCart className="text-gray-800 text-2xl md:text-3xl" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
          {isAuthenticated && <AccountMenu />}
          <AiOutlineMenu
            className="text-gray-900 text-2xl md:text-3xl md:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          ref={sidebarRef}
          className={`fixed left-0 top-0 bg-white h-full w-3/4 sm:w-1/2 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-6">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 py-2 pr-10 border-none bg-gray-100 rounded w-full mb-4"
            />
            <ul>
              <li className="my-2">
                <NavLink
                  to="/"
                  onClick={closeSidebar}
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                >
                  Home
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/contact"
                  onClick={closeSidebar}
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                >
                  Contact
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/about"
                  onClick={closeSidebar}
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                >
                  About
                </NavLink>
              </li>
              <li className="my-2">
                <NavLink
                  to="/signup"
                  onClick={closeSidebar}
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
