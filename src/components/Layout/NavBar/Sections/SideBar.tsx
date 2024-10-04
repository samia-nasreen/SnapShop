import React, { RefObject } from 'react';
import SideBarNavItem from './SideBarNavItem';
import SearchBar from './SearchBar';

interface SideBarProps {
  isSidebarOpen: boolean;
  sidebarRef: RefObject<HTMLDivElement>;
  closeSidebar: () => void;
  isAuthenticated: boolean;
}

const SideBar: React.FC<SideBarProps> = ({
  isSidebarOpen,
  sidebarRef,
  closeSidebar,
  isAuthenticated,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${
        isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 bg-white h-full w-3/4 sm:w-1/2 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <SearchBar className="mb-4" />
          <ul>
            <SideBarNavItem to="/" closeSidebar={closeSidebar} item="Home" />
            <SideBarNavItem
              to="/contact"
              closeSidebar={closeSidebar}
              item="Contact"
            />
            <SideBarNavItem
              to="/about"
              closeSidebar={closeSidebar}
              item="About"
            />
            {!isAuthenticated ? (
              <SideBarNavItem
                to="/signup"
                closeSidebar={closeSidebar}
                item="Sign Up"
              />
            ) : (
              <SideBarNavItem
                to="/orders"
                closeSidebar={closeSidebar}
                item="Orders"
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
