import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";

const AccountMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const logout = () => {
    dispatch(authActions.logout());
    closeDropdown();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={toggleDropdown} className="text-gray-800 text-3xl">
        <AiOutlineUser />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gradient-to-r from-zinc-500 via-gray-500 to-zinc-600 rounded-md shadow-lg overflow-hidden z-20">
          <div className="text-white p-3">
            <Link
              to="/profile"
              className="flex items-center px-2 py-2 hover:bg-zinc-600"
              onClick={closeDropdown}
            >
              <AiOutlineUser className="text-2xl mr-3" />
              <span>Manage My Account</span>
            </Link>
            <a
              href="#orders"
              className="flex items-center px-2 py-2 hover:bg-zinc-600"
              onClick={closeDropdown}
            >
              <LuShoppingBag className="text-2xl mr-3" />
              <span>My Order</span>
            </a>
            <a
              href="#cancellations"
              className="flex items-center px-2 py-2 hover:bg-zinc-600"
              onClick={closeDropdown}
            >
              <MdOutlineCancel className="text-2xl mr-3" />
              <span>My Cancellations</span>
            </a>
            <a
              href="#reviews"
              className="flex items-center px-2 py-2 hover:bg-zinc-600"
              onClick={closeDropdown}
            >
              <FaRegStar className="text-2xl mr-3" />
              <span>My Reviews</span>
            </a>
            <button
              onClick={logout}
              className="flex items-center w-full px-2 py-2 hover:bg-zinc-600"
            >
              <BiLogOut className="text-2xl mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
