/* eslint-disable react/prop-types */
import { IoIosMenu, IoIosClose } from "react-icons/io";

const SideBar = ({ isSidebarOpen, toggleSidebar, closeSidebar }) => (
  <>
    <div className="md:hidden fixed top-4 left-4 z-50">
      <button onClick={toggleSidebar}>
        <IoIosMenu size={28} />
      </button>
    </div>

    <div
      className={`fixed inset-y-0 left-0 w-64 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-white z-40 md:relative md:translate-x-0 md:w-1/4 px-2 py-4 md:py-0`}
    >
      <div className="md:hidden flex justify-end p-4">
        <button onClick={closeSidebar}>
          <IoIosClose size={28} />
        </button>
      </div>
      <ul className="space-y-4">
        <li className="text-lg font-medium">Manage My Account</li>
        <li className="text-red-500 ml-8">My Profile</li>
        <li className="text-gray-500 ml-8">Address Book</li>
        <li className="text-gray-500 ml-8">My Payment Options</li>
      </ul>
      <ul className="mt-10 space-y-4">
        <li className="text-lg font-medium">My Orders</li>
        <li className="text-gray-500 ml-8">My Returns</li>
        <li className="text-gray-500 ml-8">My Cancellations</li>
      </ul>
      <ul className="mt-10 space-y-4">
        <li className="text-lg font-medium">My WishList</li>
      </ul>
    </div>

    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={closeSidebar}
      ></div>
    )}
  </>
);

export default SideBar;
