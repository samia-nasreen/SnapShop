import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../../../store/auth";
import AccountMenuOptions from "./AccountMenuOptions";

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
      <button
        onClick={toggleDropdown}
        className="text-gray-800 text-2xl md:text-3xl"
      >
        <AiOutlineUser />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gradient-to-r from-zinc-500 via-gray-500 to-zinc-600 rounded-md shadow-lg overflow-hidden z-20">
          <AccountMenuOptions closeDropdown={closeDropdown} logout={logout} />
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
